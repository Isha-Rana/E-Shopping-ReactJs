import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';

export default function Searching() {
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
              />
              <InputGroup.Text>
                <Link to={'/'}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} color='#dc3545' className='fs-3' />
                </Link>
              </InputGroup.Text>
            </InputGroup>
          </div>

          <Link to={'/'} className="position-relative">
          <FontAwesomeIcon icon={faCartShopping} color='black' className='fs-3' />
            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              0
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>



        </div>
      </div>
    </>
  )
}
