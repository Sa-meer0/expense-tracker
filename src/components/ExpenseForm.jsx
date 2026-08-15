import { useEffect, useState } from 'react'

function ExpenseForm({
    onAddExpense,
    editingExpense,
    onUpdateExpense,
    onCancelEdit
}) {
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('Food')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(
        new Date().toISOString().split('T')[0]
    )
    useEffect(() => {
        if (editingExpense) {
            setAmount(editingExpense.amount)
            setCategory(editingExpense.category)
            setDescription(editingExpense.description)
            setDate(editingExpense.date)
        }
    }, [editingExpense])

    function handleSubmit(event) {
        event.preventDefault()

        const expenseData = {
            amount,
            category,
            description,
            date
        }

        if (editingExpense) {
            onUpdateExpense({
                ...editingExpense,
                ...expenseData
            })

            onCancelEdit()
        } else {
            onAddExpense(expenseData)
        }

        setAmount('')
        setCategory('Food')
        setDescription('')
        setDate(new Date().toISOString().split('T')[0])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    placeholder="Enter amount"
                />
            </div>

            <div>
                <label>Category</label>
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Shopping</option>
                    <option>Bills</option>
                    <option>Entertainment</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="What did you spend on?"
                />
            </div>

            <div>
                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                />
            </div>

            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpenseForm