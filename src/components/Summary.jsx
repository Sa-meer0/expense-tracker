function Summary({ expenses }) {
    const total = expenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
    )

    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()

    const monthlyExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.date)

        return (
            expenseDate.getMonth() === currentMonth &&
            expenseDate.getFullYear() === currentYear
        )
    })

    const monthlyTotal = monthlyExpenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
    )

    const highestExpense = expenses.reduce(
        (highest, expense) =>
            Number(expense.amount) > Number(highest.amount)
                ? expense
                : highest,
        { amount: 0 }
    )

    return (
        <section className="summary">
            <h2>Summary</h2>

            <div>
                <h3>Total Spending</h3>
                <p>Rs. {total.toFixed(2)}</p>
            </div>

            <div>
                <h3>This Month</h3>
                <p>Rs. {monthlyTotal.toFixed(2)}</p>
            </div>

            <div>
                <h3>Highest Expense</h3>
                <p>
                    Rs. {Number(highestExpense.amount).toFixed(2)}
                </p>
            </div>

            <div>
                <h3>Total Expenses</h3>
                <p>{expenses.length}</p>
            </div>
        </section>
    )
}

export default Summary