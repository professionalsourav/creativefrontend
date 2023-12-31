import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import AdminCard from './AdminCard';

const Container = styled.div`
  flex: 2;
`;

const AdminRec = ({ tags }) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
          const res = await axios.get(`/api/videos/tags?tags=${tags}`);
          setVideos(res.data);
        };
        fetchVideos();
      }, [tags]);

  return (
    <Container>
    {videos.map((video) => (
      <AdminCard type="sm" key={video._id} video={video} />
    ))}
  </Container>
  )
}

export default AdminRec