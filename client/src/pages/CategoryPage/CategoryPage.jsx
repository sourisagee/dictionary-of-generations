import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../shared/lib/axiosInstance';
import WordCard from '../../components/WordCard';  // ← импортировать WordCard

export default function CategoryPage({ user }) {
  const { category } = useParams();
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function getCategoryWords() {
      const response = await axiosInstance.get(`/words/category/${category}`);
      console.log('Response data:', response.data);

      setWords(response.data.data);
    }

    getCategoryWords();
  }, [category]);

  return (
    <Container className="mt-4">
  {/* Добавляем заголовок с названием категории */}
  <div className="mb-4 text-center">
    <h2 className="text-capitalize">
      {category === 'zoomers' ? 'Слова зумеров' : 
       category === 'millennials' ? 'Слова миллениалов' : 
       category === 'boomers' ? 'Слова бумеров' : 
       `Категория: ${category}`}
    </h2>
    <p className="text-muted">
      {words.length} {words.length === 1 ? 'слово' : words.length < 5 ? 'слова' : 'слов'}
    </p>
  </div>

  <Row className="justify-content-center">
    {words.map((wordCard) => (
      <Col key={wordCard.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
        <WordCard wordCard={wordCard} user={user} />
      </Col>
    ))}
  </Row>
</Container>
  
  );
}
