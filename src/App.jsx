import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import AppRoutes from './routes/app.routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
