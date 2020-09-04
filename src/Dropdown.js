import React, { useState } from 'react';



export const Dropdown = (props) => {
  
  const [list, setList] = useState(['Quiz', 'Social network', 'Cut the link'])
  const newArr = list.map( (item, index) => {
        return <li key= {index} className="text-muted">{item}</li>
      })
  console.log(newArr)
  
  return (
    <div className="nav-link"> 
      <span className="nav-item" onClick={props.onClickHandler}>Project</span>
  <ul className="collapse">
      {newArr}
    </ul>
    </div>
  )
}