    import { useState } from "react"
    import "./MyForm.css"

    function MyForm() {

        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [role, setRole] = useState("")


        const handleSubmit = (e) => {
            e.preventDefault();


            setName("")
            setEmail("")
        }

        const handleName = (e) => {
            setName(e.target.value)

            setName("")
            setEmail("")
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Insira seu nome: </label>
                    <input type="text" name="name" placeholder="Insira seu nome..."/>
                    <input type="submit" value="enviar" onChange={handleSubmit}/>

                    <label>
                        <span>E-mail:  {email}</span>
                        <input type="text" name="name" placeholder="Insira seu email..." onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
                    </label>

                    <h2>Olá {name}</h2>
                    <input type="text" placeholder="Insira seu nome..." onChange={handleName} value={name || ""}/>


                    <label>
                        <span>Funcao do sitema</span>
                        <select name="role">
                            <option value="user">Usuario</option>
                            <option value="editor">Editor</option>
                            <option value="admin">admin</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
    }

    export default MyForm