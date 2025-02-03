// pages/Sessions.js
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const SessionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1c1c1e;
  min-height: 100vh;
  padding: 20px;
`;

const DayContainer = styled.div`
background-color: #2B2D36;
  width: 100%;
  max-width: 300px;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  text-align: center;

  `;
  const TimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4E5A65;
  margin: 8px 0;
`; 
const SessionButton = styled.button`
  font-family: "Sarala", sans-serif;
  font-size: 16px;
  color: #EE897F;
  background: none;
  border: 1px solid #EE897F;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #EE897F;
    color: white;
  }
`;
function Sessions() {
  const { idFilme } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
      .then(response => setMovieData(response.data))
      .catch(error => console.error(error));
  }, [idFilme]);

  if (!movieData) return <p>Carregando...</p>;

  return (
    <SessionsContainer>
      <h2 style={{ fontFamily: 'Sarala, sans-serif', textAlign: 'center'}}>Selecione o horário</h2>
      {movieData.days.map(day => (
        <DayContainer key={day.id}>
          <p>{day.weekday}, {day.date}</p>
          <Divider />
          <TimeContainer>
          {day.showtimes.map(showtime => (
            <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
              <SessionButton>{showtime.name}</SessionButton>
            </Link>
          ))}
          </TimeContainer>
        </DayContainer>
      ))}
    </SessionsContainer>
  );
}

export default Sessions;
