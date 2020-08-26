import { v4 as uuidv4 } from 'uuid';
import { makeSlug } from '../utils/slugs';
import { API, graphqlOperation, input } from 'aws-amplify';
import { CreateList } from '../wrappedGraphql/mutations';
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
export const deleteList = ({ listName }) => ({
    type: 'DELETE_LIST',
    listName
})

// ADD_TASK
export const addTaskToList = ({ listID, taskName = '', dueAt = '', flag = '' }) => ({
    type: 'ADD_TASK_TO_LIST',
    listID,
    task: {
        id: makeSlug(5),
        name: taskName,
        due: dueAt,
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
})

export const createNewList = ({ listName }) => {
    console.log('trying', listName)
    return async (dispatch) => {
        let listOnDb = null;

        try {
            const inputs = {
                id: makeSlug(5),
                name: listName
            };
            let makeList = await API.graphql(
                graphqlOperation(CreateList, { input: inputs })
            );
            listOnDb = makeList.data.createList;
            console.log('listsondb', listOnDb);
            dispatch(newList(listOnDb))
        } catch (err) {
            console.log(err);
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