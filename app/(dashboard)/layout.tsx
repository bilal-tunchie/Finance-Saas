import Header from '@/components/header';
import React from 'react'

interface DashboardlayoutProps {
    children: React.ReactNode
}
function Dashboardlayout({ children }: DashboardlayoutProps) {
    return (
        <div>
            <Header/>
            <main className='px-3 lg:px-14'>{children}</main>
        </div>
    )
}

export default Dashboardlayout;