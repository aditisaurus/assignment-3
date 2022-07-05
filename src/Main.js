import React from 'react'
import './Main.css';
import {Card, Button} from 'react-bootstrap';
import {PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';

function Main({data, setData}) {
  return (
    <div className="main">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <h3 className="name">Name</h3>
        <div className="mail">
        <MailOutlined className="icon"/>
        <p>Mail</p>
        </div>
        <div className="phone">
        <PhoneOutlined className="icon" /> 
        <p>Phone</p>
        </div>
        <div className="web">
        <GlobalOutlined className="icon" /> 
        <p>Web</p>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Main