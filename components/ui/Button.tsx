import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button',
  href
}: ButtonProps) {
  const baseClasses = 'font-bold transition-all duration-300 transform hover:scale-105 font-sans inline-flex items-center justify-center'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#D7263D] to-[#B91C3A] text-white hover:from-[#B91C3A] hover:to-[#A01530] shadow-lg',
    secondary: 'border-2 border-[#0B2239] text-[#0B2239] hover:bg-[#0B2239] hover:text-white'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}
