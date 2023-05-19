import React from 'react'
import style from './styles.module.css'
function NotFound() {
  return (
    <>
      <div className={style.notFound}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </>

  )
}

export default NotFound
