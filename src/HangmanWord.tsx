export function HangmanWord(){
    const word = "test"
    let guessedLetters = ["t", "e"]
    return (<div className="flex gap-1 text-6xl font-bold uppercase">
        {word.split("").map((letter, index)=>{
            return <span className="border-b-8 border-solid border-black" key={index}>
                <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`} >{letter}</span>
            </span>
        })}
    </div>)
}