import css from './TransactionHistory.module.css'

export const TransactionHistoryItem =({type, amount, currency}) =>{
    return  <tr className={css.tableData}> 
      <td className={css.tableDataCell}>{type}</td>
      <td className={css.tableDataCell}>{amount}</td>
      <td className={css.tableDataCell}>{currency}</td>
    </tr>
}