import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
export default function HeaderSection() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-white">
        
          <div className="container">
            <Carousel>

              <Carousel.Item>
                <Link className='text-decoration-none' to={'http://localhost:5173/products/category/mens-watches'}>                 
                  <img src="Images/banner1.png" alt="First slide" className='img-fluid'/>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link className='text-decoration-none' to={'http://localhost:5173/products/category/mens-shoes'}>                 
                  <img src="Images/banner2.png" alt="second slide" className='img-fluid'/>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link className='text-decoration-none' to={'http://localhost:5173/products/category/mens-shirts'}>                 
                  <img src="Images/banner3.png" alt="third slide" className='img-fluid'/>
                </Link>
              </Carousel.Item>

              {/* <Carousel.Item>
                <Link to={'http://localhost:5173/products/category/womens-bags'}>
                  <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/75091900-27d2-4f63-9021-62b640287f3a.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                    alt="First slide" height={400}
                  />
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <Link to={'http://localhost:5173/products/category/sunglasses'}>
                  <img
                    className="d-block w-100"
                    src="https://media.sunglasshut.com/2021/Landing-page/03_Backtonature/W/D/SNGH_Header.jpg"
                    alt="First slide" height={400}
                  />
                </Link>
              </Carousel.Item> */}

            </Carousel>
          </div>
      
      </div>
    </>
  )
}
