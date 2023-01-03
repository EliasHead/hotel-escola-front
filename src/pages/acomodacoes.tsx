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
  ]
  return (
    <Container>
      <Slider imgs={imgs}></Slider>
      <h3>Acomodações</h3>
      <p>
        As 20 unidades habitacionais (uhs) estruturalmente compõem-se em quarto
        e banheiro, sendo que 17 uhs possuem varanda com vista para o jardim
        frontal do hotel escola. Existem 03 uhs que se diferenciam das demais em
        espaço. Cada uh dispõe de 03 leitos solteiro (cama box), enxoval com
        lençóis 250 fios e cobre leito, travesseiro (01 por leito), guarda-roupa
        embutido em 19 uhs, televisão LCD 32’’, ventilador de pé (se solicitado,
        o item não ficará presente na uh), frigobar, diretório com normas e
        procedimentos do hotel, banheiro com enxoval completo de toalhas e
        chuveiro elétrico. A classificação para as uhs do Hotel Escola é: triplo
        Sugiro então: triplo para a configuração e stander para a categoria.
      </p>
    </Container>
  )
}
