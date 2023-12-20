import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const PauseIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10 9v6M14 9v6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
