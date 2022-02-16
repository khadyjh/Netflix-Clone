import axios from "axios";
import { useState,useEffect } from "react";
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import './FavList.css'
import UpdateM from "./UpdateM/UpdateM";



function FavList(){
    const [data,setData]=useState([])
    const [show,setShow] = useState(false);
    const [ele,setEle] = useState({});

    const [title,setTitleInput] = useState("");
    const [image,setImageInput] = useState("");
   

    const handleClose =()=> setShow(false);


    const gitFav = async() =>{
        return await axios.get(`http://localhost:3002/getMovies`)
                          .then((result)=>{
                             console.log(result.data);
                             setData(result.data)
                          }).catch((err)=>{
                              console.log(err);
                          })

    }

    useEffect(()=>{
        gitFav()
    },[])


    const deleteFav = async(id)=>{
        await axios.delete(`http://localhost:3002/deleteMovi/${id}`)
                   .then(()=>{
                       console.log('done');
                       gitFav();
                   }).catch((err)=>{
                       console.log(err);
                   })

    }


    return(
        <>
             <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    
                                    <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt={ele.title} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        <Card.Link className='div-card-link'>
                                            {ele.sourceUrl}
                                        </Card.Link>
                                        <div>
                                            <Button className='div-card-button' variant="primary" style={{margin:5}}
                                            onClick={()=>{
                                                setShow(true)
                                            }}
                                          >Update</Button>
                                          
                                           <Button className='div-card-button' variant="primary" style={{margin:5}} 
                                           onClick={()=>{
                                               deleteFav(ele.id);
                                           }}
                                           >Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            {
                 <UpdateM  ele={ele} show={show} handleClose={handleClose}  titleInput={title}
                 setTitleInput= {setTitleInput}
                 imageInput ={image}
                 setImageInput = {image}
                 gitFav={gitFav} />
            }
       
        </>
    )
}

export default FavList;