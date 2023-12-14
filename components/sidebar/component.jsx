import React, { useState } from 'react';
import styles from './component.module.css'
import SidebarCaseItem from '../sidebar_case_item/component';
import { useUserData } from '@/util/user_data_context';
import Case from '@/models/case'

export default function Sidebar () {
  const { caseStudyHeaders, createCase } = useUserData();

  const onCreateCaseClicked = () => {
    const caseName = prompt("Please enter the case name");
    if (caseName) {
      console.log("caseName: ", caseName);
      const newCase = new Case(caseName);
      createCase(newCase);
    }
  }

  return (
    <aside className={ styles.sidebar }>
      <div className={ styles.sidebarHeader }>
        <span>Cases</span>
        <button className={ styles.createButton } onClick={ onCreateCaseClicked }>
          +
        </button>
      </div>
      {caseStudyHeaders ? caseStudyHeaders.map((_item, index) => (
        <SidebarCaseItem key={ index } case_data={ _item }/>
      )): ''}
    </aside>
  );
};
