import { Route, Routes } from 'react-router';
import { RequireAuth, LoginPage } from './auth';
import { PathRoutes } from './config';

function App() {
  return (
    <Routes>
      <Route
        path={PathRoutes.ROOT}
        element={
          <RequireAuth>
            <div>Home</div>
          </RequireAuth>
        }
      />
      <Route path={PathRoutes.LOGIN} element={<LoginPage />} />
    </Routes>
  );
}
export default App;
