import React from 'react'
import FeatureComp from './FeatureComp'
import Services from './Services'
import TopCompo from './TopComp'
import TrustedCom from './TrustedCom'

const Home=()=> {
  return (
    <>  <div className='home_page'>
        <TopCompo
            key={1}
            title="ShamiKeeps"
            imgs1="Images/home2.jpg"
            imgs2="Images/home1.jpg"
        />

        <FeatureComp />
        <Services/>

        <TrustedCom/>
        </div>
    </>
    
  )
}

export default Home