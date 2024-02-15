import clsx from 'clsx'

type UploadInputProps = {
  className?: string
}

export const UploadInputSkeleton = (props: UploadInputProps) => {
  const { className } = props

  return (
    <div className={clsx(className)}>
      <div className={clsx('animate-pulse rounded-2 p-3 w-full bg-gray-600 h-35')} />
    </div>
  )
}
