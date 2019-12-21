import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { getUsers, getUsersPending } from '../src/_actions/users';
import { connect } from 'react-redux';


 class Users extends Component {

    componentDidMount() {
        this.props.dispatch(getUsersPending());
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data;
            this.props.dispatch(getUsers(users))
        })
    }

  render() {   
  return (

    <div className="App">
      <header className="App-header">
        <h1>Data Users</h1>
            {this.props.users.isLoading === false ? null : <p>Loading</p>}
            {this.props.users.data.map((user, index) => (
                <p key={index}>{user.name}</p>   
            ))}
      </header>
    </div>
  );
 }
}

const mapStateToProps = (state) => {
    return  {
        users: state.users
    }
}

export default connect(mapStateToProps)(Users)
;

// export default method(mapStateToProps)/connect(mapStateToProps)(class name)
