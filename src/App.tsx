import { useState } from "react"
import words from './wordList.json';
import './App.css'

function App() {
  const [wordGuess, setWordGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (<h1 className="text-red-500">Hello World</h1>)
}

export default App
