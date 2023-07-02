import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import CatagoriesSection from '../Components/CatagoriesSection'
import AllProductsPage from './AllProductsPage'
import SingleCategorySection from '../Components/SingleCategorySection'
export default function Home() {
  return (
    <>
      <div className="bg-light">
        <HeaderSection />
        {/* <CatagoriesSection/> */}

        <div className=" container mt-4" >
        {/* <div style={{ borderLeft: "2px solid #dc3545", height: "20px" }} className='mt-1 mx-2'></div>           */}
        </div>

        {/* <AllProductsPage/> */}
        {/* <SingleCategorySection /> */}

        <CatagoriesSection/>
        
      </div>
    </>
  )
}
