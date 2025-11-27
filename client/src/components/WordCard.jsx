import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function WordCard({ wordCard }) {
  return (
    <Card style={{ width: '18rem' }} className="h-100 w-100">
      <Card.Body>
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
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
