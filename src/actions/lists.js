import { makeSlug } from '../utils/slugs';
import { API, graphqlOperation, input } from 'aws-amplify';
import { CreateList, DeleteList, CreateTask, UpdateTask, UpdateList, DeleteTask } from '../wrappedGraphql/mutations';
import { FetchLists } from '../wrappedGraphql/queries';

// CREATE_LIST
export const newList = (list) => ({
    type: 'CREATE_LIST',
    list: { ...list }
})

// EDIT_LIST
export const editList = (listName, updates) => ({
    type: 'EDIT_LIST',
    listName,
    updates
})

// DELETE_LIST
export const deleteList = ({ listID }) => ({
    type: 'DELETE_LIST',
    listID
})

// ADD_TASK
export const addTaskToList = ({ taskListId, id, name = '', flag = '' }) => ({
    type: 'ADD_TASK_TO_LIST',
    taskListId,
    task: {
        id,
        name,
        flag
    }
})

// COMPLETE_TASK
export const completeTask = ({ listID, taskID }) => ({
    type: 'COMPLETE_TASK',
    listID,
    taskID
})

const updateTask = ({ listID, taskID, completed }) => ({
    type: 'UPDATE_TASK',
    listID,
    taskID,
    completed
})

// DELETE_TASK
export const deleteTask = ({ listID, taskID }) => ({
    type: 'DELETE_TASK',
    listID,
    taskID
})

const requestLists = () => ({
    type: 'REQUEST_LISTS'
})

const receiveLists = (data) => ({
    type: 'RECEIVE_LISTS',
    data,
})

const failureLists = () => ({
    type: 'LISTS_FAILURE'
});

const listDeleteErr = (errMsg) => ({
    type: 'LIST_DELETE_FAILURE',
    payload: errMsg
})

export const createDBList = ({ listName }) => {
    console.log('trying', listName)
    return async (dispatch) => {
        let dbList = null;

        try {
            const inputs = {
                id: makeSlug(5),
                name: listName
            };
            let makeList = await API.graphql(
                graphqlOperation(CreateList, { input: inputs })
            );
            dbList = makeList.data.createList;
            console.log('listsondb', dbList);
            dispatch(newList(dbList))
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateDBList = (listID, newListName) => {
    console.log(`trying to update list with id ${listID} to use new name ${newListName}`);
    return async (dispatch) => {
        let dbList = null;

        try {
            const inputs = {
                id: listID,
                name: newListName
            };
            let updateList = await API.graphql(graphqlOperation(UpdateList, { input: inputs })
            );
            dbList = updateList.data.updateList;
            // dispatch(editList(dbList))
        } catch (err) {
            console.log('failed to update list: ', err)
        }
    }
}

export const updateDBTask = (listID, taskID, completed) => {
    return async (dispatch) => {
        let dbTask = null;

        try {
            dispatch(updateTask({ listID, taskID, completed }))
            const inputs = {
                id: taskID,
                completed
            }
            let completeTask = await API.graphql(
                graphqlOperation(UpdateTask, { input: inputs })
            );

            console.log(completeTask.data);
            dbTask = completeTask.data.completeTask;
            console.log('updating task')
        } catch (err) {
            console.log('err', err)
        }

    }
}

export const createDBTask = (name, taskListId) => {
    return async (dispatch) => {
        let dbTask = null;

        try {
            const inputs = {
                id: makeSlug(5),
                taskListId,
                name,
                priority: 0,
                completed: false
            }
            dispatch(addTaskToList(inputs))
            console.log('inputs:', inputs)
            let makeTask = await API.graphql(
                graphqlOperation(CreateTask, { input: inputs })
            );
            dbTask = makeTask.data.createTask;
            console.log('taskondb', dbTask);
        } catch (err) {
            console.log(err);
        }

    }
}

export const deleteDBTask = (listID, taskID) => {
    return async (dispatch) => {
        let resp = null;

        try {
            dispatch(deleteTask({ listID, taskID }))
            const inputs = {
                id: taskID
            };
            let removeTask = await API.graphql(graphqlOperation(DeleteTask, { input: inputs }));
            console.log(removeTask);
            resp = removeTask.data;

        } catch (err) {
            console.log("unable to delete task:", err)
        }
    }
}

export const deleteDBList = (listID) => {
    return async (dispatch) => {
        let resp = null;

        try {
            dispatch(deleteList({ listID }))
            const inputs = {
                id: listID
            };
            let removeList = await API.graphql(
                graphqlOperation(DeleteList, { input: inputs })
            );
            console.log(removeList);
            resp = removeList.data;

        } catch (err) {
            console.log(err);
            dispatch(listDeleteErr(err));
        }
    }
}

export const getLists = () => {

    return async (dispatch) => {
        let dbLists = null;

        try {
            dispatch(requestLists())
            let getLists = await API.graphql(graphqlOperation(FetchLists))
            dbLists = getLists.data.listLists
            // return dbLists;
            dispatch(receiveLists(dbLists))
        } catch (err) {
            console.log(err);
            dispatch(failureLists())
        }
    }

};