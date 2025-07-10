// write code for Welcome component here
import React from 'react'

function Welcome(props) {
  return (
    <div>
      <h1>Hey! {props.name}</h1>
      <h2>Welcome to School.</h2>
      <p>{props.name}</p>
    </div>
  )
}
export default Welcome
