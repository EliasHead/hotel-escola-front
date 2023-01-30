import Link from 'next/link'
import { Container } from '../components/Container'

export default function Regulamento() {
  return (
    <Container>
      <h3 style={{ marginTop: '1.6rem' }}>Regulamento</h3>
      <ul>
        <li>
          Não é permitido transitar nas dependências do Hotel Escola com traje
          de banho, exceto na área da piscina.
        </li>
        <li>
          Impreterivelmente o hóspede dever fazer o check out até o momento em
          que a diária termina.
        </li>
        <li>
          Em caso de extravio da chave do apartamento, o hóspede arcará com o
          ônus da segunda via.
        </li>
        <li>
          Não é permitido retirar frutas e flores do Hotel Escola. A natureza
          deve ser conservada.
        </li>
        <li>
          Os responsáveis devem ser atentos às suas crianças, principalmente no
          uso da piscina.
        </li>
        <li>
          Qualquer dano ao patrimônio do Hotel Escola causado pelo hóspede
          deverá ser reparado pelo mesmo.
        </li>
        <li>
          O Hotel não possui aparato para acomodação de crianças, como por
          exemplo: berço, bebê conforto, etc.
        </li>
        <li>
          Criança abaixo de 5 anos não paga. De 5 a 12 anos paga R$: 70,00 e
          acima dos 12 anos é considerada adulto.
        </li>
        <li>Não é permitido trazer animais.</li>
        <li>Não é permitido fumar em todo Hotel.</li>
        <li>
          O horário das diárias: saída (check out) – 12h / entrada (check in) –
          14h.
        </li>
        <li>Pagamento através de GRU simples.</li>
      </ul>
      <p>
        Caso você tenha mais dúvidas, entre em contato com o{' '}
        <strong>Hotel Escola.</strong>, Nós estamos sempre dispostos a ajudar.
        <strong>
          <Link href="/contato"> Clique aqui </Link>
        </strong>
        para entrar em contato.
      </p>
      <p>
        <strong>Formas de pagamento:</strong> A GRU é um documento para o
        imposto unificado existente no Brasil com o objetivo de facilitar a
        cobrança de serviços públicos, pagável somente no Banco do Brasil
        (agências ou aplicativos BB).
      </p>
      <p>
        <strong>Política de cancelamento:</strong> Caso o requisitante cancele
        até 07 dias antes da data da reserva, ele será reembolsado em 100% da
        tarifa. Caso o hóspede não tenha feito o pagamento da GRU, o
        cancelamento é realizado sem ônus. Após esse período (7 dias antes da
        data da reserva) a tarifa não é reembolsável.
      </p>
      <p>
        O hóspede, no entanto, tem o prazo de até 30 dias para utilizar a
        hospedagem, mediante agendamento prévio.
      </p>
    </Container>
  )
}
