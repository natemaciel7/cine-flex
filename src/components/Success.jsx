import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #212226;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  background-color: #2B2D36;
  margin-top: 40px;
  border-radius: 8px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoSection = styled.div`

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Sarala', sans-serif;
    font-size: 20px;
    color: #EE897F;
    border-bottom: 1px solid #4E5A65;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: #ffffff;
    margin: 2px 0;
  }
`;

const SuccessTitle = styled.h2`
  font-family: 'Sarala', sans-serif;
  font-size: 24px;
  color: #9DB899;
`;

const BackButton = styled.button`
  background-color: #EE897F;
  color: #2B2D36;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state) {
    navigate('/');
    return null;
  }

  const { buyerName, buyerCPF, sessionData, selectedSeats } = state;

  return (
    <PageContainer>
      <SuccessTitle>Pedido finalizado!</SuccessTitle>
      
      <ContentContainer>
        <InfoSection>
          <h3>Filme e sessão</h3>
          <p>{sessionData.movie.title}</p>
          <p>{sessionData.day.date} às {sessionData.name}</p>
        </InfoSection>
        
        <InfoSection>
          <h3>Ingressos</h3>
          {selectedSeats.map(seatId => {
            const seat = sessionData.seats.find(s => s.id === seatId);
            return <p key={seatId}>Assento {seat ? seat.name : seatId}</p>;
          })}
        </InfoSection>
        
        <InfoSection>
          <h3>Comprador(a)</h3>
          <p>Nome: {buyerName}</p>
          <p>CPF: {buyerCPF}</p>
        </InfoSection>
      </ContentContainer>
      
      <BackButton onClick={() => navigate('/')}>
        Voltar para Tela Inicial
      </BackButton>
    </PageContainer>
  );
}

export default Success;
