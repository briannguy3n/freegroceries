const Test2 = () => {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ]

  function ProductRow({ product }) {
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    )
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )

  function FilterableProductTable({ products }) {
    return(
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
  }

  return (
    <div className="bg-white flex flex-col">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}

export default Test2
