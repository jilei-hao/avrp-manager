'use client'

import { useState } from 'react';
import styles from './page.module.css';
import { useAuth } from '@/util/auth_context';
import Login from '../login/page';
import Sidebar from '@/components/sidebar/component';
import ConfigPanel from '@/components/config_panel/component';

export default function Main () {
  const { user, logout } = useAuth();

  return (
    user ? (
    <div className="mainContainer">
      <header className={styles.titleBar}>
        <h1>avrp manager</h1>
        <div className={styles.titleBarLoginContainer}>
          <p className={styles.titleBarLoginItem}>logged in as: {user.username}</p>
          <button className={[styles.titleBarLoginItem, styles.buttonLink]} onClick={logout}>logout</button>
        </div>
      </header>
      <div className={styles.bodyContainer}>
        <Sidebar/>
        <ConfigPanel/>
      </div>
    </div>
    ) : (
      <Login />
    )
  );
}