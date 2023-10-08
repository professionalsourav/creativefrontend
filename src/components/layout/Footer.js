import React from 'react'


const Footer = () => {
    const navigateTowebsite = () => {
        window.open("https://centumworld.com/", "_blank");
    };
  return (
    <div className='bg-dark text-light p-3'>
        <h4 className='text-center'>All Right Reserved <b onClick={navigateTowebsite} style={{cursor:"pointer"}}>&copy;Centum World</b></h4>
    </div>
  )
}

export default Footer