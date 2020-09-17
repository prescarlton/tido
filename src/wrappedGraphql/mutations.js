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

export const UpdateList = gql`
    mutation updateList(
        $input: UpdateListInput!
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

export const UpdateTask = gql`
    mutation updateTask(
        $input: UpdateTaskInput!
    ) {
        updateTask(input: $input) {
            id
            name
            completed
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