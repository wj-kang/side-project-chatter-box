import { Switch, Route, Link, useParams } from 'react-router-dom';
import PageContainer from './components/PageContainer';
import MainPage from './pages/MainPage';
import WaitPage from './pages/WaitPage';

function App() {
  return (
    <>
      <PageContainer>
        <Switch>
          <Route path="/main" children={<MainPage />} />
          <Route path="/wait" children={<WaitPage handleJoinChat={() => console.log('asdf')} />} />
          <Route path="/room/:roomId" children={<></>} />
          <PageNotFound />
        </Switch>
      </PageContainer>
    </>
  );
}

// function Temp() {
//   const { roomId } = useParams();
//   return <h3>{roomId}</h3>;
// }

function PageNotFound() {
  return <h3>404!</h3>;
}

export default App;
