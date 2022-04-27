import { Route, Routes } from 'react-router';
import { RequireAuth, LoginPage, RegisterPage } from './auth';
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
      <Route path={PathRoutes.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
}
export default App;
