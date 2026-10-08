import {useState,useEffect,useMemo} from 'react'

const HookUseMemo = () => {

    const [number, setNumber] = useState("")

    //const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    },[])

    useEffect(() => {
        console.log("Premiun Numbers foi alterado")
    },[premiumNumbers])

  return (
    <div>

        <h2>UseMemo</h2>
        <input type="number" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Voce acertou o numero</p> : <p>Voce Errou</p>}

    </div>
  )
}

export default HookUseMemo