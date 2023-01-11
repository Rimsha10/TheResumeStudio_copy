import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useState, useRef,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
/*import db from "../firebase";
import { doc, getDoc ,getDocs,where} from "firebase/firestore";
import './popup.css';
import {firestore} from "../firebase";
import {addDoc,collection,query} from "@firebase/firestore"
import {storage} from '../firebase';
import { ref } from 'firebase/storage';
import { uploadBytesResumable } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';*/
 function Popup() {
 //setBodyColor({color: "#DDF8FE"})
  const [file , setFile] = useState(false)
  // handle file upload
  const fileInputField = useRef(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 // const handleShow = () => setShow(true);
  ////////////////////////////////
  //getDoc(doc(firestore, "/resumes/r1")).then(docSnap =>{
  //  if (docSnap.exists()) {
   //   console.log("Document data:", docSnap.data());
   // } else {
    //  console.log("No such document!");
   // }
   //})
  ////////////////////
  const upload = ()=>{alert("File uploaded successfully")}
  ///////////////////////
 const [image , setImage] = useState('');
/*const upload = ()=>{
  if(image == null){
    return};
  
    const storageRef = ref(storage,'/image/{image.name}');
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on("state_changed" , alert("File uploaded successfully") , alert ,()=>
    {
      // Getting Download Link
      getDownloadURL(storageRef)
      .then((url) => {
        console.log(url)
        const ref=collection(firestore,"resumes");
        let data={user_id:'01',resumeid:'01',resumefile:url};
            try{
              //ref.doc('id').set(data);
                addDoc(ref,data,'r2');
            }
            catch(e){
                console.log(e);
            }
        // Insert url into an <img> tag to "download"
      })
      });
  }*/


    return (
      <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossorigin="anonymous"></script>
            <link rel="stylesheet" href="popup.css"/>
            
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>      
          <p>Upload your resume for later reference.</p>
          <div className="popupcontainer">
      <div className='fileName'>
       <a>{image.name}</a>
      </div>
      <div className="file-inputs">
 
      <input id ="file-upload" type="file" ref={fileInputField} onChange={(e)=>{setImage(e.target.files[0])}}/>
      <div className="file-search-button">

          <label htmlFor='file' className='custom-file-upload' onClick={() => fileInputField.current.click()}>
              <i id='uploadi' className='fa fa-plus'>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </i>
              Upload a File
          </label>
      </div>
      </div>
      </div></Modal.Body>
        <Modal.Footer>
          <Button  class="btn" onClick={handleClose}>
            Close
          </Button>
          <Button  class="btn" onClick={upload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    
      
      </>
  )
}
export default Popup
