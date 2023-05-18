const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


export function HangmanKeyboard(){
    return(
        <div className="grid grid-cols- auto-fit gap-2">
            {KEYS.map(key =>{
                return <button key={key}>{key}</button>
            })}
        </div>
    )
    
}