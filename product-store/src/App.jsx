import { ShoppingCart, Search, Star } from "lucide-react"

function App() {
  return (
    <div className="p-10">
      <div className="flex items-center gap-3">
        <img
          src="/images.jpeg"
          alt="Product Store logo"
          className="h-10 w-10"
        />

        <h1 className="font-display text-4xl font-bold tracking-tight">
        Product Store
        </h1>
      </div>

      <div className="mt-8 flex gap-6">

        <button className="flex items-center gap-2">
          <ShoppingCart size={20} />
          Cart
        </button>

        <button className="flex items-center gap-2">
          <Search size={20} />
          Search
        </button>

        <button className="flex items-center gap-2">
          <Star size={20} />
          Featured
        </button>

      </div>

    </div>
  )
}

export default App