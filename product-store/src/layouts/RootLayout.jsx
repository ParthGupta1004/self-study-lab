import { Link, NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

          <Link
            to="/products"
            className="font-display text-xl font-bold text-teal-700"
          >
            Product Store
          </Link>

          <div className="flex gap-6">

            <NavLink
              to="/products"
              className="text-slate-700 hover:text-teal-700"
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              className="text-slate-700 hover:text-teal-700"
            >
              Cart
            </NavLink>

            <NavLink
              to="/admin"
              className="text-slate-700 hover:text-teal-700"
            >
              Admin
            </NavLink>

          </div>

        </div>
      </nav>


      {/* Page content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>


      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-slate-500">
        Product Store
      </footer>

    </div>
  )
}