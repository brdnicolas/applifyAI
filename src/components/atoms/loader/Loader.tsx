import clsx from 'clsx'

type LoaderProps = {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx('flex items-center justify-center w-14 h-14', className)}>
      <div className="animate-spin w-full h-full border-[5px] border-gray-550 border-b-white rounded-30" />
    </div>
  )
}
