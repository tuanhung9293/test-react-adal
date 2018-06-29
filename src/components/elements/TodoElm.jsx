import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';

class TodoElm extends Component {
    state = {
        editting: false,
        editValue: this.props.item.Description,
    }

    editSwitch = () => {
        this.setState({ editting: !this.state.editting })
    }

    handleEditChange = (event) => {
        this.setState({ editValue: event.target.value });
    }

    handleEditSubmit = () => {
        this.props.actions.editTodoList({ Description: this.state.editValue, ID: this.props.item.ID })
        this.editSwitch();
    }

    handleEditCancel = () => {
        this.setState({ editValue: this.props.item.Description });
        this.editSwitch();
    }

    handleDeleteSubmit = () => {
        this.props.actions.deleteTodoList(this.props.item.ID)
    }

    render() {
        const { item } = this.props;
        return (
            <tr className="todo-elm">
                {
                    this.state.editting ?
                        <td>
                            <span>
                                <input type="text" className="form-control"
                                    defaultValue={this.state.editValue}
                                    onChange={this.handleEditChange} />
                            </span>
                            <span className="float-right">
                                <a onClick={this.handleEditSubmit}>Save</a> |
                            <a onClick={this.handleEditCancel}>Cancel</a>
                            </span>
                        </td>
                        :
                        <td>
                            <span>{item.Description}</span>
                            <span className="float-right">
                                <a onClick={this.editSwitch}>Edit</a> |
                            <a onClick={() => this.props.actions.deleteTodoList(item.ID)}>Delete</a>
                            </span>
                        </td>
                }
            </tr>)
    }
}

const mapStateToProps = state => ({
    todoList: state.todoList || []
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoElm);
