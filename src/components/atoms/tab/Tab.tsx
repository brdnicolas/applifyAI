import clsx from 'clsx'

type TabPropsType = {
  label: string
  isSelected?: boolean
  id?: string
  onClick?: () => void
}

export const Tab = ({ label, isSelected, id, onClick }: TabPropsType) => {
  return (
    <div
      id={id}
      className={clsx(
        'text-4 text-gray-200 flex items-center justify-center py-3 px-6 rounded-2 transition-all',
        'hover:text-gray-500 cursor-pointer',
        isSelected && 'bg-gray-700'
      )}
      onClick={onClick}
    >
      {label}
    </div>
  )
}
