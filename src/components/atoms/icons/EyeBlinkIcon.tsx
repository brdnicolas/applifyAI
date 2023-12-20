import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const EyeBlinkIcon = ({ className }: IconProps) => {
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
        d="M2.697 12.398a.845.845 0 010-.796C3.476 10.12 6.557 5 12 5c5.442 0 8.524 5.12 9.302 6.602a.845.845 0 010 .796C20.524 13.88 17.442 19 12 19s-8.524-5.12-9.303-6.602z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12s2.636-1 9-1 9 1 9 1M14.959 11.5a3 3 0 11-5.917 0"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
