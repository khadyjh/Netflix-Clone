
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';


function UpdateM({ele , show , handleClose,   titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    gitFav}) {


        const update=async(id)=>{
            let fav1={title:titleInput,
                poster_path:imageInput,
                release_date:ele.release_date,
                overview:ele.overview}

                await axios.put(`http://localhost:3002/updateamovi/${id}`)
                            .then(()=>{
                                 gitFav();
                            }).catch((err)=>{
                                console.log(err);
                            })

        }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edite Title</p>
                        <input value={ele.title}  />
                        <p style={{ "marginTop": "10px" }}>Edit Image</p>
                        <textarea value={ele.poster_path} onChange={(e) => setImageInput(e.target.value)} />
                    </div>
                    {/* <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Opinion" type="text" id="op" />
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => {
                            update(ele.id);
                            handleClose();
                        }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateM;