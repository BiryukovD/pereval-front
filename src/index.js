import ReactDOM from "react-dom"
import React, { useState } from 'react'
import "./index.css"



export const MyInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const print_inner = (value) => {
alert(value)

  }

  return (
    <>
      <input
        placeholder="laskdjfl;askdf"
        type="text"
        value={value}
        onChange={handleChange} />

      <p>Value: {value}</p>
      <button onClick={() => print_inner(value)}>кнопка</button>
    </>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyInput/>)