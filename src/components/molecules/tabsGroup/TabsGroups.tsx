import { Tab } from '@/components/atoms'
import clsx from 'clsx'

type TabOption = {
  label: string
  id: string
  isSelected: boolean
  onClick: () => void
}

type TabsGroupProps = {
  options: TabOption[]
  className?: string
}

export const TabsGroup = ({ options, className }: TabsGroupProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className={clsx('flex items-center', className)}>
        {options.map((option) => {
          return (
            <Tab
              key={option.label}
              label={option.label}
              id={option.id}
              isSelected={option.isSelected}
              onClick={option.onClick}
            />
          )
        })}
      </div>
      <hr className="w-full h-[1px] border-gray-600 mt-4" />
    </div>
  )
}
