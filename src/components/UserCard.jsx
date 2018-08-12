import React, { PureComponent } from 'react';

class UserCard extends PureComponent {
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