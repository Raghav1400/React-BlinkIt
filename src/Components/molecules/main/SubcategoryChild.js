import React from 'react'

function SubcategoryChild(props) {
  const {img_src,category,subcategory,img_alt}=props.info;
  return (
    <div category={category} subcategory={subcategory} onClick={(e)=>props.onSubcategoryChange(subcategory)}>
      <div className='aside-img'>
        <img src={img_src} alt={img_alt}/>
      </div>
      <div className="aside-content">{subcategory}</div>
    </div>
  )
}

export default SubcategoryChild
