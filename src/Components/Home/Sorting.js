import React from 'react'

function Sorting({setSort}) {
  return (
    <div className='e-commerce__container__sorting'>
        <select onChange={e => setSort(e.target.value)}>
            <option value="dec">Artan</option>
            <option value="inc">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting