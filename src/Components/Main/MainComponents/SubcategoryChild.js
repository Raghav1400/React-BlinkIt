import React from 'react'

function SubcategoryChild(props) {
  
  var imgLink=props.info.img_src ;
  return (
    <div category={props.info.category} subcategory={props.info.subcategory} onClick={(e)=>props.onSubCategoryChange(props.info.subcategory)}>
      <div className='aside-img'>
        <img src={imgLink} alt={props.info.img_alt}/>
      </div>
      <div className="aside-content">{props.info.subcategory}</div>
    </div>
  )
}

export default SubcategoryChild
