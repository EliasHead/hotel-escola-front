import { Container } from '../components/Container'

export default function Tarifas() {
  return (
    <Container>
      <h1>Tarifas</h1>
      <h2>Veja as tarifas abaixo</h2>
      <hr />
      <h3>Tarifas</h3>
      <div>
        <p>Tarifas de hospedagem</p>
        <div>tabela</div>
        <ol>
          <li>Crianças até 5 anos não pagam</li>
          <li>O café da manhã não está incluso.</li>
        </ol>
      </div>

      <p>Pacotes disponíveis - não há dados cadastrados</p>
      <div>
        <p>Períodos indisponíveis</p>
        <div>tabela</div>
      </div>
    </Container>
  )
}
