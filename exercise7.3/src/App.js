import './App.css';
import Input from './components/Input'
import Textarea from './components/Textarea'
import Select from './components/Select';
import { useState } from "react";


function App() {

  const labels = ['First Name', 'Last Name', 'Free Text', 'Age']
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [text, setText] = useState('');
  const [formsClass, setFormsClass] = useState('');
  const [reviewClass, setReviewClass] = useState('hide');
  const [age, setAge] = useState('');

  const firstNameHandler = (ev) => {
    setFirstName(ev.target.value)
  }

  const lastNameHandler = (ev) => {
    setLastName(ev.target.value)
  }

  const ageHandler = (ev) => {
    setAge(ev.target.value);
    console.log(ev.target.value);
  }

  const inputTextHandler = (ev) => {
    setText(ev.target.value)
  }

  const submitHandler = (ev) => {
    // TODO before actually submitting Let users Review their form
    ev.preventDefault();
    setFormsClass('hide');
    setReviewClass('review');
  } 

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

          <form className={formsClass}>
            <Input value={firstName} label={labels[0]} inputHandler={firstNameHandler}></Input>
            <Input value={lastName} label={labels[1]} inputHandler={lastNameHandler}></Input>
            <Select value={age} selectHandler={ageHandler}></Select>
            <Textarea value={text} label={labels[2]} inputHandler={inputTextHandler}></Textarea>
            <button type='submit' onClick={submitHandler}>Continue</button>
          </form>

          <div className={reviewClass}>
            <p>{firstName} {lastName}</p>
            <p>{age}</p>
            <p>{text}</p>
            <div className='review-btn'>
              <button>Back</button>
              <button type='submit'>Confirm</button>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
