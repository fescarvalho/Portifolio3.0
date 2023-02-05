import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home/Home';
import Projetos from '../pages/Project/Projetos';
import Contato from '../pages/Contact/Contato';
import PageProjectFront from '../pages/PageProject/PageProjectFront';
import PageProjectBack from '../pages/PageProject/PageProjectBack';
import ProjeFront from '../pages/ProjeFront/ProjeFront';
import ProjeBack from '../pages/ProjeBack/ProjeBack';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" ex element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/project/frontend" element={<ProjeFront />} />
        <Route path="/project/backend" element={<ProjeBack />} />

        {/* FrontEnd */}
        <Route
          path="/projetos/frontend/dogs"
          element={
            <PageProjectFront
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
          path="/projetos/frontend/bike"
          element={
            <PageProjectFront
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
          path="/projetos/frontend/supermarket"
          element={
            <PageProjectFront
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
          path="/projetos/frontend/lescone"
          element={
            <PageProjectFront
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
          path="/projetos/frontend/hoursbus"
          element={
            <PageProjectFront
              name="Hours Bus"
              srcLink="https://hoursbus.vercel.app"
              srcGithub="https://github.com/fescarvalho/HoursBus"
              srcImage="/images/HoursBus/image2.png"
              description="Projeto criado para divulgação de horario de onibus."
              tecs={['Typescript', 'React', 'CssModules']}
            />
          }
        />
        <Route
          path="/projetos/frontend/walletapp"
          element={
            <PageProjectBack
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

        {/* BackEnd */}
        <Route
          path="/projetos/backend/walletapp"
          element={
            <PageProjectFront
              name="Wallet App"
              srcLink="https://walletappbackend-production.up.railway.app/"
              srcGithub="https://github.com/fescarvalho/WalletAppBackend"
              srcImage="/images/WalletApp/image1.png"
              description="API construida para compor o projeto Wallet App."
              tecs={['NodeJs', 'Docker', 'PostgresSQL', 'Express']}
            />
          }
        />
        <Route
          path="/projetos/backend/supermarket"
          element={
            <PageProjectFront
              name="Wallet App"
              srcLink="https://api-supermarke-list-production.up.railway.app/"
              srcGithub="https://github.com/fescarvalho/API-Supermarke-List"
              srcImage="/images/Supermarket/image1.png"
              description="API construida para compor o projeto Super Market."
              tecs={['NodeJs', 'Docker', 'MongoDB', 'Mongoose', 'Express']}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
