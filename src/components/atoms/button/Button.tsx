import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
import clsx from 'clsx'

type ButtonPrimaryProps = {
  children: React.ReactNode
  iconName?: IconName
  onClick?: () => void
  className?: string
  iconPosition?: 'left' | 'right'
  isDisabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const ButtonPrimary = ({
  children,
  iconName,
  className,
  onClick,
  iconPosition,
  isDisabled,
  type = 'button'
}: ButtonPrimaryProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        className,
        'transition-all cursor-pointer flex items-center gap-3 bg-gray-50 rounded-2 py-3 px-10 text-gray-800 justify-center',
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
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const ButtonSecondary = ({ children, className, onClick, type = 'button' }: ButtonSecondaryProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        className,
        'transition-all cursor-pointer py-3 px-6 flex items-center justify-center rounded-2 border-1 border-[1px] border-gray-600 bg-gray-800 text-gray-50  hover:bg-gray-700'
      )}
    >
      {children}
    </button>
  )
}
type IconButtonProps = {
  iconName: IconName
  onClick?: () => void
  className?: string
}

export const IconButtonPrimary = ({ iconName, onClick, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'transition-all cursor-pointer p-2 flex items-center justify-center rounded-2 border-[1px] border-gray-600 bg-gray-800 text-gray-400  hover:text-gray-100',
        className
      )}
    >
      <Icon name={iconName} />
    </button>
  )
}

export const IconButtonSecondary = ({ iconName, onClick, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'transition-all cursor-pointer p-2 flex items-center justify-center rounded-2 bg-white text-gray-900  hover:text-gray-400',
        className
      )}
    >
      <Icon name={iconName} />
    </button>
  )
}
