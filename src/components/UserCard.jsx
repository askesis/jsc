import React from 'react';

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        {user.id} {user.firstName} {user.lastName}
      </div>
    );
  }
}

export default UserCard;
