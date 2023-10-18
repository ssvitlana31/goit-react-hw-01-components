import { StatisticsCard } from './Statistics-card';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, percentege }) => (
          <StatisticsCard key={id} label={label} percentege={percentege} />
        ))}
      </ul>
    </section>
  );
};
