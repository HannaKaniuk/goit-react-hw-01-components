import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction_History}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistoryItem key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};
