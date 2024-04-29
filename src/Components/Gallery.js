import React, { useState } from 'react'
import './Gallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import pic_9 from '../assets/pictures/pic_9.jpeg'
import pic_10 from '../assets/pictures/pic_10.jpeg'
import pic_11 from '../assets/pictures/pic_11.jpeg'
import pic_12 from '../assets/pictures/pic_12.jpeg'
import pic_13 from '../assets/pictures/pic_13.jpeg'
import pic_14 from '../assets/pictures/pic_14.jpeg'
import pic_15 from '../assets/pictures/pic_15.jpeg'
import pic_18 from '../assets/pictures/pic_18.jpeg'

import pic_20 from '../assets/pictures/pic_20.jpeg'





function Gallery() {
  const [enlargedImg, setEnlargedImg] = useState(null);

    const itemData = [
      {
        img: pic_9,
        title: 'Image Title 2',
        author: 'Author 2',
        cols: 1, // Specify the number of columns for this image
  rows: 1,
      },
             {
          img: pic_10,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 2, // Specify the number of columns for this image
    rows: 2,
        },        
       
        {
          img: pic_11,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: pic_12,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: pic_13,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: pic_14,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: pic_15,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 2,
        },
    
        {
          img: pic_18,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 2,
        },
       
        {
          img: pic_20,
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 2,
        },
        // Add more items as needed
      ]; // array of the images finish here


      const handleImageClick = (imgSrc) => {
        setEnlargedImg(imgSrc);
      };
    
      const handleCloseEnlargedImg = () => {
        setEnlargedImg(null);
      };







  return (
    <div className='gallery'>
        <h1>Gallery</h1>
        <div className="gallery__images">
            <ImageList variant="quilted" rowHeight={150} cols={4}>
                {itemData.map((item) => (
                     <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                     <img src={item.img} alt={item.title} loading="lazy"  onClick={() => handleImageClick(item.img)} />
                   </ImageListItem>
                ))}
            </ImageList>
        </div>
        {enlargedImg && (
        <div className="enlarged__imageOverlay" onClick={handleCloseEnlargedImg}>
          <div className="enlarged__imageContainer">
            <img src={enlargedImg} alt="Enlarged pic" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery