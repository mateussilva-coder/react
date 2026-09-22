// Instalacao
console.log(axios)

//Primeiro request

const getData = async() => {
    try {
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")


        return response.data

    } catch (error) {
        console.log(error)
    }
}

getData()

console.log(getData())

getData().then(dados => console.log("Dados recebidos:", dados));

// 3 - Imprimindo dados na tela

const container = document.querySelector("#user-container")

const printData = async () => {

    const data = await getData()

    data.forEach(user => {
        
        const div = document.createElement("div")

        const nameElement = document.createElement("h2")

        nameElement.textContent = user.name

        div.appendChild(nameElement)

        const emailElement = document.createElement("h2")

        emailElement.textContent = user.email

        div.appendChild(emailElement)

        container.appendChild(div)

    });

}

printData()

// 5 - Post

const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        // Objeto direto que o Spring Boot receberia via @RequestBody
        const payload = {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        };

        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);

        console.log("Status HTTP:", response.status); // 201 (Created)
        console.log("Dado salvo no servidor:", response.data);
    } catch (error) {
        console.error("Erro no envio:", error);
    }
});