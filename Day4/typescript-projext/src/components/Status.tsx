type MessageProps = {
    status:"loading" | "success" | "error"
}
function Status(props: MessageProps) {
 let message
    if(props.status === "loading" ){
        message ="loading"
    }
    if(props.status === "success"){
        message="success"
    }
    if(props.status==="error"){
        message = "error"
    }
  return (
    <div>
      <h2> Status : {message}</h2>
    </div>
  )
}

export default Status
