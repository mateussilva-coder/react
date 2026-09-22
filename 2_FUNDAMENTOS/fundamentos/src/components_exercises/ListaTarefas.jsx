import React, { useState } from 'react';

function ListaTarefas() {
  const [list, setList] = useState([
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Criar DTO no Spring Boot" },
    { id: 3, texto: "Configurar segurança da API" }
  ]);

  const finalizarTarefa = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {list.length === 0 ? (
        <p>🎉 Todas as tarefas foram concluídas!</p>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.texto}{' '}
              <button onClick={() => finalizarTarefa(item.id)}>
                Finalizar Tarefa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTarefas;