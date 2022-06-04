import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />

      <Lista
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'Lorem ipsum dolor sit amet, consectetur adip',
            foto: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453'
          },{
            id: 2,
            nome: 'Alex',
            historia: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip, amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
            foto: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453'
          }
        ]} />
    </div>
  )
}

export default Home
