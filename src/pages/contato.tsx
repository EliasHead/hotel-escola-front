import { Buildings, EnvelopeSimple, Globe, MapPin } from 'phosphor-react'
import { Container } from '../components/Container'
import {
  Box,
  ContatoContainer,
  HeadContato,
  Text,
  Map,
} from '../styles/pages/contato'

export default function Contato() {
  return (
    <Container>
      <HeadContato>
        <Text>
          <h1>Entre em contato conosco</h1>
          <h2>Sua opinião é importante para nós.</h2>
        </Text>
      </HeadContato>
      <ContatoContainer>
        <div>
          <h3>Informações de contato</h3>
          <Box>
            <div>
              <Buildings size={32} color="#000" />
            </div>
            <p>
              <strong>Nome</strong>
              <br /> Instituto Federal de Educação, Ciência e Tecnologia do
              Ceará - Campus Avançado de Guaramiranga
            </p>
          </Box>
          <Box>
            <div>
              <MapPin size={32} color="#000" />
            </div>
            <p>
              <strong>Endereço</strong>
              <br />
              Sítio Guaramiranga, S/N - Centro - Guaramiranga - CE, CEP:
              62766-000
            </p>
          </Box>
          <Box>
            <div>
              <EnvelopeSimple size={32} color="#000" />
            </div>
            <p>
              <strong>Email</strong>
              <br />
              hotelescola@ifce.edu.br
            </p>
          </Box>
          <Box>
            <div>
              <Globe size={32} color="#000" />
            </div>
            <p>
              <strong>Website</strong>
              <br />
              www.hotelescola.ifce.edu.br
            </p>
          </Box>
        </div>
        <Map>
          <h3>Veja como chegar ao Hotel Escola Guaramiranga</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.759676282882!2d-38.934040650189345!3d-4.266899096883079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf3e9c5695590f%3A0xb0fe4b6e462a7eae!2sIFCE%20Hotel%20Escola%20Guaramiranga!5e0!3m2!1sen!2sbr!4v1672167515779!5m2!1sen!2sbr"
            width="400"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
      </ContatoContainer>
    </Container>
  )
}
