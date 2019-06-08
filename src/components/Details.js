import React from "react"

const Details = (props) => {
  return (
  <div className="">
    <h1>More Deets:</h1>
      <h4>Specialty: {props.hog.specialty}</h4>
      <h4>Weight: {props.hog.weight}</h4>
      <h4>Award: {props.hog.award}</h4>
      <h4>{props.hog.greased ? "I'm Greased" : "I'm Not Greased"}</h4>
  </div>
  )
}

export default Details
