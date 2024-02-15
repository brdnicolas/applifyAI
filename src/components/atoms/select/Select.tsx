import clsx from 'clsx'
import { Icon } from '../icons/Icon'
import { IconName } from '../icons/types'
import { useState } from 'react'

type OptionType = {
  value: string
  label: string
}

type SelectPropsType = {
  options: OptionType[]
  iconName?: IconName
  label?: string
  value?: string
  className?: string
  defaultValue: string
  contractTypeProps: { setContractLabel: (value: string) => void }
}

export const Select = ({
  iconName,
  label,
  value,
  className,
  defaultValue,
  options,
  contractTypeProps
}: SelectPropsType) => {
  const [showOptions, setShowOptions] = useState(false)
  const { setContractLabel } = contractTypeProps

  return (
    <div className={clsx(className)}>
      {label && <p className="text-gray-500 text-3.5 mb-3">{label}</p>}
      <div onClick={() => setShowOptions(!showOptions)} className={clsx('relative flex items-center')}>
        {iconName && <Icon className={clsx('absolute left-3 text-gray-100')} name={iconName} />}
        <div
          className={clsx(
            'transition-all w-full bg-gray-800 rounded-2 p-3 text-sm cursor-pointer',
            'text-gray-100 placeholder:text-gray-550',
            'border-[1px] hover:border-gray-300 border-gray-600 focus:border-gray-300',
            'focus:ring-2 ring-gray-500 focus:outline-none',
            iconName && 'pl-11'
          )}
        >
          {value || defaultValue}
        </div>
      </div>
      {showOptions && (
        <div className="w-full rounded-2 border-[1px] border-gray-600 px-3 py-2 mt-2">
          {options.map((option, i) => {
            return (
              <div
                onClick={() => {
                  setContractLabel(option.label)
                  setShowOptions(!showOptions)
                }}
                key={i}
                className={clsx(
                  'transition-all cursor-pointer mb-2 last:mb-0 py-1 px-2 text-gray-300 text-3 rounded-1',
                  'hover:bg-gray-600 hover:text-gray-100'
                )}
              >
                <p id={option.value}>{option.label}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
