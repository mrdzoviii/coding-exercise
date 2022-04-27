import { Route, Routes } from 'react-router';
import { RequireAuth, LoginPage, RegisterPage } from './auth';
import { PathRoutes } from './config';
import { DashboardPage } from './dashboard/pages/DashboardPage';
import { Layout } from './layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout title="Dashboard" />}>
        <Route
          path={PathRoutes.ROOT}
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
      </Route>

      <Route path={PathRoutes.LOGIN} element={<LoginPage />} />
      <Route path={PathRoutes.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
}
export default App;
