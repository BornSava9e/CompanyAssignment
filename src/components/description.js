import React,{useState} from 'react'

const Description = () => {
  const [value, setValue] = useState("")

  const handleClick =(e)=>{
    setValue(e.target.value)
  }
  return (
    <div style={{marginTop:"10px", width:"250px"}}>
        {value ? <textarea  cols="50" rows="50" onChange={handleClick} /> : 
        <textarea  cols="30" rows="5" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." onChange={handleClick}/> }
    </div>
  )
}

export default Description