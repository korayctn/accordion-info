import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [open,setOpen] = useState(false);
  
  const handleClick = ()=>{
    setOpen(!open);
  }
  return(
    <div className='question'>
      <h3>{title}</h3>
      {open ? (
        <>
          <AiOutlineMinus onClick={handleClick}/>
           <p>{info}</p>
        </>
      ) : ( <AiOutlinePlus onClick={handleClick}/> )}
      

    </div>
  );
};

export default Question;
