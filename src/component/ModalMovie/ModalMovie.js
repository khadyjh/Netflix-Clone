import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import axios from 'axios';


function ModalMovie({show,cardInfo , handleClose }){

    //  console.log(cardInfo);
    const addFav = async () =>{
        let fav={title:cardInfo.title,
            poster_path:cardInfo.poster_path,
            release_date:cardInfo.release_date,
            overview:cardInfo.overview}

            await axios.post(`http://localhost:3002/addMovie`,fav)
                       .then(()=>{
                         console.log('done (:');
                       }).catch((err)=>{
                           console.log(err);
                       })
    }

    return(
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt={cardInfo.title} src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`} style={{width: 461}} />
                    <div style={{margin:10}}>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                    onClick={()=>{
                        addFav();
                        handleClose();
                    }}
                    > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;