import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
        <form>
            <label htmlFor="name">Insira seu nome: </label>
            <input type="text" name="name" placeholder="Insira seu nome..."/>
        </form>
    </div>
  )
}

export default MyForm