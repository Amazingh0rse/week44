import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router'


function App(){
  return (
    <div className="App">
        <h1>Ex 1</h1>
        <h3>Ex 1a & 1b Counter</h3>
        <Counter />
        <h3>Ex 1c & 1d Counter with props & Values </h3>
        <CounterWithProp tal={34} value={4}/>
        <h3>Ex 1e Counter with localstorage </h3>
        <CounterUseEffect initValue= {localStorage.getItem("count")} value={4} />
        <br />
        <h1>Ex 2a chuck norris joke</h1>
        <GetChuckJoke/>
        <h1>Ex 2b dad joke with timer</h1>
        <GetDadJoke/>


    </div>
  )
}


//ex 1 a & b
function Counter() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}


//ex 1 c & d
export const CounterWithProp= (props) => {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
 const value = props.tal+count
  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={() => setCount(count + props.value)}>
        Increment by {props.value}
      </button> 
      <button onClick={() => setCount(count - props.value)}>
        Decrement by {props.value}
      </button>
    </div>
  );
}

//ex 1 e
const CounterUseEffect= (props) => {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(parseInt(props.value));
  
  
  useEffect(() => {
    localStorage.setItem("count", count);
  })
  return (
    <div>
            <p>You clicked {count} times</p>
            
            <button onClick={() => setCount(count + props.value)}>
                increment number by {props.value}
            </button>

            <button onClick={() => setCount(count - props.value)}>
                decrement number by {props.value}
            </button>
        </div>
  );
}

//ex 2 a

 const GetChuckJoke = () =>{
  
  const [joke, setJoke] = useState("");

  //similar to componentDidMount and componentDidUpdate:

  //loads joke first time
  useEffect(() => { 
    fetch('https://api.chucknorris.io/jokes/random').then(res=>res.json()).then(data=>{
      setJoke(data.value);
    })
  },[]);

  return (
    <div>
      {joke}<br/>
      <button onClick={() => 
      fetch('https://api.chucknorris.io/jokes/random').then(res=>res.json()).then(data=>{
        setJoke(data.value);
      })
    }>Click for chuckle</button>
    </div>
  );
}

//ex 2 b

const GetDadJoke = () =>{
  const [joke, setJoke] = useState("");
  const [timeJoke, setTimeJoke] = useState({ title: "" });
  const [jokeSelector, setJokeSelector] = useState(false);

  //similar to componentDidMount and componentDidUpdate:

  //loads joke first time
  useEffect(() => {
    function fetchJoke(method, body) {
    const options = makeOptions(method, body);
      console.log("Fetching")
      fetch('https://icanhazdadjoke.com/', options)
      .then(res=>res.json())
      .then(timeJoke =>  setTimeJoke(timeJoke))  
      .catch(err => console.log("Ups Joke Error"+err))
    }
    setInterval(fetchJoke, 30000);

  },[jokeSelector]);

  return (
    <div>
      
     
    <p>if no joke is visible, just wait, it will appear</p>
    <p>{timeJoke.joke}</p>
    
    </div>
  );
}

function makeOptions(method, body) {
  method = method ? method : 'GET';
  const opts =  {
    method: method,
    headers: {
      // "Content-type": "application/json",
      "Accept": "application/json"
    }
  }
  if(body){
    opts.body = JSON.stringify(body);
  }
  return opts;
}

export default App;

