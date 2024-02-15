import { useBreakpointsContext } from '@/contexts/breakpoints/breakpoints.provider'
import { MobileHeader } from '@/components/organisms/header/MobileHeader'
import { DesktopNavbar } from '@/components/organisms/navbar/DesktopNavbar'
import { MobileNavbar } from '@/components'

type GlobalLayoutProps = {
  children: React.ReactNode
}
export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const { isMobile, isTablet } = useBreakpointsContext()
  const isMobileOrTablet = isMobile || isTablet

  return (
    <div className="h-full flex flex-col laptop:grid grid-cols-globalLayout w-full">
      {isMobileOrTablet && <MobileNavbar />}
      {isMobileOrTablet ? <MobileHeader /> : <DesktopNavbar />}
      <div className="w-full overflow-x-hidden p-5 pb-0 pr-0 h-full pl-0 laptop:pl-5">{children}</div>
    </div>
  )
}
