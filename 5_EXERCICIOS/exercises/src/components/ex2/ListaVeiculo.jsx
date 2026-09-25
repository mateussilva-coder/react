import ItemVeiculo from './ItemVeiculo'

function ListaVeiculos({ veiculos, onToggleStatus, onAplicarDesconto, onDeletar }) {
  return (
    <div>
      <h2>Sua Frota</h2>
      
     
      {veiculos.map((veiculo) => (
        <ItemVeiculo
          key={veiculo.id}
          veiculo={veiculo}
          onToggleStatus={onToggleStatus}
          onAplicarDesconto={onAplicarDesconto}
          onDeletar={onDeletar}
        />
      ))}
    </div>
  )
}

export default ListaVeiculos