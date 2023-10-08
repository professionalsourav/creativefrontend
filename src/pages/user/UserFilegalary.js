import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Menu from '../../components/creator/Menu';
import UserNavbar from '../../components/user/UserNavbar';
import UserMenu from '../../components/user/UserMenu';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import {v4} from "uuid";
import "./Userfilegallary.css";
const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex: 7;

`;
const Wrapper = styled.div`
padding: 22px 96px;

`;
const UserFilegalary = () => {




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


  return (
    <div>
       <Container>
    <UserMenu/>
    <Main>
    <UserNavbar/>
    <Wrapper>


    <div className='galary'>

    <div className='grid'>

{imageUrls.map((url) => {
  return <img className='gimg' key={url} src={url} />;
})}

</div>
</div>

    </Wrapper>
 </Main>
</Container>

    </div>
  )
}

export default UserFilegalary