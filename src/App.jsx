import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projetos from './pages/Project/Projetos';
import Contato from './pages/Contact/Contato';
import PageProject from './pages/PageProject/PageProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />

        <Route
          path="/projetos/dogs"
          element={
            <PageProject
              name="Dogs-Rede Social"
              srcLink="https://dogs-social.vercel.app/"
              srcGithub="https://github.com/fescarvalho/Dogs"
              srcImage="/images/DogsSocial/image2.png"
              description="Projeto de Rede Social para pets."
              tecs={['React', 'CSSModules', 'MongoDb']}
            />
          }
        />
        <Route
          path="/projetos/bike"
          element={
            <PageProject
              name="Bike Craft"
              srcLink="https://bikcraftmotors.netlify.app/"
              srcGithub="https://github.com/fescarvalho/bikcraft"
              srcImage="/images/BikeCraft/image1.png"
              description="Projeto de site para compra de Bicicletas e Seguros."
              tecs={['HTML', 'CSS', 'JavaScript']}
            />
          }
        />
        <Route
          path="/projetos/supermarket"
          element={
            <PageProject
              name="Super Market List"
              srcLink="https://app-supermarket-list-front.vercel.app/"
              srcGithub="https://github.com/fescarvalho/APP-SupermarketList-Front"
              srcImage="/images/SuperMarket/image2.png"
              description="Projeto criado para auxilio na organização de lista de compras de supermercado. Foi construida API para salvamento dos dados e cadastro do usuario."
              tecs={[
                'React',
                'CSS',
                'Axios',
                'NodeJs',
                'Docker',
                'Mongoose',
                'MongoDB',
                'Express',
              ]}
            />
          }
        />
        <Route
          path="/projetos/lescone"
          element={
            <PageProject
              name="Le Scone Restaurante"
              srcLink="https://le-scone-degust.vercel.app"
              srcGithub="https://github.com/fescarvalho/LeScone"
              srcImage="/images/LeScone/image1.png"
              description="Projeto criado para divulgação de Restaurante."
              tecs={['HTML', 'SASS', 'JavaScript']}
            />
          }
        />
        <Route
          path="/projetos/hoursbus"
          element={
            <PageProject
              name="Hours Bus"
              srcLink="https://hoursbus.vercel.app"
              srcGithub="https://github.com/fescarvalho/HoursBus"
              srcImage="/images/HoursBus/image1.png"
              description="Projeto criado para divulgação de horario de onibus."
              tecs={['Typescript', 'React', 'CssModules']}
            />
          }
        />
        <Route
          path="/projetos/walletapp"
          element={
            <PageProject
              name="Wallet App"
              srcLink="https://wallet-app-frontend.vercel.app"
              srcGithub="https://github.com/fescarvalho/wallet-app-frontend"
              srcImage="/images/WalletApp/image1.png"
              description="Projeto criado para auxilio no controle de gastos mensais."
              tecs={[
                'React',
                'CSS',
                'NodeJs',
                'Docker',
                'PostgresSQL',
                'Express',
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
