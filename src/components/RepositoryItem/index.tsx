import React from 'react';
import * as S from './styles';

type Props = {
  name: string;
  linkToRepo: string;
  fullName: string;
}

const RepositoryItem: React.FC = ({name, linkToRepo, fullName}:Props) => {
  return(
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>{fullName}</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">sergiofdf/busca-repo-Github-React</S.WrapperLink>
    </S.Wrapper>
  );
}

export default RepositoryItem;