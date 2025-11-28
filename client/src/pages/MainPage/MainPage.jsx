import { useEffect, useState } from 'react';
import WordCard from '../../components/WordCard';
import { axiosInstance } from '../../shared/lib/axiosInstance';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form } from 'react-bootstrap';

export default function MainPage({ user }) {
  const [wordCards, setWordCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadWordCards() {
      const response = await axiosInstance.get('/words');
      setWordCards(response.data.data);
    }

    loadWordCards();
  }, []);

  const updateLike = (wordId, change) => {
    setWordCards((prev) =>
      prev.map((wordCard) =>
        wordCard.id === wordId ? { ...wordCard, like: wordCard.like + change } : wordCard,
      ),
    );
  };

  const filteredWordCards = [...wordCards].filter(
    (wordCard) =>
      wordCard.word.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      wordCard.definition.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      wordCard.example.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  const sortedWordCards = [...filteredWordCards].sort((a, b) => b.like - a.like);
  const top10Words = sortedWordCards.slice(0, 10);

  return (
    <>
      {user && (
        <Container className="mt-4">
          <div className="text-center mb-5">
            <h2>Изучайте современный сленг разных поколений</h2>
          </div>

          <Row className="mb-5">
            <Col>
              <Card>
                <Card.Header>
                  <h5 className="mb-0">🔥 Топ-10 слов</h5>
                </Card.Header>

                <Card.Body>
                  <Row>
                    {top10Words.map((word, index) => (
                      <Col key={word.id} xs={6} md={4} lg={2} className="mb-2">
                        <div className="d-flex align-items-center">
                          <span className="badge bg-primary me-2">
                            Место: {index + 1}
                          </span>
                          <div>
                            <strong>{word.word}</strong>
                            <br />
                            <small className="text-muted">{word.like} ❤️</small>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Form.Control
            type="text"
            placeholder="Найти слово, описание или пример использования..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="mb-5"
          />

          <Row className="justify-content-center">
            {sortedWordCards.map((wordCard) => {
              return (
                <Col key={wordCard.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                  <WordCard wordCard={wordCard} user={user} onLike={updateLike} />
                </Col>
              );
            })}
          </Row>

          {sortedWordCards.length === 0 && (
            <div className="text-center mt-5">
              <h5>Пусто...</h5>
              <p className="text-muted">Попробуйте изменить поисковый запрос</p>
            </div>
          )}
        </Container>
      )}
    </>
  );
}
