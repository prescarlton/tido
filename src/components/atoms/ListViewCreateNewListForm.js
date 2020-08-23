import React from 'react';

const ListViewCreateNewListForm = () => {
        // handler for user trying to escape from newTaskForm
        const escKeyHandler = (e) => {
            if (e.keyCode === 27) {
                props.onCancelHandler();
            }
        }
    
        const [listNameVal, setListNameVal] = useState('');
    
        const submitHandler = (e) => {
            e.preventDefault();
            props.onSubmitHandler(listNameVal);
        }
        const handleListNameChange = (e) => {
            setListNameVal(e.target.value);
        }
}