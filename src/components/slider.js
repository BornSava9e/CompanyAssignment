import React, { useState } from 'react'


const Slider = () => {
  const [value, setValue] = useState([])

  const handleChange = (onChangeValue, i) => {
    const data = [...value]
    data[i] = onChangeValue.target.value
    setValue(data)
    // setValue(event.target.value)
  }
  const handleClick = () => {
    const abc = [...value, []]
    setValue(abc)
  }

  const handleDelete = (i) => {
    const DeleteVal = [...value]
    DeleteVal.splice(i, 1)
    setValue(DeleteVal)
  }
  return (
    <div className='sliderContainer'>

      
      {value.map((data, i) => {
        return (
          <div className='sliderbox'>
            <input 
            style={{ border: "none", width: "70px", padding: "0px" }} 
            type="text" placeholder='write skill'></input>
            <h2 className='rangevalue'>{value}</h2>
            <input type="range" min='1' max='100'  className='slider' onChange={handleChange}/>
            

            <button className='delete' onClick={() => handleDelete(i)}>X</button>
            <h2 className='rangevalue'>{value}</h2>
          </div>
        )

      })}
      <button onClick={handleClick}>Add Skill</button>

    </div>
  )
}

export default Slider