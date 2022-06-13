import { Routes } from 'react-router-dom';

import routes from 'config/routes';
import generateRoutes from 'routes';

const App = () => (
  <Routes>{generateRoutes(routes)}</Routes>
);

export default App;
