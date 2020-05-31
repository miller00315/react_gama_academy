import React, { useState } from 'react';
import axios from 'axios';
import * as style from './styled';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handlerSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => {
        const { data } = res;

        const repositoriesNames = data.map((element) => element.name);

        localStorage.setItem(
          'repositoriesNames',
          JSON.stringify(repositoriesNames)
        );

        setError(false);

        history.push('/repositories');
      })
      .catch((e) => {
        setError(true);
      });
  }

  return (
    <style.HomeContainer>
      <style.Content>
        <style.Input
          className="userInput"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <style.Button type="button" onClick={handlerSearch}>
          Pesquisar
        </style.Button>
      </style.Content>
      {error ? (
        <style.errorMessage>
          Algum erro ocorreu, tente novamente.
        </style.errorMessage>
      ) : (
        false
      )}
    </style.HomeContainer>
  );
}

export default Home;
