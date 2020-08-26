import gql from 'graphql-tag';

export const CreateList = gql`
    mutation createList(
        $input: CreateListInput!
    ) {
        createList(input: $input) {
            id
            name
        }
    }
`;

export const updateList = gql`
    mutation updateList(
        $input: updateListInput!
    ) {
        updateList(input: $input) {
            id
            name
        }
    }
`;

export const DeleteList = gql`
    mutation deleteList(
        $input: DeleteListInput!
    ) {
        deleteList(input: $input) {
            id
            name
        }
    }
`;

export const CreateTask = gql`
    mutation createTask(
        $input: CreateTaskInput!
    ) {
        createTask(input: $input) {
            id
            name

        }
    }
`;

export const updateTask = gql`
    mutation updateTask(
        $input: updateTaskInput!
    ) {
        updateTask(input: $input) {
            id
            name
        }
    }
`;

export const deleteTask = gql`
    mutation deleteTask(
        $input: deleteTaskInput!
    ) {
        deleteTask(input: $input) {
            id
            name
        }
    }
`;