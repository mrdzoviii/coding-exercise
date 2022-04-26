import { Route, Routes } from 'react-router';
import { RequireAuth, SignInPage } from './auth';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <div>Home</div>
          </RequireAuth>
        }
      />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
}
export default App;
