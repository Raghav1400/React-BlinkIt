import React from 'react'
import Styles from './SubcategoryChild.module.css'

function SubcategoryChild(props) {
  const {img_src,category,subcategory,img_alt}=props.info;
  return (
    <div category={category} subcategory={subcategory} onClick={(e)=>props.onSubcategoryChange(subcategory)}>
      <div className={Styles['aside-img']}>
        <img src={img_src} alt={img_alt}/>
      </div>
      <div className={Styles["aside-content"]}>{subcategory}</div>
    </div>
  )
}

export default SubcategoryChild
