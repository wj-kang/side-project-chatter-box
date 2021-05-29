import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageContainer from './components/PageContainer';
import MainPage from './pages/MainPage';
import RoomPageRender from './pages/RoomPageRender';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';

function App({ authService, dbService }) {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    // auth check, if no context then create guest auth
    authService.onAuthChange((context) => {
      if (context == null) {
        authService //
          .guest()
          .then((data) => setUid(data.user.uid));
      } else {
        setUid(context.uid);
      }
    });
  }, []);

  return (
    <>
      <PageContainer>
        <Switch>
          <Route //
            exact
            path="/"
            children={<MainPage dbService={dbService} />}
          />

          <Route //
            path="/room/:roomId"
            children={
              <RoomPageRender //
                uid={uid}
                dbService={dbService}
              />
            }
          />

          <PageNotFound />
        </Switch>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
