import { TransactionHistoryItem } from "./TransactionHistoryItem"
export const TransactionHistory =({transactions})=>{
    return  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction) => (
        <TransactionHistoryItem key={transaction.id} {...transaction} />
      ))}
    </tbody>
  </table>}