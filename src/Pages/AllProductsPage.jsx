import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'

export default function AllProductsPage() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(json => setAllProducts(json.data.products))
  }, [])

  // Shuffle the array to get random products
  const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());

  return (
    <div className="container">
      <div className="row">
        {shuffledProducts.map((product, index) => (
          <div className="col-md-3 my-3" key={index}>
            <Link className='text-decoration-none' to={`/products/${product.id}`}>
              <Card>
                <Card.Img src={product.thumbnail} className='object-fit-cover border rounded img-fluid' style={{ height: "180px" }} />

                <span className="position-absolute translate-start badge bg-danger" style={{
                  padding: '5px 10px',
                  marginTop: '10px',
                  marginLeft: '-4px',
                  borderRadius: '4px'
                }}>
                  {product.category.toUpperCase()}
                </span>

                <Card.Body>
                  <div className="brand text-center">
                    <span>Brand:  </span>
                    <span className="fw-semibold">{product.brand}</span>
                  </div>

                  <div className="text-center">
                    {product.title}
                  </div>

                  <div className='text-center' >
                    <span className='text-decoration-line-through me-2 text-secondary'>${product.price}</span>
                    <span className='fw-semibold'>${Math.floor(product.price - product.price * (product.discountPercentage / 100))}
                    </span>
                    <span className='text-danger ms-2'>({product.discountPercentage.toFixed(0)}% off)</span>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
