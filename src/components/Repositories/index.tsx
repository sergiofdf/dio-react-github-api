import React, { useState, useEffect } from 'react';
import useGithub from '../../hooks/githubHooks';
import RepositoryItem from '../RepositoryItem';
import * as S from './styles';

const Repositories: React.FC = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(()=>{
    if(githubState.user.login){
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(githubState.repositories)
  }, [githubState.user.login])


  return (
    <> 
    {hasUserForSearchRepos ? 
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.repositories.map(item=> (
            <RepositoryItem
            key={item.id} 
            name={item.name}
            linkToRepo={item.html_url}
            fullName= {item.full_name}
            />
            ))}
          </S.WrapperList>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.starred.map(item=> (
              <RepositoryItem
              key={item.id} 
              name={item.name}
              linkToRepo={item.html_url}
              fullName= {item.full_name}
              />
              ))}
          </S.WrapperList>
        </S.WrapperTabPanel>
    </S.WrapperTabs>
    : <></>} 
    </>
);
}

export default Repositories;