import React, { useState } from 'react';
import styles from './sidebar_item.module.css'
import { useUserData } from '@/util/user_data_context';

export default function SidebarItem ({ caseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {selectedStudy, setSelectedStudy, createStudy} = useUserData();

  console.log(`SidebarItem: caseStudy=${caseStudy}`);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const onStudySelected = (e) => {
    const study_id = e.target.id;
    setSelectedStudy(study_id);
  };

  return (
    <div className={styles.caseStudyItem}>
      <div className={ styles.caseItem } onClick={ toggleExpansion }>
        {caseStudy.name}
      </div>
      {isExpanded && caseStudy.children && (
        <div className={styles.studyItemContainer}>
          {caseStudy.children.map((_study, index) => (
            <div className={
              `${styles.studyItem} ${selectedStudy == _study.id ? styles.studyItemActive : ''}`
              } key={index} id={_study.id}  onClick={ onStudySelected }
            >
              {_study.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
