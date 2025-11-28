import { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { axiosInstance } from '../../shared/lib/axiosInstance';
import WordCard from '../../components/WordCard';

export default function AccountPage({ user }) {

  
  const [word, setWord] = useState({
    word: '',
    definition: '',
    category: '',
    example: '',
  });

  const submitHandler = async function (event) {
    event.preventDefault();
    try {
      await axiosInstance.post(`/words/${user.id}`, {
        word: word.word,
        definition: word.definition,
        category: word.category,
        example: word.example,
      });
      alert('Карточка успешно добавлена')
    } catch (error) {
      console.error('Ошибка при создании слова:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWord((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Добавить новое слово</h3>
            </Card.Header>

            <Card.Body className="p-4">
              <Form onSubmit={submitHandler}>
                {/* Поле для слова */}
                <Form.Group className="mb-3">
                  <Form.Label>Слово *</Form.Label>
                  <Form.Control
                    type="text"
                    name="word"
                    value={word.word}
                    onChange={handleChange}
                    placeholder="Введите слово или фразу"
                    required
                  />
                </Form.Group>

                {/* Поле для определения */}
                <Form.Group className="mb-3">
                  <Form.Label>Определение *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="definition"
                    value={word.definition}
                    onChange={handleChange}
                    placeholder="Введите определение слова"
                    required
                  />
                </Form.Group>

                {/* Выбор категории */}
                <Form.Group className="mb-3">
                  <Form.Label>Категория *</Form.Label>
                  <Form.Select
                    name="category"
                    value={word.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Выберите категорию</option>
                    <option value="zoomers">🧒 Зумер (Gen Z)</option>
                    <option value="millennials">👨‍💼 Миллениал (Millennial)</option>
                    <option value="boomers">👴 Бумер (Boomer)</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Выберите к какой генерации относится это слово
                  </Form.Text>
                </Form.Group>

                {/* Поле для примера использования */}
                <Form.Group className="mb-4">
                  <Form.Label>Пример использования</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="example"
                    value={word.example}
                    onChange={handleChange}
                    placeholder="Пример использования в предложении (необязательно)"
                  />
                </Form.Group>

                {/* Кнопки */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() =>
                      setWord({
                        word: '',
                        definition: '',
                        category: '',
                        example: '',
                      })
                    }
                  >
                    Очистить
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!word.word || !word.definition || !word.category}
                  >
                    Добавить слово
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

        
          {/* Информация о категориях */}
          <Card className="mt-4">
            <Card.Header>
              <h5 className="mb-0">О категориях</h5>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <strong>🧒 Зумер (Gen Z)</strong> - родились с 1997 по 2012 год
                </li>
                <li className="mb-2">
                  <strong>👨‍💼 Миллениал (Millennial)</strong> - родились с 1981 по 1996 год
                </li>
                <li>
                  <strong>👴 Бумер (Boomer)</strong> - родились с 1946 по 1964 год
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      
    </Container>
  );
}
