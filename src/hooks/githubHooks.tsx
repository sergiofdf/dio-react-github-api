import { useContext } from 'react';
import { GithubContext } from '../providers/githubProvider';

const useGithub = () => {

  const { githubState, getUser, getUserRepos, getUserStarred } = useContext( GithubContext );

  return {githubState, getUser, getUserRepos, getUserStarred}

};

export default useGithub;