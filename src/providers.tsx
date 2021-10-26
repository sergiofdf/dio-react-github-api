import React from 'react';
import GitHubProvider from './providers/githubProvider';
import { ResetCSS } from './Global/resetCSS';
import App from './App';

const Providers: React.FC = () => {
  return (
    <main>
      <GitHubProvider>
      <ResetCSS />
      <App />
    </GitHubProvider>
  </main>
  );
}

export default Providers;