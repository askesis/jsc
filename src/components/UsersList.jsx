import React, { Component } from 'react';

import UserCard from './UserCard';
import Button from './common/Button';

class UsersList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      users: [{
        id: '123',
        firstName: 'Jack',
        lastName: 'Archibald'
      }]
    }
  }

  componentWillMount() {
    this.setUsers(this.props.users)
  }

  componentWillReceiveProps(nextProps) {
    this.setUsers(nextProps.users)
  }

  setUsers(users) {
    const temp = [ ...this.state.users, ...users ]
    this.setState({ users: temp })
  }
  
  render() {
    const users = this.state.users;
    const { refetch } = this.props;

    return (
      <div>
        <Button text="Refetch" handleClick={refetch} />
        {users.map(u => <UserCard key={u.id} user={u} /> )}
      </div>
    );
  }
}

export default UsersList;