import React from 'react';
import List from '../organisms/List';
import { connect } from 'react-redux';

// class TodoListClass extends React.Component {
//     state = {
//         items: [
//             {
//                 name: 'email company',
//                 completed: true,
//                 completedAt: '',
//                 due: ''
//             },
//             {
//                 name: 'walk dogs',
//                 completed: true,
//                 completedAt: '',
//                 due: ''
//             },
//             {
//                 name: 'build ofice',
//                 completed: false,
//                 completedAt: '',
//                 due: ''
//             },
//             {
//                 name: 'make tido app',
//                 completed: false,
//                 completedAt: '',
//                 due: ''
//             }
//         ]
//     }

//     itemClickHandler = (e) => {
//         console.log(e);
//     }

//     render() {
//         return (
//             <List
//                 title='To-do List'
//                 items={this.props.items}
//                 itemClickHandler={this.itemClickHandler}
//             />
//         )
//     }

// }

const TodoList = (props) => {
    console.log('props below');
    console.log(props);
    return (
        <List
            title='To-do List'
            items={props.items}

        />
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(TodoList);