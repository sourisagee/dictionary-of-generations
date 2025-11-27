import { Outlet, useLocation } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

export default function HomePage() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="container mt-4">
        <Outlet />
        {isHomePage && (
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong>Кто мы?</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Привет! <strong>Словарь поколений</strong> – это интерактивный словарь
                  сленга и популярных слов разных поколений (зумеров, бумеров,
                  миллениалов).
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>Как мне начать пользоваться приложением?</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Пожалуйста, зарегистрируйтесь или авторизуйтесь для доступа к
                  приложению.
                  <br />
                  <br /> Вам станет доступен этот функционал: <br />
                  <ul>
                    <li>Просмотр всех слов</li>
                    <li>Добавление своих слов</li>
                    <li>Возможность лайкать слова</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        )}
      </main>
    </div>
  );
}
