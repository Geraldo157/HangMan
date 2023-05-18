import './App.css'

const HEAD = (
    <div className="h-16 w-16 rounded-full border-[10px] border-solid border-black absolute top-[48px] right-[-27px]"/>
)
const BODY = (
    <div className="h-[117px] w-3 rounded-full bg-black absolute top-[106px] right-0"/>
)

const RIGHT_ARM = (
    <div className="w-[100px] h-3 bg-black absolute top-36 right-[-100px] rotate-[-30deg] origin-bottom-left" />
)

const LEFT_ARM = (
    <div className="w-[100px] h-3 bg-black absolute top-36 right-[10px] rotate-[30deg] origin-bottom-right" />
)

const LEFT_LEG = (
    <div className="w-[100px] h-3 bg-black absolute top-52 right-0 rotate-[-60deg] origin-bottom-right" />
)

const RIGHT_LEG = (
    <div className="w-[100px] h-3 bg-black absolute top-52 right-[-90px] rotate-[60deg] origin-bottom-left" />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number;
}

export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps){
    return(
        <div className="relative">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="h-[50px] w-3 bg-black absolute top-0 right-0"/>
            <div className="h-3 w-[200px] bg-black ml-[122px]"/>
            <div className="h-[300px] w-3 bg-black ml-[122px]"/>
            <div className="h-3 w-64 bg-black"/>
        </div>
    )
}