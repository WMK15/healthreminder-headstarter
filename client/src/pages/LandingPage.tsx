import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { joinWaitingList } from '../store/waitingListSlice';
import { siteInfo } from '../constants/siteInfo';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // dispatch(joinWaitingList(formData));
        console.log(formData)
        handleCloseModal();
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section text-center py-5 animate__animated animate__fadeIn">
                <Container>
                    <h1 className="text-white">Welcome to {siteInfo.title}</h1>
                    <p className="lead text-white">{siteInfo.description}</p>
                    <Button
                        variant="primary"
                        size="lg"
                        className="animate__animated animate__pulse animate__infinite"
                        onClick={() => navigate("/signup")}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="ml-3"
                        onClick={handleShowModal}
                    >
                        Join Waiting List
                    </Button>
                </Container>
            </div>

            {/* Features Section */}
            <Container className="py-5">
                <Row className="text-center">
                    <Col md={4} className="mb-4 animate__animated animate__fadeInUp">
                        <Card className="dark-card">
                            <Card.Body>
                                <Card.Title>Easy to Use</Card.Title>
                                <Card.Text>Our app is user-friendly and easy to navigate.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <Card className="dark-card">
                            <Card.Body>
                                <Card.Title>Reminder Management</Card.Title>
                                <Card.Text>Create, view, and manage your reminders with ease.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <Card className="dark-card">
                            <Card.Body>
                                <Card.Title>Push Notifications</Card.Title>
                                <Card.Text>Get notified about your reminders at the right time.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Footer Section */}
            <footer className="bg-dark text-white py-3 text-center">
                <Container>
                    <p>&copy; {siteInfo.year} {siteInfo.title}. All rights reserved.</p>
                </Container>
            </footer>

            {/* Join Waiting List Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Join Waiting List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LandingPage;
