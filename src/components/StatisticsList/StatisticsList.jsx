import css from './StatisticsList.module.css';

const generateRandomColor = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
};

export const StatisticsList = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map((stat, index) => (
          <li
            className={css.item}
            key={index}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
