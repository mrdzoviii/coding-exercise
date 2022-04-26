import { useRootStateSelector } from './store';

function App() {
  const isAuthorized = useRootStateSelector((state) => state.auth.isAuthorized);
  return <div>TEST {`${isAuthorized}`}</div>;
}
export default App;
