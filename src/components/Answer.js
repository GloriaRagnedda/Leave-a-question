import { useState } from "react"


export default function Answer(){
    const [showName, setShowName] = useState({showName: false})
    const [answer, setAnswer] = useState({
        answer:''
    })

    function handleChange(event){
      const{name,value} = event.target
       setAnswer(prevState=> {
         return{
           ...prevState,
         [name]: value
       }})
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShowName({
          showName: true
        })
        // submitToApi(formData)
        console.log(answer)
      }
    return(
        <>
    <h2 >Leave an answer:</h2>
    <div className="leave_an_answer">
        <textarea className="leave_an_answer answer" name="answer"  placeholder="Answer"  value={answer.answer}   onChange={handleChange} cols="30" rows="10"/>
        <button className="leave_an_answer btn" type="submit" onClick={handleSubmit}>Answer</button>
        {showName.showName && <q>{answer.answer}</q> }
    </div>
        </>
    )
}