import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Container } from '../components/Container'
import {
  Table,
  TableContainer,
  TerifasContainer,
} from '../styles/pages/tarifas'

type TarifasType = {
  nome_periodo: string
  tarifa_1_adulto: string
  tarifa_2_adulto: string
  tarifa_3_adulto: string
  tarifa_4_adulto: string
  tarifa_crianca_5_anos: string
  tarifa_crianca_12_anos: string
}

type Periodos_indisponiveisType = {
  nome_periodo: string
  dt_inicio: string
  dt_fim: string
}

type DataType = {
  periodos_indisponiveis: Periodos_indisponiveisType[]
  tarifas: TarifasType[]
}

export default function Tarifas({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('aqui', data)

  const tarifas = data.tarifas
  const periodos = data.periodos_indisponiveis

  return (
    <Container>
      <TerifasContainer>
        <h1>Tarifas</h1>
        <h2>Veja as tarifas abaixo</h2>
        <hr />
        <div>
          <p>
            <strong>Tarifas de hospedagem</strong>
          </p>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Tipo de tarifa</th>
                  <th>Individual</th>
                  <th>Duplo</th>
                  <th>Triplo</th>
                  <th>Quadruplo</th>
                  <th>Criança até 12 anos</th>
                </tr>
              </thead>
              <tbody>
                {tarifas.map((tarifa) => {
                  return (
                    <tr key={tarifa.nome_periodo}>
                      <td>{tarifa.nome_periodo}</td>
                      <td>{tarifa.tarifa_1_adulto}</td>
                      <td>{tarifa.tarifa_2_adulto}</td>
                      <td>{tarifa.tarifa_3_adulto}</td>
                      <td>{tarifa.tarifa_4_adulto}</td>
                      <td>{tarifa.tarifa_crianca_12_anos}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </TableContainer>
          <ul>
            <li>Crianças até 5 anos não pagam</li>
            <li>O café da manhã não está incluso.</li>
          </ul>
        </div>

        <p>
          <strong>Pacotes disponíveis</strong> - não há dados cadastrados
        </p>

        <div>
          <p>
            <strong>Períodos indisponíveis</strong>
          </p>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Motivo de Indisponibilidade</th>
                  <th>Data de início</th>
                  <th>Data de término</th>
                </tr>
              </thead>
              <tbody>
                {periodos.map((periodo) => {
                  return (
                    <tr key={periodo.nome_periodo}>
                      <td>{periodo.nome_periodo}</td>
                      <td>{periodo.dt_inicio}</td>
                      <td>{periodo.dt_fim}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </TableContainer>
        </div>
      </TerifasContainer>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<{ data: DataType }> = async (
  context,
) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://admin.hotelescola.ifce.edu.br/admin/tarifas/jsonsite.json',
  )
  const data: DataType = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}
