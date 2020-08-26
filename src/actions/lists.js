import { v4 as uuidv4 } from 'uuid';
import { makeSlug } from '../utils/slugs';
import { API, graphqlOperation, input } from 'aws-amplify';
import { CreateList, DeleteList, CreateTask } from '../wrappedGraphql/mutations';
import { ListLists, FetchLists } from '../wrappedGraphql/queries';

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
export const addTaskToList = ({ taskListId, name = '', flag = '' }) => ({
    type: 'ADD_TASK_TO_LIST',
    taskListId,
    task: {
        id: makeSlug(5),
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

export const createDBTask = (name, taskListId) => {
    return async (dispatch) => {
        let dbTask = null;

        try {
            const inputs = {
                id: makeSlug(5),
                taskListId,
                name,
                priority:0
            }
            console.log('inputs:',inputs)
            let makeTask = await API.graphql(
                graphqlOperation(CreateTask, {input: inputs})
            );
            dbTask = makeTask.data.createTask;
            console.log('taskondb',dbTask);
            dispatch(addTaskToList(inputs))
        } catch (err) {
            console.log(err);
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
            console.log('getLists', getLists)
            dbLists = getLists.data.listLists
            // return dbLists;
            dispatch(receiveLists(dbLists))
        } catch (err) {
            console.log(err);
            dispatch(failureLists())
        }
    }

};