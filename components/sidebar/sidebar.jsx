import React, { useState } from 'react';
import styles from './sidebar.module.css'
import SidebarItem from '../sidebar_item/sidebar_item';

export default function Sidebar ( {onStudySelected} ) {
  const [menuItems, setMenuItems] = useState([{ 
      id: 1, name: 'Dev', 
      children: [
        { id: 1, name: 'Echo-14tp' }, 
        { id: 2, name: 'CTA-20tp' }, 
        { id: 3, name: 'Echo-3tp' }
      ] 
    }, { 
      id: 2, name: 'BAV2023', 
      children: [
        { id: 4, name: 'CTA' },
        { id: 5, name: 'CTA-2' }
      ] 
    }, {
      id: 3, name: 'Case 3', 
      children: [
        { id: 7, name: 'Echo' },
        { id: 8, name: 'CTA' }
      ]
    }
  ]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>Cases</div>
      {menuItems.map((_item, index) => (
        <SidebarItem key={index} caseStudy={_item} onStudySelected={ onStudySelected } />
      ))}
    </aside>
  );
};
