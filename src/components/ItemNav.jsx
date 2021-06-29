import React from 'react'

function ItemNav({title}) {
  return (
    <div>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">{title}</a>
      </li>
    </div>
  )
}

export default ItemNav
