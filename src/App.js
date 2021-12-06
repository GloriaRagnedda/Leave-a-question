import logo from './logo.svg';
import './index.css';
import { useState } from 'react';
import Answer from './components/Answer';

function App() {
  const [heart, setHeart] = useState(0)
 const [showName, setShowName] = useState({showName: false})
  const [question, setQuestion] = useState([
    {nick: false, text: false},
])

function handleChange(event){
  const{name,value} = event.target
  setQuestion(prevState=> {
    return{
      ...prevState,
    [name]: value
  }})
}
console.log(showName.showName)

function handleSubmit(event) {
  event.preventDefault()
  setShowName({
    showName: true
  })
  // submitToApi(formData)
  console.log(question)
}

function handleHeart(){
    setHeart(prevState => prevState + 1)
}

  return (
    <>
      <nav className="navBar">
          <h1 className="title">Leave a question:</h1>
      </nav>
        <form className="form-questions" action="" onSubmit={handleSubmit}>
          <input className="nick"  type="text" name='nick' value={question.nick} onChange={handleChange} placeholder='nickname'/>
          <textarea 
                className="question"
                value={question.text}
                placeholder="Question"
                onChange={handleChange}
                name="text"
            />
             <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
        <div className="leave_a_question">
        <label className="leave_a_question nick" htmlFor="nick">Your Nickname:</label>
        <br />
         {showName.showName && <q>{question.nick}</q> }
        <br />
          <label className="leave_a_question question" htmlFor="question">Your Question:</label>
          {showName.showName && <h2>{question.text}</h2>}
        </div>
        <div className="leave_a_questio like">
        <label htmlFor="heart">Like:</label>
          <button className="btn_like" onClick={handleHeart}><img src="https://img.icons8.com/fluency/48/000000/heart-plus.png"/>{heart}</button>
        </div>
       <Answer />
    </>
  );
}

export default App;
