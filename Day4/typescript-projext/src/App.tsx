import React from 'react';
import ArrayList from './components/ArrayList';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Input from './components/Input';
import Object from './components/Object';
import Status from './components/Status';
import Winner from './components/Winner';
import UserAuth from './components/Hooks/UserAuth';
import CountReducer from './components/Hooks/CountReducer';

function App() {
const person ={
  Fname:"karl",
  Lname:"kent"
}

const people = [
  {
    Fname:"karl",
    Lname:"kent"
  },
  {
    Fname:"Bruce",
    Lname:"wayne"
  },
  {
    Fname:"Tont",
    Lname:"Stark"
  },
]

  return (
    <>
    <h1>Simple Props</h1>
      <Greet name="Sumin" message={20} isLoggedIn={true}/>
      <Greet name="Sumin" isLoggedIn={true}/>
      <hr />
      <h1>Passing Object</h1>
      <Object name ={person} />
      <hr />
      <h1>Passing Array</h1>
      <ArrayList names ={people} />
      <hr />
      <h1>Using Literal Types</h1>
      <Status status="loading"/>
      <Winner>
        And the winer is Messi
      </Winner>
      <hr />
      <h1>Event Loop</h1>
      <Button handleClick ={()=>{
        console.log("You have clicked")
      }}/>

      <Input value="" handleChange={event=> event.target.value } />
        <hr />
        <UserAuth />
        <hr />
        <h1>Styles</h1>
        <Container styles={{border: "1px solid red", color:"green"}} />
        <hr />
        <CountReducer />

    </>
  );
}

export default App;
