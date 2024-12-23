import "@fontsource-variable/onest"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"
import { Hero } from "./pages/Hero"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Footer } from "./components/Footer"
import { NotFound } from "./pages/404/NotFound"
import { DashboardLayout } from "./dashboard/DashboardLayout"
import { Links } from "./components/Links"
import { ProtectedRoute } from "./routes"
import UserProfileUpdateWithQR from "./components/UserProfileUpdate"

const App = () => {
  return (
    <main
      className="grid max-w-screen min-h-dvh"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-black dark:text-neutral-100 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] transition-all ease-in-out duration-150"></div>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Hero />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />

        {/* Protected routes with shared layout */}
        <Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Links />} />
            <Route path="settings" element={<UserProfileUpdateWithQR />} />
          </Route>
        </Route>

        {/* Not found pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
