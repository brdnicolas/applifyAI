import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
import clsx from 'clsx'

type ButtonPrimaryProps = {
  children: React.ReactNode
  iconName?: IconName
  onClick: () => void
  className?: string
  iconPosition?: 'left' | 'right'
  isDisabled?: boolean
}

export const ButtonPrimary = ({
  children,
  iconName,
  className,
  onClick,
  iconPosition,
  isDisabled
}: ButtonPrimaryProps) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        className,
        'transition-all cursor-pointer flex items-center gap-3 bg-gray-50 rounded-2 py-2 px-10 text-gray-800',
        iconPosition ? 'flex-row-reverse' : 'flex-row',
        'hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 ring-gray-500 border-[1px] border-gray-800 ',
        'disabled:bg-gray-700 disabled:border-gray-550 disabled:text-gray-400 disabled:cursor-default'
      )}
    >
      <>
        {iconName && <Icon name={iconName} />}
        {children}
      </>
    </button>
  )
}

type ButtonSecondaryProps = {
  children: React.ReactNode
  className?: string
}

export const ButtonSecondary = ({ children, className }: ButtonSecondaryProps) => {
  return (
    <button
      className={clsx(
        className,
        'transition-all cursor-pointer py-3 px-6 flex items-center justify-center rounded-2 border-1 border-gray600 bg-gray-800 text-gray-50  hover:bg-gray-700'
      )}
    >
      {children}
    </button>
  )
}
