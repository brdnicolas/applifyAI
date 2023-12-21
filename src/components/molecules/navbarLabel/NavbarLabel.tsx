import { IconName } from '@/components/atoms/icons/types'
import { Icon } from '@/components/atoms/icons/Icon'
import clsx from 'clsx'

type NavbarLabelProps = {
  iconName: IconName
  children: React.ReactNode
  onClick: () => void
  isActive: boolean
  className?: string
}

export const NavbarLabel = ({ iconName, children, onClick, isActive, className }: NavbarLabelProps) => {
  return (
    <div className={clsx('flex items-center cursor-pointer', className)} onClick={onClick}>
      <Icon className={isActive ? 'text-gray-200' : 'text-gray-500'} name={iconName} />
      <p className={clsx('ml-2 text-base font-medium', isActive ? ' text-gray-200' : 'text-gray-500')}>{children}</p>
    </div>
  )
}