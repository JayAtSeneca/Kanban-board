import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="m-auto mb-3">
      <Container>
        <Navbar.Brand >Kanban Board</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;