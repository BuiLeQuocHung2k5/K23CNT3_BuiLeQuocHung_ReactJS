import React from 'react'

export default function BlqhRenderArray() {

    const blqhNumbers = [10,20,30,40,50];
    const blqhElement = blqhNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {blqhElement}
    </div>
  )
}