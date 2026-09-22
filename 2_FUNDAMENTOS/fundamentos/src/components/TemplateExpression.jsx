//4 Template Expressiom

const TemplateExpression = () => {
    const name = "Mateus"

    const data = {
        age: 18,
        job: "Dev"
    }

    const {age, job} = data

     return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vindo {name}!</h3>
            <p>O {name} trabalha de {job} e tem {age} anos</p>
        </div>
     )
}

export default TemplateExpression