import React from 'react'
import propTypes from 'prop-types'
const Button = ({label, classes, href, target="_self", icon}) => {
 if(href){
  return (
    <a href={href} target={target} className={"btn btn-primary " + classes}> {label} {icon ? <span className='material-symbols-rounded' aria-hidden="true">
      {icon}
    </span> : undefined}</a>
  )
 }else{
  return(
    <button className={"btn btn-primary " + classes }> {label} {icon ? <span className='material-symbols-rounded' aria-hidden="true">
    {icon}
  </span> : undefined}</button>
  )
 }
}
const ButtonOutline = ({label, classes, href, target="_self", icon}) => {
  if(href){
   return (
     <a href={href} target={target} className={"btn btn-outline " + classes}> {label} {icon ? <span className='material-symbols-rounded' aria-hidden="true">
       {icon}
     </span> : undefined}</a>
   )
  }else{
   return(
     <button className={"btn btn-outline " + classes }> {label} {icon ? <span className='material-symbols-rounded' aria-hidden="true">
     {icon}
   </span> : undefined}</button>
   )
  }
 }

 ButtonOutline.propTypes = {
  label : propTypes.string.isRequired,
  classes : propTypes.string,
  href : propTypes.string.isRequired,
  target  : propTypes.string,
  icon : propTypes.string
  }

Button.propTypes = {
label : propTypes.string.isRequired,
classes : propTypes.string,
href : propTypes.string.isRequired,
target  : propTypes.string,
icon : propTypes.string
}


export {
  Button,
  ButtonOutline
} 