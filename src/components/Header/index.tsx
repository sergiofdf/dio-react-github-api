import React, {useState} from 'react';
import * as S from './styles';
import useGithub from '../../hooks/githubHooks';

const Header: React.FC = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();
  
  const submitGetUser = () => {
    if(!usernameForSearch) return;
    getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder="Digite o username para pesquisa..." onChange={(event)=>setUsernameForSearch(event.target.value)}/>
        <button type="submit" onClick={submitGetUser}>Buscar</button>
      </S.Wrapper>
    </header>
  );
}

export default Header;