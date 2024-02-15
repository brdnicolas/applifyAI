import clsx from 'clsx'

export const AddCardEvent = () => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center bg-gray-700 rounded-2 px-6 py-5 text-4 text-gray-100 cursor-pointer border-2 border-transparent',
        'hover:border-2 hover:border-gray-600 hover:box-border'
      )}
    >
      <p>Ajouter un événement</p>
    </div>
  )
}
