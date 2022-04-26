import { useAppSelector } from './store';

function App() {
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  return <div>TEST {`${isAuthorized}`}</div>;
}
export default App;
