import { Navigate, Route, Routes } from 'react-router';
import { RequireAuth, LoginPage, RegisterPage } from './auth';
import { PathRoutes } from './config';
import { AppLayout } from './layout';
import { DashboardPage, SettingsPage, NotFoundPage } from './main';

function App() {
  return (
    <Routes>
      <Route path={PathRoutes.ROOT} element={<Navigate to={PathRoutes.DASHBOARD} />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppLayout title="settings" />}>
          <Route path={PathRoutes.SETTINGS} element={<SettingsPage />} />
        </Route>
        <Route element={<AppLayout title="dashboard" />}>
          <Route path={PathRoutes.DASHBOARD} element={<DashboardPage />} />
        </Route>
      </Route>
      <Route path={PathRoutes.LOGIN} element={<LoginPage />} />
      <Route path={PathRoutes.REGISTER} element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
