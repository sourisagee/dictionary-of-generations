import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar({ onLogout, user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  console.log('Current path:', location.pathname);
  console.log('User:', user);

  // если пользователь не авторизован
  if (!user)
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Домой</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/signUp')}>Регистрация</Nav.Link>
              <Nav.Link onClick={() => navigate('/signIn')}>Вход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  // если мы на корневой странице (и пользователь авторизован)
  if (location.pathname === '/')
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate('/main')}>Главная</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link onClick={() => navigate(`/account/${user.id}`)}>Профиль</Nav.Link>
              <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  // если мы находимся на главной странице
  if (location.pathname.startsWith('/main'))
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Домой</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Категории" id="categories-dropdown">
                <NavDropdown.Item onClick={() => navigate('/category/zoomers')}>
                  Зумеры
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/category/boomers')}>
                  Бумеры
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/category/millennials')}>
                  Миллениалы
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => navigate(`/account/${user.id}`)}>Профиль</Nav.Link>
              <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  // если мы находимся на странице любой категории
  if (location.pathname.startsWith('/category')) {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate('/main')}>Главная</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Категории" id="categories-dropdown">
                <NavDropdown.Item onClick={() => navigate('/category/zoomers')}>
                  Зумеры
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/category/boomers')}>
                  Бумеры
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/category/millennials')}>
                  Миллениалы
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => navigate(`/account/${user.id}`)}>Профиль</Nav.Link>
              <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // если мы находимся на странице профиля
  if (location.pathname.startsWith('/account')) {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate('/main')}>Главная</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
