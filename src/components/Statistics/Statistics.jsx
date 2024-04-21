import PropTypes from "prop-types";
import css from "../Statistics/Statistics.module.css";

//Generate random color
const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
};

function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title !== undefined ? <h2 className={css.title}>Upload stats</h2> : null}
            <ul className={css.statList}>
                {
                    stats.map(stat => 
                        <li
                            className={css.item}
                            key={stat.id}
                            style={{backgroundColor: generateRandomColor()}}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    )
                }
            </ul>
        </section>
    );
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}