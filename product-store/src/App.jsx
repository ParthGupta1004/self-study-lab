import { Navigate, Route, Routes } from "react-router-dom"

import RootLayout from "./layouts/RootLayout"

import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage"
import AdminPage from "./pages/AdminPage"
import NotFoundPage from "./pages/NotFoundPage"


function RequireAdmin({ children }) {
  const isAdmin = false

  if (!isAdmin) {
    return <Navigate to="/products" replace />
  }

  return children
}


function App() {
  return (
    <Routes>

      <Route element={<RootLayout />}>

        {/* Home → Products */}
        <Route
          path="/"
          element={<Navigate to="/products" replace />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={<ProductsPage />}
        />

        {/* Product Details */}
        <Route
          path="/products/:id"
          element={<ProductDetailPage />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* Protected Admin */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminPage />
            </RequireAdmin>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Route>

    </Routes>
  )
}

export default App