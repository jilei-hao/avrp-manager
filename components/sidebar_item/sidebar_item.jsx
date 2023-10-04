import React, { useState } from 'react';
import styles from './sidebar_item.module.css'

export default function SidebarItem ({ caseStudy, onStudySelected}) {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(`SidebarItem: caseStudy=${caseStudy}`);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className={styles.caseStudyItem}>
      <div className={ styles.caseItem } onClick={ toggleExpansion }>
        {caseStudy.name}
      </div>
      {isExpanded && caseStudy.children && (
        <div className={styles.studyItemContainer}>
          {caseStudy.children.map((_study, index) => (
            <div key={index} id={_study.id} className={ styles.studyItem } onClick={ onStudySelected }>
              {_study.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
