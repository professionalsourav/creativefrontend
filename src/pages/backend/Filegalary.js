import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Menu from '../../components/creator/Menu';
import Navbar from '../../components/creator/Navbar';
import { storage } from '../../firebase';
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import "./Filegalary.css";



const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;


const Filegalary = () => {

const [imageUpload, setImageUpload] = useState(null);

const [imageUrls, setImageUrls] = useState([]);


const imagesListRef = ref(storage, "/files")

const uploadImage = () =>{
if (imageUpload ===null) return;
const imageRef = ref(storage,`files/${imageUpload.name + v4()}`);
uploadBytes(imageRef, imageUpload).then((snapshot) => {
  
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrls((prev) => [...prev, url]);
      alert("sucessfully uploaded");
    });
});
};

useEffect(() => {
  listAll(imagesListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  });
}, []);



  return (<div >
    <Container>
    <Menu/>
    <Main>
    <Navbar/>
    <Wrapper>


<div className='galary'>

      <input type='file'
       onChange={(e) =>{setImageUpload(e.target.files[0]);}}
      
      />
      <button onClick={uploadImage} style={{background:"black", color:"white"}}>Upload Image</button>

      <div className='grid'>

      {imageUrls.map((url) => {
      
        return <img className='gimg' key={url} src={url}  />
        
      })}

     </div>
</div>



    </Wrapper>
 </Main>
</Container>



</div>
  )
}

export default Filegalary