import React, { useState } from 'react'

export type AuthUser ={
    name:string
    email:string
}

function UserAuth() {
const [user,setUser] = useState<AuthUser | null>(null)

const handleLogin = ()=>{
    setUser({
        name: "Cody",
        email:"Cody@gmail.com",
    })
}
const handleLogOut = ()=>{
    setUser(null) 
}

  return (
    <div>
<button onClick={handleLogin}>Log In</button>
<button onClick={handleLogOut}>Log Out</button>
<h1>User is {user?.name} </h1>
<h1>His email is {user?.email}</h1>
    </div>
  )
}

export default UserAuth
