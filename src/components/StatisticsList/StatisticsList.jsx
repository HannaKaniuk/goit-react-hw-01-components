export const StatisticsList = ({title, stats}) => {
    return <section className="statistics">
    <h2 className="title">{title}</h2>
  
    <ul className="stat-list">
        {stats.map((stat, index) =>
        <li className="item" key={index}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
      </li>
      )}
      
      </ul>
  </section>
} 