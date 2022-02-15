import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie({data}){

    const [cardInfo,setCardInfo]=useState({})
    const [show,setShow]=useState(false)

    const handleClose =()=>setShow(false)

    return(
        <>
        <ModalMovie show={show} cardInfo={cardInfo} handleClose={handleClose} />
        <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    
                                    <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt={ele.title} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        {/* <Card.Link className='div-card-link'>
                                            {ele.sourceUrl}
                                        </Card.Link> */}
                                        <div>
                                            <Button className='div-card-button' variant="primary" 
                                            onClick={()=>{
                                                setCardInfo(ele);
                                                setShow(true);
                                            }}
                                          >Add To Favorite</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Movie;