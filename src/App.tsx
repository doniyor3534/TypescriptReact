import { useState } from 'react';
import './App.css';
import Button from './Component/Button';
import Greet from './Component/Greet';
import Heading from './Component/Heading';
import Input from './Component/Input';
import Oscar from './Component/Oscar';
import Person from './Component/Person';
import PersonList from './Component/PersonList';
import Status from './Component/Status';

function App() {
const person={
  name:'Doniyorbek',
  fristname:'Tursunov'

}

const personList=[
  {
    name:'Doniyorbek',
     fristname:'Tursunov'
  },
  {
    name:'Doniyorbek',
     fristname:'Tursunov'
  },
  {
    name:'Doniyorbek',
     fristname:'Tursunov'
  },
]

const [value,SetValue] = useState<string>('')

const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
  SetValue(e.target.value)
  console.log(e.target.value);
  
}


  return (
    <div className="App">
        <Greet name='Vishwase' count={11} islogdenin={true} />
        <Person names={person} />
        <PersonList data={personList} />
        <Status status='loading'/>
        <Heading>Heading Childrin</Heading>
        <Oscar>
           <Heading>Oscar Children</Heading>
        </Oscar>
        <Button hendlecklick={(e,id)=>console.log(e,id)} />
        <Input value={value} changehandle={(event=>change(event))} />
    </div>
  );
}

export default App;
