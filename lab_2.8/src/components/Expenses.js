import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items &&
        props.items.map((expenseItem) => (
          <ExpenseItem
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        ))}
    </div>
  );
}

export default Expenses;
