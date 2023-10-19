import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './friend-list-styles';

export const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <Item>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
