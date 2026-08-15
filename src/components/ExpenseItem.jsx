function ExpenseItem({
    expense,
    onDeleteExpense,
    onUpdateExpense,
    onStartEditing
}) {
    return (
        <div>
            <p>Amount: Rs. {expense.amount}</p>
            <p>Category: {expense.category}</p>
            <p>Description: {expense.description}</p>
            <p>Date: {expense.date}</p>

            <button onClick={() => onStartEditing(expense)}>
                Edit
            </button>

            <button onClick={() => onDeleteExpense(expense.id)}>
                Delete
            </button>
        </div>
    )
}

export default ExpenseItem