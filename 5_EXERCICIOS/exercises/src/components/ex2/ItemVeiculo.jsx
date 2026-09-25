import React from 'react'

const formatarDinheiro = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
};

function ItemVeiculo({veiculo,onToggleStatus, onAplicarDesconto, onDeletar}) {

    const dinheiroFormatado = formatarDinheiro(veiculo.preco)

  return (
    <div>
        <h3>{veiculo.modelo}</h3>
        <p>Categoria: {veiculo.categoria}</p>
        <p>Preco: {dinheiroFormatado}</p>
        <p>Status: {veiculo.status}</p>

        <button onClick={() => {onToggleStatus(veiculo.id)}}>Mudar Status</button>
        <button onClick={() => {onAplicarDesconto(veiculo.id)}}>Aplicar desconto de 10%</button>
        <button onClick={() => {onDeletar(veiculo.id)}}>Deletar</button>
    </div>
  )
}

export default ItemVeiculo