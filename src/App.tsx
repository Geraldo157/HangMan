import { useEffect, useState } from "react"
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

  const incorrectLetters = guessedLetters.filter(letter => !wordGuess.includes(letter))

  function addGuessesLetter(letter: string){
    if(guessedLetters.includes(letter)) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessesLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () =>{
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  const isLoser  = incorrectLetters.length >= 6
  const isWinner = wordGuess.split("").every(letter => guessedLetters.includes(letter))

  return (
    <div
    className="max-w-[800px] mx-auto flex flex-col gap-8 items-center"
  >
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {isWinner && "YOU WIN! Refresh to try again!"}
      {isLoser && "More luck next time! Refresh to try again!"}
    </div>
    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
    <HangmanWord guessedLetters = {guessedLetters} wordToGuess={wordGuess}/>
    <div style={{ alignSelf: "stretch" }}>
      <HangmanKeyboard addGuessedLetters={addGuessesLetter}/>
    </div>
  </div>)
}

export default App
