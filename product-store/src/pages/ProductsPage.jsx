import { useState } from "react"
import { ShoppingCart, Search, Star } from "lucide-react"
import Modal from "../components/Modal"

export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-10">

      {/* Logo + Heading */}
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


      {/* Module 3 Icons */}
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


      {/* Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-8 rounded-lg bg-teal-700 px-5 py-3 text-white hover:bg-teal-800"
      >
        Open Modal
      </button>


      {/* Reusable Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Modal"
      >
        <p className="leading-relaxed">
          This is my reusable modal component.
        </p>
      </Modal>

    </div>
  )
}