import {useState} from "react"
// the main learning of this project is that always use product id insetad of key because when we apply filter or something else which chnages position so it mapps to the wrong 
//product which causes wrong answers or wrong output.
const initialProducts = [
    {id: 1, name: "Laptop", price: 50000},
    {id: 2, name: "Phone", price: 30000},
    {id: 3, name: "Headphones", price: 20000},
    {id: 4, name: "Keyboard", price: 10000},
    {id: 5, name: "Mouse", price: 5000},
]

function ProductRow({product})
{
    const [quantity, setQuantity] = useState(0)

    return(
        <div className="flex items-center justify-between p-4">
            <div>
                <h2 className="font-bold">
                    {product.name}
                </h2>
                <p>
                    ₹{product.price}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <span>
                    Quantity: {quantity}
                </span>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded bg-teal-700 px-3 py-1 text-white"
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default function KeysLab() {
    const [products, setProducts] = useState(initialProducts)

    const sortByPrice = () =>{
        const sorted = [...products].sort(
            (a,b) => a.price - b.price
        )
        setProducts(sorted)
    }

    return (
        <div className="p-10">
            <h1 className="font-display text-3xl font-bold">
                React Keys Lab
            </h1>
            <button
                onClick={sortByPrice}
                className="mt-6 rounded bg-teal-700 px-4 py-2 text-white"
            >
                Sort by price
            </button>
            <div className="mt-6 space-y-3">
                {
                    products.map((product, index) =>(
                        <ProductRow
                            key={product.id} // through this you can unify the index to the product according to their order
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}