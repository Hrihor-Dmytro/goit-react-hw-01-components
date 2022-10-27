import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistics = ({ title, stats }) => (
  <section>
    {title && <h2 className={css.h2}>{title}</h2>}
    <ul className={css.ul}>
      {stats.map(({ id, label, percentage }) => (
        <li className={css.li} key={id}>
          <span>{label}</span>
          <span className={css.span}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
