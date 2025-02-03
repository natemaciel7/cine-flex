// pages/Seats.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const SeatsContainer = styled.div`
  padding: 20px;
`;

const SeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 8px;
  justify-items: center;
  margin-bottom: 20px;
`;

const SeatButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #000;
  font-size: 12px;
  cursor: pointer;
  background-color: ${props => {
    if (props.selected) return "#FADBC5";
    if (!props.available) return "#2B2D36";
    return "#9DB899";
  }};
  color: ${props => (!props.available ? "#2B2D36" : "#000")};
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    background-color: #ee897f;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Sarala', sans-serif;
    color: #2B2D36
    f0jt-weight: bold;
  } 
`;

function Seats() {
  const { idSessao } = useParams();
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [buyerName, setBuyerName] = useState('');
  const [buyerCPF, setBuyerCPF] = useState('');

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then(response => setSessionData(response.data))
      .catch(error => console.error(error));
  }, [idSessao]);

  if (!sessionData) return <p>Carregando...</p>;

  function toggleSeat(seat) {
    if (!seat.isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ids: selectedSeats,
      name: buyerName,
      cpf: buyerCPF
    };

    axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', payload)
      .then(() => navigate('/sucesso', { state: { buyerName, buyerCPF, sessionData, selectedSeats } }))
      .catch(error => console.error(error));  

  }
  
  return (
    <SeatsContainer>
      <h2 style={{ fontFamily: 'Sarala, sans-serif', textAlign: 'center' }}>Selecione o(s) assento(s)</h2>
      <SeatsGrid>
        {sessionData.seats.map(seat => (
          <SeatButton
            key={seat.id}
            available={seat.isAvailable}
            selected={selectedSeats.includes(seat.id)}
            onClick={() => toggleSeat(seat)}
          >
            {seat.name}
          </SeatButton>
        ))}
      </SeatsGrid>
      <FormContainer onSubmit={handleSubmit}>
        <label>
          Nome do Comprador(a):
          <input
            placeholder="Digite seu nome..."
            type="text"
            value={buyerName}
            onChange={e => setBuyerName(e.target.value)}
            required
          />
        </label>
        <label>
          CPF do Comprador(a):
          <input
            placeholder="Digite seu CPF..."
            type="number"
            value={buyerCPF}
            onChange={e => setBuyerCPF(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reservar assento(s)</button>
      </FormContainer>
    </SeatsContainer>
  );
}

export default Seats;
