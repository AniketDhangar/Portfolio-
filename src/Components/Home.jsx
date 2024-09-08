import React, { useState } from 'react';
// import './Home.css';
import { Container, Row, Col,Card,Modal} from "react-bootstrap";
import react from "../assets/react.png";
import java from "../assets/java.png";
import html from "../assets/html-png.png";
// import android from "../assets/android.png";

const Home = () => {
  const [isShow,setisShow] = useState(false)
  const [selectedLang,setselectedLang] = useState(null)
  const doShow = ()=>{
    setisShow(true)
  }
  const doHide =()=>{
    setisShow(false)
  }

  const languages = [
        {
          title : "React",
          description : "Is a JavaScript-based UI development library.it is widely use in web development.",
          logo : react
        },

        {
            title : "Java",
            description : "Java is a popular, multiplatform, object-oriented programming ,computing platform .",
            logo : java
          },
          {
            title : "HTML",
            description : "HTML is the standard markup language for creating Web pages. the structure of a Wed page.",
            logo : html
          },
          {
            title : "Android",
            description : "Android is a mobile operating system (OS) that runs on touchscreen devices like smartphones.",
            logo : android
          },
    ]
  return (
    <div>
      <Container>
        <Row>
          {
            languages.map((lang)=>{
              return(
                <Col lg={3} sm={12}>
                  <Card className='crd-card'>
                    <Card.Img className='crd-img' src={lang.logo}/>
                    <Card.Body>
                      <Card.Title>{lang.title}</Card.Title>
                      <Card.Text>{lang.description}</Card.Text> 
                    </Card.Body>
                    <Card.Footer>
                      <button onClick={()=>{
                        doShow()
                        setselectedLang(lang)
                      }}>Show</button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Modal show={isShow} onHide={doHide}>
        <Modal.Header closeButton>
            <h3>Details</h3>
        </Modal.Header>
        <Modal.Body>
            <h5>{selectedLang?.title}</h5>
            <h5>{selectedLang?.description}</h5>

        </Modal.Body>
        <Modal.Footer>
               <button onClick={doHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
     
}

export default Home