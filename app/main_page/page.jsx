'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useAuth } from '@/util/auth_context';
import Login from '../login/page';
import Sidebar from '@/components/sidebar/sidebar';

export default function MainPage () {
  const { user, logout } = useAuth();

  const onStudySelected = (e) => {
    console.log("[main_page] study selected id: ", e.target.id);
  }

  return (
    user ? (
    <div className="mainContainer">
      <header className={styles.titleBar}>
        <h1>avrp manager</h1>
        <div className={styles.titleBarLoginContainer}>
          <p className={styles.titleBarLoginItem}>logged in as: {user.email}</p>
          <button className={[styles.titleBarLoginItem, styles.buttonLink]} onClick={logout}>logout</button>
        </div>
      </header>
      <div className={styles.bodyContainer}>
        <Sidebar onStudySelected={ onStudySelected }/>
      </div>
    </div>
    ) : (
      <Login />
    )
  );
}