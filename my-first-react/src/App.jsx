import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actor=['Sakib','Raj','Jasim','Rubel','Salman Shah'];
  const singers=[
    {id:1, name:'Dr. Mahfuzur Rahman', age:58},
    {id:2,name:'Eva Rahman', age:46},
    {id:3,name:'Shuvro Dev', age:50},
    {id:4,name:'Pritom', age:35},
  ]
  const books=[
    {id:1, name:'physics',price:200,},
    {id:2, name:'Math',price:200,},
    {id:3, name:'Chemistry',price:200,},
    {id:4, name:'Biology',price:200,},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {/* {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      <Actor name="Pitar parkar"></Actor>
      {
        actor.map(actor=><Actor name={actor}></Actor>)
      } */}
      {/* <Todo
        task="learn more" 
        isDone={true}></Todo>
      <Todo
        task="Explore Core Concepts"
        isDone={false}></Todo>
      <Todo
        task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55k"></Device>
      <Device name="mobile" price="5k"></Device>
      <Device name="watch" price="1k"></Device>
      <Person></Person>
      <Student grade="7"  score="90"></Student>
      <Student grade={8} score={89}></Student>
      <Student grade={9} score={88}></Student>
      <Student grade={9} ></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  console.log(props);
  return <h2>This Device: {props.name} price {props.price}</h2>
}
function Person() {
  const age = 25;
  const money = 15;
  const person = {
    name: 'sakib', age: 20
  }
  return <h3>I am a {person.name} Person with age:{age + money}</h3>

}
const { grade, score } = { grade: "7", score: "90" }

function Student({ grade, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: {grade}</p>
      <p>Score: {score}</p>

    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devolaper</h5>
    </div>
  )
}
export default App
