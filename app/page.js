'use client'

import styles from './page.module.css'
import React from 'react'
import Main from './main/page'
import { AuthProvider } from '@/util/auth_context'
import { UserDataProvider } from '@/util/user_data_context'
import Login from './login/page'

export default function Home() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <UserDataProvider>
          <Main />
        </UserDataProvider>
      </AuthProvider>
    </React.StrictMode>
  )
}