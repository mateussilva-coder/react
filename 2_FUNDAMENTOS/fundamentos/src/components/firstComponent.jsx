import MyComponent from "./MyComponent";

//Criando nosso primeiro componente
const FirstComponent = () => {
    return(
        <div>
            <h2>Meu primeiro componente</h2>
            <input type="text"  placeholder="Insira seu nome: "/>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;