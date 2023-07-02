import React, { useEffect, useState } from 'react'
import { Link, json, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ReactStars from 'react-stars'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CategoryProduct() {

  const { categoryName } = useParams()
  const [CategoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setCategoryProduct(json.data.products))
  }, [categoryName])

  return (
    <>
      <div className="container">
        <div className="my-4 text-center">
          <h1>{categoryName.toUpperCase().replace("-", " ")}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, velit illum provident non necessitatibus quibusdam doloribus sapiente optio saepe, iste iure ullam. Eius ad repellat numquam consectetur laboriosam porro delectus.</p>
        </div>

        <div className="row">
          {CategoryProduct.map((val, key) =>


            <div className="col-md-4 my-3" key={key} >
              <Link className='text-decoration-none' to={`/products/${val.id}`}>
                <Card>
                  <Card.Img varient="top" src={val.thumbnail} className='object-fit-contain border rounded img-fluid' style={{ height: "300px" }} />
                  <Card.Body style={{ height: "260px" }}>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>{val.description}</Card.Text>
                    
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={val.rating}
                      color2={'#ffd700'} />

                    <h5 className='text-danger'>Price: {val.price}$</h5>
                    {/* <Button> <FontAwesomeIcon icon={faCartShopping} /> Add to cart</Button> */}
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}