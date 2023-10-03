import React, { useState } from 'react';
import styles from './sidebar.module.css'
import SidebarItem from '../sidebar_item/sidebar_item';

const Sidebar = ( {onStudySelected} ) => {
  const [menuItems, setMenuItems] = useState([{ 
      id: 1, name: 'Case 1', 
      children: [
        { id: 1, name: 'Echo' }, 
        { id: 2, name: 'CTA' }, 
        { id: 3, name: 'Echo2' }
      ] 
    }, { 
      id: 2, name: 'Case 2', 
      children: [
        { id: 1, name: 'CTA' },
        { id: 2, name: 'CTA' }
      ] 
    },
  ]);

  return (
    <aside className={styles.sidebar}>
      {menuItems.map((_item, index) => (
        <SidebarItem key={index} caseStudy={_item} onStudySelected={ onStudySelected } />
      ))}
    </aside>
  );
};

export default Sidebar;
