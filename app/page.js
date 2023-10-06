'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import MainPage from './main_page/page'
import { AuthProvider } from '@/util/auth_context'
import { UserDataProvider } from '@/util/user_data_context'
import Login from './login/page'

export default function Home() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <UserDataProvider>
          <MainPage />
        </UserDataProvider>
      </AuthProvider>
    </React.StrictMode>
  )
}