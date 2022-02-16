import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './Home.css'
import Movie from '../Movie/Movie';
import MovieList from '../MovieList/MovieList';
import Navbar1 from '../Navbar/Navbar1';
import FavList from '../FavList/FavList';
import {Route, Routes} from 'react-router-dom'

function Home() {
    const [data ,setData]=useState([]);
 

    const getTrinding = async()=>{
        return await axios.get(`http://localhost:3002/trending`)
                           .then(result=>{
                            //    console.log(result.data)
                               return result.data;
                           }).catch((err)=>
                           {
                               console.log(err)
                           })
    }


    useEffect(()=>{
        void(async()=>{
            let data=await getTrinding();
            setData(data)
        })();

    },[])


    return (
        <>
       
        <Routes>
            {/* <Route path='/' exact element={<} /> */}
            <Route path='/fav' exact element={<FavList/>} />


        </Routes>
        
        <MovieList data={data} setData={setData} getTrinding={getTrinding} />
        {/* <Movie data={data} /> */}
                {/* <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    
                                    <Card.Img className='div-card-img' variant="top" src={ele.poster_path} alt={ele.title} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        <Card.Link className='div-card-link'>
                                            {ele.sourceUrl}
                                        </Card.Link>
                                        <div>
                                            <Button className='div-card-button' variant="primary" 
                                          >Add To Favorite</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container> */}
        </>
    )
}

export default Home;