import { StatisticsCard } from './Statistics-card';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentege }) => (
          <StatisticsCard key={id} label={label} percentege={percentege} />
        ))}
      </ul>
    </section>
  );
};
