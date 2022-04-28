import { Navigate, Route, Routes } from 'react-router';
import { RequireAuth, LoginPage, RegisterPage } from './auth';
import { PathRoutes } from './config';
import { DashboardPage } from './dashboard';
import { AppLayout } from './layout';
import { SettingsPage } from './settings';

function App() {
  return (
    <Routes>
      <Route path={PathRoutes.ROOT} element={<Navigate to={PathRoutes.DASHBOARD} />} />
      <Route element={<AppLayout title="Dashboard" />}>
        <Route
          path={PathRoutes.DASHBOARD}
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
      </Route>

      <Route element={<AppLayout title="Settings" />}>
        <Route
          path={PathRoutes.SETTINGS}
          element={
            <RequireAuth>
              <SettingsPage />
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
