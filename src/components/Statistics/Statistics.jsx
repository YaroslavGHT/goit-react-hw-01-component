import React from 'react';
import css from './Statistics.module.css';

const MarckupStatistics = ({ title = '', stats }) => {
    return (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.stat_list}>
            {stats?.map(item => {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                return (
                <li className={css.item} key = {item.id} style={{ backgroundColor: randomColor }}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>
                );
             })}        
        </ul>
    </section>
  );
};

export { MarckupStatistics };