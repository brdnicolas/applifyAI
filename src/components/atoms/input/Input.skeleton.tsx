import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
}

export const InputSkeleton = (props: InputProps) => {
  const { className, label } = props

  return (
    <div className={clsx(className)}>
      {label && <p className="text-gray-500 text-3.5 mb-3">{label}</p>}
      <div className={clsx('animate-pulse rounded-2 p-3 h-12 w-full bg-gray-600')} />
    </div>
  )
}
