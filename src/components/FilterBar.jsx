function FilterBar({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    sortBy,
    onSortChange,
    onReset,
}) {
    return (
        <section className="filters">
            <input
                type="text"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />

            <select
                value={selectedCategory}
                onChange={(event) => onCategoryChange(event.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
            </select>

            <select
                value={sortBy}
                onChange={(event) => onSortChange(event.target.value)}
            >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
            </select>

            <button
                type="button"
                className="reset-button"
                onClick={onReset}
            >
                Reset
            </button>
        </section>
    )
}

export default FilterBar