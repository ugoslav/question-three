import React, { useState } from 'react'

const InputArea = (props) => {
    return(
        <div>
            <form onSubmit={props.submissionHandler}>
                <input placeholder='write your note here...' value={props.noteText} onChange={(e) => props.setNoteText(e.target.value)}></input>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

const DisplayArea = (props) => {
    const notes = props.notes
    return(
        <div>
            <ol>
                {notes.map(item => {
                    return (
                        <div key={item}>
                            <h2>  <li>{item} <button style={{marginLeft: "10px"}} onClick={() => props.deleteHandler(item)}>delete</button></li>  </h2>
                        </div>
                )
                })}
            </ol>
        </div>
    )
}

const App = () => {
    const [todoList , setTodoList] = useState([])
    const [noteText , setNoteText] = useState('')

    const submissionHandler = (e) => {
        e.preventDefault()
        setTodoList(todoList.concat(noteText))
        setNoteText('')
    }

    const deleteHandler = (target) => {
        let filteredArray = todoList.filter(item => item !== target)
        setTodoList(filteredArray)
    }

  return (
    <div>
      <InputArea noteText={noteText} setNoteText={setNoteText} submissionHandler={submissionHandler}/>
      <DisplayArea notes={todoList} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default App
