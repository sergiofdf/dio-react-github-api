import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from './hooks/githubHooks';

const App =() => {
  const { githubState } = useGithub(); 

  return (
    <Layout>
      {githubState.hasUser ? 
      <>
      {githubState.loading ? ( <p>Loading</p> ) : (<> 
      <Profile />
      <Repositories /> 
      </>
      )} </>: <div>Nenhum usuário pesquisado</div>  }
    </Layout>
  );
}

export default App;
