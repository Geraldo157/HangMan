const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


export function HangmanKeyboard(){
    return(
        <div className="grid grid-cols-auto-fit-minmax-75 gap-0.5rem">
            {KEYS.map(key =>{
                return <button className={`w-full border-[3px] border-solid border-black aspect-square text-4xl uppercase p-2 font-bold cursor-pointer text-black btn active:bg-hsl-200 active:text-white inactive:opacity-30 hover:bg-teal-600 hover:text-zinc-900 focus:bg-zinc-400 focus:text-emerald-500" disabled={false}`}>
                    {key}
                </button>
            })}
        </div>
    )
    
}