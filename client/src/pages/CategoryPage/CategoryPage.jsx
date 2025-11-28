import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../shared/lib/axiosInstance';
import WordCard from '../../components/WordCard'; // ← импортировать WordCard

export default function CategoryPage({ user, updateLike }) {
  const { category } = useParams();
  const [categoryWordCards, setCategoryWordCards] = useState([]);

  useEffect(() => {
    async function getCategoryWords() {
      try {
        const response = await axiosInstance.get(`/words/category/${category}`);
        console.log('Response data:', response.data);

        setCategoryWordCards(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCategoryWords();
  }, [category]);

  const handleLike = (wordId, change) => {
    updateLike(wordId, change);

    setCategoryWordCards((prev) =>
      prev.map((wordCard) =>
        wordCard.id === wordId ? { ...wordCard, like: wordCard.like + change } : wordCard,
      ),
    );
  };

  const sortedWordCards = [...categoryWordCards].sort((a, b) => b.like - a.like);

  return (
    <Container className="mt-4">
      <div className="mb-4 text-center">
        <h2 className="text-capitalize">
          {category === 'zoomers'
            ? 'Слова зумеров'
            : category === 'millennials'
            ? 'Слова миллениалов'
            : category === 'boomers'
            ? 'Слова бумеров'
            : `Категория: ${category}`}
        </h2>
        <p className="text-muted">
          {categoryWordCards.length}{' '}
          {categoryWordCards.length === 1
            ? 'слово'
            : categoryWordCards.length < 5
            ? 'слова'
            : 'слов'}
        </p>
      </div>

      <Row className="justify-content-center">
        {sortedWordCards.map((wordCard) => (
          <Col key={wordCard.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <WordCard wordCard={wordCard} user={user} updateLike={handleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
