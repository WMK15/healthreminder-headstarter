import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { siteInfo } from '../constants/siteInfo';

const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>{siteInfo.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link to="/reminders">
                            <Nav.Link>Reminders</Nav.Link>
                        </Link>
                        <Link to="/create">
                            <Nav.Link>Create Reminder</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
