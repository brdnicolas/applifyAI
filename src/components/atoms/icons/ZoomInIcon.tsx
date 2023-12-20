import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ZoomInIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 8v6m-3-3h6M21 21l-4.343-4.343M19 11a8 8 0 11-16 0 8 8 0 0116 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
