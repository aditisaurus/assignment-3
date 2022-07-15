import React, {useState} from 'react'
import './ProfileCard.css';
import {Card, Row, Col, Modal, Form, Button} from 'react-bootstrap';
import {PhoneOutlined, MailOutlined, GlobalOutlined, HeartOutlined, EditOutlined, DeleteFilled } from '@ant-design/icons';

function ProfileCard ({username, name, email, phone, website}) {

  const [show, setShow] = useState(false);

  const [updatedUsername, setupdatedUsername] = useState(username);
  const [updatedName, setupdatedName] = useState(name);
  const [updatedEmail, setupdatedEmail] = useState(email);
  const [updatedPhone, setupdatedPhone] = useState(phone);
  const [updatedWebsite, setupdatedWebsite] = useState(website);




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profileCard">
        
      <Card className="card" style={{ width: '20.5rem' }}>
      <Card.Img className="img" variant="top" src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}/>
      <Card.Body>
        <h3 className="name">{name}</h3>

        <div className="mail">
        <MailOutlined className="icon"/>
        <p>{email}</p>
        </div>
        <div className="phone">
        <PhoneOutlined className="icon" /> 
        <p>{phone}</p>
        </div>
        <div className="web">
        <GlobalOutlined className="icon" /> 
        <p>{website}</p>
        </div>

        <Row className="card-actions">
        <Col className="heart-icon"><HeartOutlined /></Col>
        <Col className="edit-icon"><EditOutlined onClick={handleShow}/></Col>
        <Col className="delete-icon"><DeleteFilled /></Col>
      </Row>
       
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Form className="modal-body">
              <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Col><Form.Label className="modal-enquiries">Name:</Form.Label></Col>
              <Col><Form.Control className="modal-input"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Col>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Col><Form.Label className="modal-enquiries">Email:</Form.Label></Col>
              <Col><Form.Control className="modal-input"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Col>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Col><Form.Label className="modal-enquiries">Phone:</Form.Label></Col> 
             <Col> <Form.Control className="modal-input"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Col> 
            </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Col><Form.Label className="modal-enquiries">Website:</Form.Label></Col>
              <Col><Form.Control className="modal-input"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Col>
            </Form.Group>
            </Row>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default ProfileCard