import clsx from 'clsx'

type TextSkeletonProps = {
  className?: string
}

export const TextSkeleton = ({ className }: TextSkeletonProps) => {
  return (
    <div className={clsx('bg-gray-600 animate-pulse rounded-2 disable-text-selection text-transparent', className)}>
      skeleton
    </div>
  )
}
