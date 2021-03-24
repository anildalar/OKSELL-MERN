import React from 'react'
import Headers from '../Headers'

/**
* @author
* @function Layouts
**/

const Layouts = (props) => {
  return(
        <>
          <Headers></Headers>
          { props.children }
        </>
   )

 }

export default Layouts