'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useAuth } from '@/util/auth_context';
import Login from '../login/page';
import Sidebar from '@/components/sidebar/sidebar';
import ConfigPanel from '@/components/config_panel/config_panel';

export default function MainPage () {
  const { user, logout } = useAuth();
  const [ studyConfig, setStudyConfig ] = useState([{
      study_id: 1,
      image_4d: '',
      tp_start: 1,
      tp_end: 14,
      systolic_propagation: {
        reference_seg: '',
        reference_tp: 3,
        tp_start: 1,
        tp_end: 7
      },
      diastolic_propagation: {
        reference_seg: '',
        reference_tp: 10,
        tp_start: 8,
        tp_end: 14
      },
    }
  ]);

  const [ selectedStudy, setSelectedStudy] = useState(null);

  const onStudySelected = (e) => {
    const study_id = e.target.id;
    console.log("[main_page] study selected id: ", study_id);

    setSelectedStudy(study_id);
  }

  const onConfigSubmit = (e) => {
    console.log("[main page: onConfigSubmit] ");
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
        <ConfigPanel study_id={selectedStudy} config={null} onSubmit={onConfigSubmit} />
      </div>
    </div>
    ) : (
      <Login />
    )
  );
}