import { Container } from '../components/Container'
import { Slider } from '../components/Slider'
import { Title } from '../styles/pages/home'

export default function Home() {
  const imgs = [
    {
      url: '/hotel/h1.jpeg',
    },
    {
      url: '/hotel/h2.jpeg',
    },
    {
      url: '/hotel/h3.jpeg',
    },
    {
      url: '/hotel/h4.jpeg',
    },
    {
      url: '/hotel/h5.jpeg',
    },
    {
      url: '/hotel/h6.jpeg',
    },
    {
      url: '/hotel/h7.jpeg',
    },
    {
      url: '/hotel/h8.jpeg',
    },
    {
      url: '/hotel/h9.jpeg',
    },
    {
      url: '/hotel/h10.jpeg',
    },
  ]

  return (
    <>
      <Container>
        <Slider imgs={imgs} />
        <Title>Hotel Escola Guaramiranga</Title>
        <hr />
        <h3>
          O Hotel Escola Guaramiranga faz parte do Campus IFCE Guaramiranga, e é
          o único Hotel Escola da rede federal de ensino no Brasil. Está
          localizado no coração do município de Guaramiranga (aproximadamente
          900m da praça central) e seu prédio é um dos mais tradicionais da
          cidade.
        </h3>
        <h3>O Hotel oferece: </h3>
        <ul>
          <li>Piscinas (adulto e infantil).</li>
          <li>Amplo estacionamento.</li>
          <li>Vigilância 24hs.</li>
          <li>Parquinho infantil.</li>
          <li>Salão de eventos (150 pessoas).</li>
          <li>Jardim.</li>
          <li>Espaço de jogos (sinuca, ping pong).</li>
        </ul>
        <p>
          Nosso objetivo é constituir um espaço com estrutura adequada à
          realização do ensino, de eventos e de serviços de hospitalidade
          pautados na responsabilidade socioambiental.
        </p>
        <p>
          <strong>Horários de atendimento da recepção:</strong>{' '}
        </p>
        <p>7:00 às 19:00</p>
        {/* <p>Terça a Quarta 8h às 17h.</p>
        <p>Quinta 7h às 20h.</p>
        <p>Sexta e Sábado 7h às 21h.</p> */}
        <p>
          Horário para solicitar arrumação da UH (Unidade habitacional): Até às
          10h
        </p>
        <p>
          <strong>Mais detalhes:</strong> Dispomos de estacionamento, wifi
          gratuita, vigilância 24h, piscinas (adulto e infantil), parquinho e
          salão de eventos (capacidade de 150 pessoas).
        </p>
        <p>
          Não esqueça de trazer sua rede para desfrutar da bela paisagem da
          nossa varanda.
        </p>
      </Container>
    </>
  )
}
