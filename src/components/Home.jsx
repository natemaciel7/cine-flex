import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px;
`;

const MovieCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;



function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>


      <h2 style={{textAlign: 'center', margin: '20px 0'}}>Em Cartaz</h2>
      <MoviesContainer>
        {movies.map(movie => (
          <Link key={movie.id} to={`/sessoes/${movie.id}`}>
            <MovieCard>
              <img src={movie.posterURL} alt={movie.title} style={{width: '100%'}} />
            </MovieCard>
          </Link>
        ))}
      </MoviesContainer>
    </>
  );
}

export default Home;