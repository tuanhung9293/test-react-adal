import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

import { authContext } from '../../adalConfig';
import { TodoElm } from '../../components/elements';

class Dashboard extends Component {
    state = {
        addValue: ''
    }

    componentDidMount = () => {
        this.props.actions.getTodoList();
    }

    handleAddChange = (event) => {
        this.setState({ addValue: event.target.value });
    }

    handleAdd = async () => {
        await this.props.actions.addTodoList({ Description: this.state.addValue, Owner: authContext._user.userName });
        this.setState({ addValue: '' });
        await this.props.actions.getTodoList();
    }

    render() {
        const { todoList, message } = this.props;
        return (
            <div className="container dashboard-page">
                <p className="error">{message.error}</p>
                <p>{message.response}</p>
                <div className="panel">
                    <div className="input-group">
                        <input className="form-control" onChange={this.handleAddChange} value={this.state.addValue}/>
                        <span className="input-group-btn">
                            <button onClick={this.handleAdd} className="btn btn-default">Add</button>
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
    todoList: state.todoList || [],
    message: state.message || {}
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

