import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link, Navigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { motion } from "framer-motion"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { signin, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) <Navigate to="/dashboard" />
  }, [isAuthenticated])

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const fields = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }
    const { email, password } = fields

    await signin({ email, password })
  }

  return (
    <section>
      <motion.div

        className="flex flex-col justify-center items-center px-6 mx-auto mt-8 lg:mt-24 md:mt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
      >
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2 size-10" src="/bee.svg" alt="logo" />
          Bee.ly
        </a>
        <div className="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-neutral-800">
          <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight leading-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome back
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block p-2 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block p-2 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-14 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full py-2 text-[14.9px]">
                Sign in to your account
              </Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-blue-500 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}