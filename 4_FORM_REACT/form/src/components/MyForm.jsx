    import { useState } from "react"
    import "./MyForm.css"

    function MyForm() {

        const [name, setName] = useState("")

        const handleName = (e) => {
            setName(e.target.value)
        }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Insira seu nome: </label>
                    <input type="text" name="name" placeholder="Insira seu nome..."/>
                    <input type="submit" value="enviar"/>

                    <label>
                        <span>E-mail: </span>
                        <input type="text" name="name" placeholder="Insira seu email..."/>
                    </label>

                    <h2>Olá {name}</h2>
                    <input type="text" placeholder="Insira seu nome..." onChange={handleName}/>
                </div>
            </form>
        </div>
    )
    }

    export default MyForm