import { useState } from 'react'
import PostCard from './components_exercises/ex2/PostCard'
import './App.css'
import MyForm from './components/MyForm'
import UserProfile from './components_exercises/ex1/UserProfile'
import TaskItem from './components_exercises/ex1/TaskItem'
import Container from './components_exercises/ex2/Container'
import PostForm from './components_exercises/ex2/PostForm'

function App() {
  const [tasks, setTasks] = useState([{ id: 1, text: "Estudar React" }, { id: 2, text: "Fazer café" }])

const [posts, setPosts] = useState([
  {
    id: 1,
    autor: "Ana Silva",
    mensagem: "Lembrar de revisar os conceitos de State Lift e Imutabilidade hoje!",
    isImportante: true,
    curtidas: 3
  },
  {
    id: 2,
    autor: "Carlos Eduardo",
    mensagem: "O projeto Mini Feed está ganhando forma. React é muito bom!",
    isImportante: false,
    curtidas: 0
  },
  {
    id: 3,
    autor: "Mariana Souza",
    mensagem: "Alguém topa um café antes do próximo exercício de JavaScript?",
    isImportante: false,
    curtidas: 5
  }
]);

const adicionar = (novoPost) => {
  setPosts(prev => [...prev, novoPost])
}

const deletar = (id) => {
  setPosts(prev => prev.filter(post => post.id !== id))
}

const curtir = (id) => {
  setPosts(prev => prev.map(post => {
    if (post.id === id) {
      return { ...post, curtidas: post.curtidas + 1 }
    }
    return post
  }))
}


  return (
    <div>
      <h1>Form no React</h1>
      <MyForm/> 
      <hr />

      <UserProfile isActive={true} name={"Mateus"} role={"SFT"}/>

      <hr />

      <TaskItem newTask={setTasks}/>

      <hr />

      <Container>
            <h1>Mini Feed de Recados 📝</h1>
            
            {/* Formulário enviando a prop de State Lift */}
            <PostForm onAddPost={adicionar} />

            <hr style={{ margin: "20px 0" }} />

            {/* Renderização Condicional + Listagem com .map() */}
            {posts.length === 0 ? (
              <p>Nenhum recado por aqui ainda...</p>
            ) : (
              posts.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  onDeletePost={deletar}
                  onLikePost={curtir}
                />
              ))
            )}
          </Container>

          <hr />
    </div>
  )
}

export default App
