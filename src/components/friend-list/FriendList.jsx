import React from 'react';
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { List } from './friend-list-styles';

export const FriendList = props => {
  const { friends } = props;
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
