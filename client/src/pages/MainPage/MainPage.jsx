import { useEffect, useState } from 'react';
import WordCard from '../../components/WordCard';
import { axiosInstance } from '../../shared/lib/axiosInstance';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPage({ user }) {
  const [wordCards, setWordCards] = useState([]);
  // const [sortedWordCards, setSortedWordCards] = useState([]);
  // // const [hasLiked, setHasLiked] = useState(false)

  useEffect(() => {
    async function loadWordCards() {
      const response = await axiosInstance.get('/words');
      setWordCards(response.data.data);
      // const words = response.data.data;

      // setSortedWordCards(sortedWords);
    }
    // refreshData();
    loadWordCards();
  }, []);

  const updateLike = async (wordId, change) => {
    setWordCards((prev) =>
      prev.map((wordCard) =>
        wordCards.id === wordCards.id
          ? { ...wordCard, like: wordCard.like + change }
          : wordCard,
      ),
    );
  };

  const sortedWordCards = [...wordCards].sort((a, b) => b.like - a.like);

  return (
    <>
      {user && (
        <Container className="mt-4">
          <Row className="justify-content-center">
            {sortedWordCards.map((wordCard) => {
              return (
                <Col key={wordCard.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                  <WordCard wordCard={wordCard} user={user} onLike={updateLike} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
}
