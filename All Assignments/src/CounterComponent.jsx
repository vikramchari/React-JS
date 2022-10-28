 import {useState} from 'react';
 const CounterComponent=(props)=> {
  let [count,setCount] = useState(0);
  let [name,setName]=useState('');
  let [msg,setMsg]=useState(false)
  function onIncrement() {
    setCount(++count);
    console.log(setCount);
    console.log(count);
    console.log(name)
  }
 const nameChange = (e)=> {
    setName(e.target.value)
  }
  const nameChange1 = () => {
     setMsg({msg: !msg});
     console.log(!msg);
  }
  return(
      <div>Counter example
          <div>
              {count}
          </div>
          <button onClick={onIncrement}>Increment</button>
          <input type='text'   name='name' value={name} onChange={nameChange}/>
          {msg && <p>{name}</p>}
          <button onClick={nameChange1}>Click me
          </button>
          <p>{props.employees.map(item=> <ul>
            <li>{item.Id}</li>
            <li>{item.Name}</li>
            <li>{item.Location}</li>
          </ul> )}</p>
      </div>
  )
}
export default CounterComponent