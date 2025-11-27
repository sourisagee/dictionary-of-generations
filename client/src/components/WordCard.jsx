import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { axiosInstance } from '../shared/lib/axiosInstance';

export default function WordCard({ wordCard, user }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function getCardLikes() {
      const response = await axiosInstance.get(`/words/likes/${wordCard.id}`);

      console.log(response);

      setLikes(response.data.data.length || 0);
    }

    getCardLikes();
  }, [wordCard.id]);

  const handleLike = async () => {
    await axiosInstance.post(`/words/likes/${wordCard.id}`);

    const response = await axiosInstance.get(`/words/likes/${wordCard.id}`);

    setLikes(response.data.data.length);
  };

  console.log(user);

  return (
    <Card style={{ width: '18rem' }} className="h-100 w-100">
      <Card.Body className="d-flex flex-column">
        {' '}
        <div className="flex-grow-1">
          {' '}
          <Card.Title>{wordCard.word}</Card.Title>
          <Card.Text>
            <strong>Определение:</strong> {wordCard.definition}
            <br />
            <strong>Категория:</strong>{' '}
            {wordCard.category === 'zoomers'
              ? 'Зумеры'
              : wordCard.category === 'millennials'
              ? 'Миллениалы'
              : 'Бумеры'}
            <br />
            <strong>Пример:</strong> {wordCard.example}
          </Card.Text>
        </div>
        {user && (
          <Button variant="primary" onClick={handleLike} className="mt-3">
            Лайкнуть! <br />
            Уже понравилось: {likes}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
