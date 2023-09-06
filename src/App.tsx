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
import Container from './Component/Container';
import LogendIn from './Component/status/LogendIn';
import User from './Component/status/User';
import User2 from './Component/status/User2';
import Count from './Component/status/Count';
import Box from './Component/context/Box';
import { ThemeContextProvider } from './Component/context/ThemeContext';
import { UserContextProvider } from './Component/context/UserContextT';
import UserContextfun from './Component/context/User';
import Domref from './Component/ref/Domref';
import Mutableref from './Component/ref/Mutableref';
import { Counter } from './Component/class/CounterClass';
import Private from './Component/Auth/Private';
import Profile from './Component/Auth/Profile';
import Lists from './Component/generation/Lists';
import RandomNumber from './Component/restriction/RandomNumber';
import Toast from './Component/templateliture/Toast';
import CustomButton from './Component/Html/CustomButton';
import Curtoninput from './Component/Html/Curtoninput';
import { CustomComponent } from './Component/Html/CustomComponent';
import { Textpolimoghic } from './Component/polimoghic/Textpolimoghic';

function App() {
  const person = {
    name: 'Doniyorbek',
    fristname: 'Tursunov'

  }

  const personList = [
    {
      name: 'Doniyorbek',
      fristname: 'Tursunov'
    },
    {
      name: 'Doniyorbek',
      fristname: 'Tursunov'
    },
    {
      name: 'Doniyorbek',
      fristname: 'Tursunov'
    },
  ]

  const [value, SetValue] = useState<string>('')

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetValue(e.target.value)
    console.log(e.target.value);

  }


  return (
    <div className="App">
      <Greet name='Vishwase' count={11} islogdenin={true} />
      <Person names={person} />
      <PersonList data={personList} />
      <Status status='loading' />
      <Heading>Heading Childrin</Heading>
      <Oscar>
        <Heading>Oscar Children</Heading>
      </Oscar>
      <Button hendlecklick={(e, id) => console.log(e, id)} />
      <Input value={value} changehandle={(event => change(event))} />
      <Container style={{ border: '1px solid red', padding: '2rem' }} />
      <LogendIn />
      <User />
      <User2 />
      {/* /////usereducer */}
      <Count />
      {/* //////useContext */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* //////// */}
      {/* ////////usecontext  */}
      <UserContextProvider>
        <UserContextfun/>
      </UserContextProvider>
      {/* //////// */}
      {/* /////useref */}
      <Domref/>
      <Mutableref/>
      {/* //////////////Classsss */}
      <Counter message={'salom Class'} />
      {/* ////////////////Auth */}
      <Private islogdenin={false} component={Profile}/>
      {/* ///////////////Generation */}
      <Lists items={[1,2,3,4]} onClick={(value)=>console.log(value) } />
      {/* /////////////retriction */}
      <RandomNumber value='Doniyorbek' isPositive  />
      {/* ///////////////Templateliture (toast) */}
      <Toast position='center' />
      {/* ////////////Html button input */}
      <CustomButton variant='primary' onClick={()=>console.log('Click') }  >
          Primary button
      </CustomButton>
      <Curtoninput type='text' placeholder='lsslslslls......' />
      {/* //////////////////CustomComponent (tyoeOf copy type) */}
      <CustomComponent name='dkdkdk'/>
      {/* ////////////////Polimoghic  */}
      <Textpolimoghic as={'h1'} size='lg' color='secondary'  >
          text polimoghic size color children
      </Textpolimoghic>
      <Textpolimoghic htmlFor='someId' as={'label'} size='lg' color='secondary'  >
          text polimoghic size color children
      </Textpolimoghic>
    </div>
  );
}

export default App;
