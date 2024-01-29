import { PersonProps } from "./Object.types"


function Object(props:PersonProps) {
  return (
    <div>
      <h1>{`Your name is ${props.name.Fname} ${props.name.Lname}`}</h1>
    </div>
  )
}

export default Object
