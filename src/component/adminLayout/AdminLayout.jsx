import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminLayout = () => {
  return (
    <>
      <div className='min-h-screen flex justify-center'>
        <AdminNavbar />

        <main className="grow">
          <Outlet />
        </main>

      </div>
    </>
  )
}

export default AdminLayout