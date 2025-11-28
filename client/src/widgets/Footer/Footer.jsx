import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Словарь поколений</p>
      </Container>
    </footer>
  );
}
