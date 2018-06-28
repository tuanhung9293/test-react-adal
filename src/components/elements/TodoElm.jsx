import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';

class TodoElm extends Component {
    state = {
        editting: false
    }
    editSwitch = () => {
        this.setState({ editting: !this.state.editting })
    }

    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>
                    {
                        item.edit ? <input type="text" className="form-control" />
                            : <p>{item.Description}</p>
                    }
                </td>
                <td>
                    <p data-ng-hide="item.edit || editingInProgress">
                        <a onClick={this.editSwitch}>Edit</a> |
                        <a onClick={() => this.props.actions.deleteTodoList(item.ID)}>Delete</a>
                    </p>
                    {
                        this.state.editting && <p data-ng-show="item.edit">
                            <a onClick={this.editSwitch}>Save</a> |
                            <a onClick={this.editSwitch}>Cancel</a>
                        </p>
                    }
                </td>
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
