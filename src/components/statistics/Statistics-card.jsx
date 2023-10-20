import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Statistic-styled';

export const StatisticsCard = props => {
  const { label, percentage } = props;

  const background = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <Item bg={`#${background}`}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </Item>
  );
};

StatisticsCard.propTypes = {
  label: PropTypes.string.isRequired,
  parcentage: PropTypes.number,
};
