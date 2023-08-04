import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, json } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Cart from './Cart';

export default function Searching() {
  const [search, setsearch] = useState("")

  const Handlesearching = () => {
    axios.get(`https://dummyjson.com/products/search?q=${search}`).then(json => console.log(json.data.products))
  }

  return (
    <>
      <div className="bg-light sticky-top  ">
        <div className="container pt-3 d-flex align-items-center ">

          <Link className='text-decoration-none d-flex' to={'/'}>
            <FontAwesomeIcon icon={faBagShopping} color='#dc3545' className='fs-2 pe-1' />
            <h2 className='text-danger '>Bonik</h2>
          </Link>

          <div className="container " >
            <InputGroup size="default" >
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder='Search your preferred items here'
                value={search}
                onChange={(e) => setsearch(e.target.value)}

              />
              <InputGroup.Text>
                <button className='bg-light' style={{ border: 'none' }} onClick={Handlesearching}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} color='#dc3545' className='fs-3' />
                </button>
              </InputGroup.Text>
            </InputGroup>
          </div>

          <Cart/>

        </div>
      </div>
    </>
  )
}
