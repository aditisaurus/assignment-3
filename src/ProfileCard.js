import React, {useState} from 'react'
import './ProfileCard.css';
import {Card, Row, Col, Modal, Form, Button} from 'react-bootstrap';
import {PhoneOutlined, MailOutlined, GlobalOutlined, HeartOutlined, HeartFilled, EditOutlined, DeleteFilled } from '@ant-design/icons';

function ProfileCard ({username, name, email, phone, website, setData, id, data}) {

  const [show, setShow] = useState(false);

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedWebsite, setUpdatedWebsite] = useState(website);
  const [liked,setLiked] = useState(false);

  const newName = (event) => {
    const v = event.target.value;
    setUpdatedName(v);
}

const newEmail = (event) => {
  const v = event.target.value;
  setUpdatedEmail(v);
}

const newPhone = (event) => {
  const v = event.target.value;
  setUpdatedPhone(v);
}

  const newWebsite = (event) => {
          const v = event.target.value;
          setUpdatedWebsite(v);
  }
  function handleLiked(){
    setLiked(!liked);
  }

     
  const remove = (id) => {
    setData(data.filter((i)=>(i.id !== id)))
   
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profileCard">
        
      <Card className="card" style={{ width: '20.5rem' }}>
      <Card.Img className="img" variant="top" src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}/>
      <Card.Body>
        <h3 className="name">{updatedName}</h3>

        <div className="mail">
        <MailOutlined className="icon"/>
        <p>{updatedEmail}</p>
        </div>
        <div className="phone">
        <PhoneOutlined className="icon" /> 
        <p>{updatedPhone}</p>
        </div>
        <div className="web">
        <GlobalOutlined className="icon" /> 
        <p>{updatedWebsite}</p>
        </div>

        <Row className="card-actions">
        <Col className="heart-icon" onClick={handleLiked}>{liked?<HeartFilled  />:<HeartOutlined/>}</Col>
       <Col className="edit-icon"><EditOutlined onClick={handleShow}/></Col>
        <Col className="delete-icon" onClick={()=>remove(id)}><DeleteFilled /></Col>
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
                value={updatedName}  onChange={(e)=>newName(e)}      
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
                value={updatedEmail}  onChange={(e)=>newEmail(e)}     
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
                value={updatedPhone} onChange={(e)=>newPhone(e)} 
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
                value={updatedWebsite} onChange={(e)=>newWebsite(e)}         
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