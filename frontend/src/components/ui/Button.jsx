import clsx from 'clsx'

export const Button = ({ 
  children, 
  onClick,
  type = 'button',
  variant = 'secondary', 
  size = 'md',
  className = 'w-full',
  disabled = false,
  ...props
}) => {

  const baseStyles = 'px-5 py-1 rounded-md transition ease-in-out'

  const variants = {
    primary: 'bg-green-700 hover:bg-green-800',
    secondary: 'bg-blue-600 hover:bg-blue-700',
    danger: 'bg-red-700 hover:bg-red-800',
    outlined: 'border-2 border-pink-700 hover:bg-pink-700 hover:text-white',
    exotic: 'bg-indigo-700 hover:bg-indigo-800',
    transparent: 'bg-transparent border rounded-md border-zinc-500 hover:bg-neutral-800'
  }

  const sizeVariants = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl'
  }

  const disabledStyles = disabled ? 'bg-gray-400 cursor-not-allowed' : ''

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      className={clsx(
        baseStyles,
        variants[variant],
        sizeVariants[size],
        disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
