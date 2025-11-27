import { useState } from 'react';
import { axiosInstance, setAccessToken } from '../../shared/lib/axiosInstance';
import { useNavigate } from 'react-router';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const INITIAL_INPUTS_DATA = {
  name: '',
  email: '',
  password: '',
};

export default function SignUpForm({ setUser }) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState(INITIAL_INPUTS_DATA);
  const onChangeHandler = (event) => {
    setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  function registrationUserHandler(event) {
    event.preventDefault();
    console.log('Submit!');

    axiosInstance
      .post('/auth/signUp', inputs)
      .then((response) => {
        console.log(response.data);
        setUser(response.data.data.user);
        setAccessToken(response.data.data.accessToken);
        navigate('/main');
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg border-0">
            <Card.Body className="p-4">
              <Form onSubmit={registrationUserHandler}>


                <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Создай аккаунт</h2>
                <p className="text-muted">Присоединяйся к нашему сообществу сегодня</p>
              </div>



                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Имя</Form.Label>
                  <Form.Control
                    onChange={onChangeHandler}
                    name="name"
                    type="text"
                    placeholder="Введите имя"
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Почта</Form.Label>
                  <Form.Control
                    onChange={onChangeHandler}
                    name="email"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Пароль</Form.Label>
                  <Form.Control
                    onChange={onChangeHandler}
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    className="py-2"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 fw-semibold"
                  size="lg"
                >
                  Зарегистрироватся
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
