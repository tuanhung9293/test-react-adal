import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

import { TodoElm } from '../../components/elements';

class Dashboard extends Component {
    componentDidMount = () => {
        this.props.actions.getTodoList();
    }
    render() {
        const { todoList } = this.props;
        return (
            <div className="container dashboard-page">
                <p className="error">error</p>
                <p>loadingMessage</p>
                <div className="panel">
                    <div className="input-group">
                        <input ng-model="newTodoCaption" className="form-control" />
                        <span className="input-group-btn">
                            <button ng-click="add();" className="btn btn-default">Add</button>
                        </span>
                    </div>
                    <table className="table table-striped">
                        <tbody>
                            {
                                todoList.map((item, key) => <TodoElm key={key} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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
)(Dashboard);

