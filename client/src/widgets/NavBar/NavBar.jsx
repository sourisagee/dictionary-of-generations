import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

export default function NavBar({user}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="/" className="fw-bold">Домой</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto d-flex align-items-center gap-3">
        {user ? (
          <Nav.Link 
            as={NavLink} 
            to="/signOut" 
            className="btn btn-outline-secondary px-3 py-2"
            style={{ minWidth: '100px', textAlign: 'center' }}
          >
            Выход
          </Nav.Link>
        ) : (
          <>
            <Nav.Link 
              as={NavLink} 
              to="/signUp" 
              className="btn btn-primary px-3 py-2"
              style={{ minWidth: '120px', textAlign: 'center' }}
            >
              Регистрация
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/signIn" 
              className="btn btn-outline-primary px-3 py-2"
              style={{ minWidth: '100px', textAlign: 'center' }}
            >
              Вход
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="/">Домой</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {
    //                 user
    //                     ?
    //                     <NavLink to='/signOut'>Выход</NavLink>
    //                     :
    //                     <>
    //                         <NavLink to='/signUp'>Регистрация</NavLink>
    //                         <NavLink to='/signIn'>Вход</NavLink>
    //                     </>
    //             }

    //         {/* <Nav.Link href="/signUp">Регистрация</Nav.Link>
    //         <Nav.Link href="/signIn">Вход</Nav.Link> */}
    //       </Nav>
          
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
