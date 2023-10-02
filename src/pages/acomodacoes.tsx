import { Container } from '../components/Container'
import { Slider } from '../components/Slider'

export default function Learn() {
  const imgs = [
    {
      url: '/quartos/q1.jpg',
    },
    {
      url: '/quartos/q2.jpg',
    },
    {
      url: '/quartos/q3.jpg',
    },
    {
      url: '/quartos/q4.jpg',
    },
    {
      url: '/quartos/q5.jpg',
    },
    {
      url: '/quartos/q6.jpg',
    },
    {
      url: '/quartos/q7.jpg',
    },
    {
      url: '/quartos/q8.jpeg',
    },
    {
      url: '/quartos/q9.jpeg',
    },
    {
      url: '/quartos/q10.jpeg',
    },
    {
      url: '/quartos/q11.jpeg',
    },
    {
      url: '/quartos/q12.jpeg',
    },
  ]
  return (
    <Container>
      <Slider imgs={imgs}></Slider>
      <h3>ACOMODAÇÕES</h3>
      <p>
        <strong>Configuração padrão: Triplo</strong>
      </p>
      <p>
        <strong>Categoria: Standard</strong>
      </p>
      <p>Nossas unidades habitacionais oferecem: </p>
      <ul>
        <li>Banheiro com chuveiro elétrico.</li>
        <li>Vista para o jardim</li>
        <li>Guarda-roupa</li>
        <li>Televisão LCD 32’’</li>
        <li>Frigobar</li>
        <li>Cama box com enxoval completo (lençol, edredom e travesseiro)</li>
      </ul>
      <h3>
        <strong>OBS:</strong>
      </h3>
      <ul>
        <li>As Uh’s NÃO possuem ar condicionado;</li>
        <li>
          Os banheiros NÃO possuem amenities (pequenos sabonetes e mini frascos
          de shampoo e condicionador) e nem secador de cabelo.
        </li>
      </ul>
      <p>
        Cada acomodação dispõe de 03 leitos solteiro (cama box), enxoval com
        lençóis 250 fios e cobre leito, e travesseiro (01 por leito).
      </p>
    </Container>
  )
}
