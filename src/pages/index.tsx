import { Slider } from '../components/Slider'
import { Container, Heading3, Title, Text, Content } from '../styles/pages/home'

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
    <Container>
      <Slider imgs={imgs} />
      <Content>
        <Title>Hotel Escola Guaramiranga</Title>
        <hr />
        <Heading3>
          Nosso objetivo é constituir um espaço com estrutura adequada à
          realização do ensino, de eventos e de serviços de hospitalidade
          pautados na responsabilidade socioambiental.
        </Heading3>
        <Text>
          Nosso diferencial dos demais meios de hospedagem é a prática da
          hospitalidade em ambiente educacional, portanto, quem opta em se
          hospedar no Hotel Escola do IFCE estará fazendo parte do processo
          educativo dos nossos alunos. Em essência estará se hospedando em um
          verdadeiro Hotel Escola.
        </Text>
        <Text>
          <strong>Horários de atendimento da recepção:</strong> Segunda a Quinta
          8h às 17h. Sexta e Sábado 7h às 19h. Domingo 7h às 14h.
        </Text>
        <Text>
          <strong>Horários de atendimento da governança:</strong> Segunda a
          sábado das 7h:30min às 11h:30min domingo das 8h às 13h.
        </Text>
        <Text>
          O hóspede deverá fazer a solicitação de limpeza da unidade
          habitacional na Recepção, conforme o horário de funcionamento da
          governança. Caso não haja manifestação, a unidade habitacional não
          receberá a visita da equipe de governança.
        </Text>
        <Text>
          <strong>Mais detalhes:</strong> Dispomos de estacionamento, vigilância
          24h, piscinas (adulto e infantil) e salão de eventos (capacidade de
          150 pessoas). Não esqueça de trazer sua rede para desfrutar da bela
          paisagem da nossa varanda.
        </Text>
        <br />
      </Content>
    </Container>
  )
}
