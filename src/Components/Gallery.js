import React from 'react'
import './Gallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';


function Gallery() {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
          title: 'Image Title 1',
          author: 'Author 1',
          cols: 1, // Specify the number of columns for this image
    rows: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
          title: 'Image Title 2',
          author: 'Author 2',
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },

        {
            img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            title: 'Image Title 2',
            author: 'Author 2',
            cols: 2, // Specify the number of columns for this image
    rows: 2,
          },
          {
            img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            title: 'Image Title 2',
            author: 'Author 2',
            cols: 1, // Specify the number of columns for this image
    rows: 2,
          },
          {
            img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            title: 'Image Title 2',
            author: 'Author 2',
          },
          {
            img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            title: 'Image Title 2',
            author: 'Author 2',
          },
          {
            img: 'https://images.unsplash.com/photo-1713769931183-1537d9a8126b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            title: 'Image Title 2',
            author: 'Author 2',
          },
        // Add more items as needed
      ];
  return (
    <div className='gallery'>
        <h1>Gallery</h1>
        <div className="gallery__images">
        <div className="gallery__images">
            <ImageList variant="quilted" rowHeight={121} cols={4}>
                {itemData.map((item) => (
                     <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                     <img src={item.img} alt={item.title} loading="lazy" />
                   </ImageListItem>
                ))}
            </ImageList>
        </div>
        </div>
    </div>
  )
}

export default Gallery