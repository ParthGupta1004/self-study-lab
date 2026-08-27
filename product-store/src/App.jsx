import { useState } from "react"
import { ShoppingCart, Search, Star } from "lucide-react"
import Modal from "./components/Modal"

function App() {
  const [isOpen, setIsOpen] = useState(false)

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


      {/* 3.3 Transform Trap Test  and we used it by keeping the box model outside the test card*/}
      <div className="mt-10 w-80 rounded-xl border border-slate-300 p-6 transition-transform hover:scale-105">

        <h2 className="font-display text-xl font-bold">
          Test Card
        </h2>

        <p className="mt-2 text-slate-600">
          This card has a transform.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-5 rounded-lg bg-teal-700 px-4 py-2 text-white hover:bg-teal-800"
        >
          Open Modal
        </button>
      </div>

      <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Test Modal"
        >
          <p className="leading-relaxed">
            This modal is inside the transformed card.
          </p>
      </Modal>

    </div>
  )
}

export default App