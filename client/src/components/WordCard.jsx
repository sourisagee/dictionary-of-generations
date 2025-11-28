import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { axiosInstance } from '../shared/lib/axiosInstance';

export default function WordCard({ wordCard, user, onLike }) {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    async function checkIfLiked() {
      if (!user) return;

      try {
        const response = await axiosInstance.get(`/words/likes/${wordCard.id}`);
        const userLikes = response.data.data.filter((like) => like.user_id === user.id);

        setHasLiked(userLikes.length > 0);
      } catch (error) {
        console.log(error);
      }
    }

    checkIfLiked();
  }, [wordCard.id, user]);

  const handleLike = async () => {
    try {
      await axiosInstance.post(`/words/likes/${wordCard.id}`);

      if (hasLiked) {
        setHasLiked(false);
        onLike(wordCard.id, -1);
      } else {
        setHasLiked(true);
        onLike(wordCard.id, 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button
            variant={hasLiked ? 'outline-primary' : 'primary'}
            onClick={handleLike}
            className="mt-3"
          >
            {hasLiked ? 'Убрать лайк' : 'Лайкнуть!'} <br />
            Уже понравилось: {wordCard.like}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
