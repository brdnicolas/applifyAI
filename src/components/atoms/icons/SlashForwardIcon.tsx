import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const SlashForwardIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 6l-4 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
