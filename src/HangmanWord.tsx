type HangmanWordsProps = {
    guessedLetters: string[]
    wordToGuess: string
  }
  
  export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordsProps) {
    return (
      <div className="flex gap-1 text-6xl font-bold uppercase">
        {wordToGuess.split("").map((letter, index) => (
          <span className="border-b-8 border-solid border-black" key={index}>
            <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>{letter}</span>
          </span>
        ))}
      </div>
    )
  }