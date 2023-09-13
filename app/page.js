'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import MainPage from '@/components/main_page'
import { AuthProvider } from '@/util/auth_context'
import Login from './login/page'

export default function Home() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </React.StrictMode>
    
  )
}