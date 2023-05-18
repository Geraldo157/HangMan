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
  <div className="flex max-w-lg flex-col gap-8 m-auto items-center">
    <div className="text-4xl text-center ">
      Lose
      Win
    </div>
    <HangmanDrawing />
    <HangmanWord />
    <div className="self-stretch">
      <HangmanKeyboard />
    </div>

  </div>)
}

export default App
