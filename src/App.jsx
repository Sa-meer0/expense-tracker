import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ExpenseForm from './components/ExpenseForm'
import Summary from './components/Summary'
import ExpenseList from './components/ExpenseList'
import FilterBar from './components/FilterBar'
import ExpenseChart from './components/ExpenseChart'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses')

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : []
  })

  const [editingExpense, setEditingExpense] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    localStorage.setItem(
      'expenses',
      JSON.stringify(expenses)
    )
  }, [expenses])

  function addExpense(expense) {
    const newExpense = {
      id: Date.now(),
      ...expense
    }

    setExpenses([...expenses, newExpense])
  }

  function deleteExpense(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this expense?'
    )

    if (!confirmed) {
      return
    }

    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    )
  }

  function updateExpense(updatedExpense) {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    )
  }

  function startEditing(expense) {
    setEditingExpense(expense)
  }

  const filteredExpenses = [...expenses]
    .filter((expense) => {
      const matchesSearch =
        expense.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      const matchesCategory =
        selectedCategory === 'All' ||
        expense.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return b.id - a.id
      }

      if (sortBy === 'oldest') {
        return a.id - b.id
      }

      if (sortBy === 'highest') {
        return Number(b.amount) - Number(a.amount)
      }

      if (sortBy === 'lowest') {
        return Number(a.amount) - Number(b.amount)
      }

      return 0
    })
  function resetFilters() {
    setSearchTerm('')
    setSelectedCategory('All')
    setSortBy('newest')
  }

  return (
    <div>
      <Navbar />

      <main>
        <h1>Expense Tracker</h1>
        <p>Track your daily expenses easily.</p>

        <ExpenseForm
          onAddExpense={addExpense}
          editingExpense={editingExpense}
          onUpdateExpense={updateExpense}
          onCancelEdit={() => setEditingExpense(null)}
        />

        <Summary expenses={expenses} />

        <ExpenseChart expenses={expenses} />

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onReset={resetFilters}
        />

        <ExpenseList
          expenses={filteredExpenses}
          totalExpenses={expenses.length}
          onStartEditing={startEditing}
        />
      </main>
    </div>
  )
}

export default App