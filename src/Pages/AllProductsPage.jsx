import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'


export default function AllProductsPage() {

  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(json => setAllProducts(json.data.products))
  }, [])

  const percent = {

  }

  return (
    <>
      <div className="container">
        <div className="row">
          {
            AllProducts.map((val, key) =>

              <div className="col-md-3 my-3  " key={key} >
                <Link className='text-decoration-none' to={`/products/${val.id}`} >
                  <Card >
                    <Card.Img src={val.thumbnail} className='object-fit-cover border rounded img-fluid' style={{ height: "180px" }} />

                    <span className="position-absolute translate-start badge bg-danger" style={{
                      padding: '5px 10px',
                      marginTop: '10px',
                      marginLeft: '-4px',
                      borderRadius: '4px'
                    }}>
                      {val.category.toUpperCase()}
                    </span>


                    <Card.Body >
                      <div className="brand text-center">
                        <span>Brand:  </span>
                        <span className="fw-semibold">{val.brand}</span>
                      </div>

                      <div className="text-center">
                        {val.title}
                      </div>
                      {/* <Card.Text>{val.description}</Card.Text> */}

                      {/* <ReactStars
                        count={5}
                        size={20}
                        edit={false}
                        value={val.rating}
                        color2={'#ffd700'} /> */}

                      <div className='text-center' >
                        <span className='text-decoration-line-through me-2 text-secondary'>${val.price}</span>
                        <span className='fw-semibold'>${Math.floor(val.price - val.price * (val.discountPercentage / 100))}
                        </span>
                        <span className='text-danger ms-2'>({val.discountPercentage.toFixed(0)}% off)</span>
                      </div>


                      {/* <h5 className='text-danger'>Price: {val.price}$</h5> */}
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            )}
        </div>
      </div >
    </>
  )
}
