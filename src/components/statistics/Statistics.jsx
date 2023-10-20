import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsCard } from './Statistics-card';
import { Section, Stats, Title } from './Statistic-styled';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <Section>
      {/* <Title>{title}</Title> */}
      {title ? <Title>{title}</Title> : null}
      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsCard key={id} label={label} percentage={percentage} />
        ))}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};
