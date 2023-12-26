import { Avatar } from '@/components'
import { Icon } from '@/components/atoms/icons/Icon'

type CardProps = {
  company: string
  job: string
  date: string
  avatar?: string
  coverLetter: string
}

export const Card = ({ company, job, date, avatar, coverLetter }: CardProps) => {
  return (
    <div className="p-5 bg-gray-700 w-full">
      <div className="flex items-center">
        <Avatar src={avatar} width={32} height={32} />
        <p className="ml-3 text-gray-300 text-sm">{company}</p>
      </div>
      <p className="mt-5 text-gray-100 text-base font-bold">{job}</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center ">
          <Icon className="w-[18px] h-[18px]" name="calendar" />
          <p className="text-3.5 text-gray-500 ml-[8px]">{date}</p>
        </div>
        {coverLetter && <Icon className="w-[18px] h-[18px]" name="document-text" />}
      </div>
    </div>
  )
}
