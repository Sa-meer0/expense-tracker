import ExpenseItem from './ExpenseItem'

function ExpenseList({
    expenses,
    totalExpenses,
    onDeleteExpense,
    onStartEditing
}) {
    return (
        <section className="expense-list">
            <div className="expense-list-header">
                <h2>Expenses</h2>

                <p>
                    Showing {expenses.length} of {totalExpenses} expenses
                </p>
            </div>
            {expenses.length === 0 ? (
                <div className="empty-state">
                    <h3>No expenses found</h3>
                    <p>
                        Try adding an expense or changing your filters.
                    </p>
                </div>
            ) : (
                expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onDeleteExpense={onDeleteExpense}
                        onStartEditing={onStartEditing}
                    />
                ))
            )}
        </section>
    )
}

export default ExpenseList