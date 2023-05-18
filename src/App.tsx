import { useState } from "react"
import words from './wordList.json';
import {HangmanWord} from './HangmanWord';
import {HangmanKeyboard} from './HangmanKeyboard';
import {HangmanDrawing} from './HangmanDrawing';
import './App.css'

function App() {
  const [wordGuess, setWordGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div
    className="max-w-[800px] mx-auto flex flex-col gap-8 items-center"
    /*style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
      
    }}*/
  >
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      Win lose
    </div>
    <HangmanDrawing/>
    <HangmanWord
    />
    <div style={{ alignSelf: "stretch" }}>
      <HangmanKeyboard
      />
    </div>
  </div>)
}

export default App
