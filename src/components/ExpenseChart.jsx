import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

function ExpenseChart({ expenses }) {
    const categoryTotals = {}

    expenses.forEach((expense) => {
        if (categoryTotals[expense.category]) {
            categoryTotals[expense.category] += Number(expense.amount)
        } else {
            categoryTotals[expense.category] = Number(expense.amount)
        }
    })

    const chartData = Object.entries(categoryTotals).map(
        ([category, amount]) => ({
            category,
            amount
        })
    )

    return (
        <section className="chart">
            <h2>Spending by Category</h2>

            {chartData.length === 0 ? (
                <p>No data available yet.</p>
            ) : (
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="category" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="amount"
                            fill="#2563eb"
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </section>
    )
}

export default ExpenseChart