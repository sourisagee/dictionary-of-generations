import { useEffect, useState } from 'react';
import WordCard from '../../components/WordCard';
import { axiosInstance } from '../../shared/lib/axiosInstance';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPage() {
  const [wordCards, setWordCards] = useState([]);

  useEffect(() => {
    async function getWordCards() {
      const response = await axiosInstance.get('/words');
      console.log('Response data:', response.data);

      setWordCards(response.data.data);
    }

    getWordCards();
  }, []);

  return (
    <>
      <Container  className="mt-4">
        <Row className="justify-content-center">
          {wordCards.map((wordCard) => {
            return (
              <Col
                key={wordCard.id}
                xs={12}
                sm={6}
                md={4}
                lg={3} 
                className="mb-3"
              >
                <WordCard wordCard={wordCard} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
