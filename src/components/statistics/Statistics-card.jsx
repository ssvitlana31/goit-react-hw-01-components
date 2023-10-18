export const StatisticsCard = props => {
  const { label, percentage } = props;
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};
