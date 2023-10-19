import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Descr,
  Location,
  Name,
  StatsText,
  Stats,
  StatsAmount,
  StatsItem,
  Tag,
  Wrapper,
} from './Profile-styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <Wrapper>
      <Descr>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Descr>

      <Stats>
        {Object.entries(stats).map(([key, value], index) => (
          <StatsItem key={index}>
            <StatsText>{key}</StatsText>
            <StatsAmount>{value}</StatsAmount>
          </StatsItem>
        ))}
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
