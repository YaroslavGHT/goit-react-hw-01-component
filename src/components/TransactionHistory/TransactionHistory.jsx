import React from 'react';
import css from './TransactionHistory.module.css';

const MarckupTransaction = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr className={css.header_table}>
                    <th className={css.item_header}>Type</th>
                    <th className={css.item_header}>Amount</th>
                    <th className={css.item_header}>Currency</th>
                </tr>
            </thead>
            {items?.map(item => {
                return (
                    <tbody className={css.body_table} key={item.id}>
                        <tr className={css.body_table_tr}>
                            <td className={css.item_body}>{item.type}</td>
                            <td className={css.item_body}>{item.amount}</td>
                            <td className={css.item_body}>{item.currency}</td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
};

export { MarckupTransaction };