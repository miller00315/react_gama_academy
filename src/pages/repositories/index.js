import React, { useEffect, useState } from 'react';
import * as style from './styled';
import { useHistory } from 'react-router-dom';

function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repositoriesNames = JSON.parse(
      localStorage.getItem('repositoriesNames')
    );

    if (!repositoriesNames) {
      history.push('/');
    }

    setRepositories(repositoriesNames);

    localStorage.clear();
  }, []);

  return (
    <style.container>
      <style.title>Repositories</style.title>
      <style.list>
        {repositories
          ? repositories.map((repository) => (
              <style.listItem>Nome repositório: {repository}</style.listItem>
            ))
          : false}
      </style.list>
      <style.LinkHome to="/">Home</style.LinkHome>
    </style.container>
  );
}

export default Repositories;
