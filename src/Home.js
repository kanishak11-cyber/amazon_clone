import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">

        <img className="home_image" 
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" 
          alt="" 
        />
        
        <div className="home_row">
          <Product
            id="12321341"
            title='2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey'
            price={29.99}
            image="https://m.media-amazon.com/images/I/31jA5LDJdoL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title='Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7 with Heart Rate, BP, Fitness and Sports Tracking (Pink)'
            price={29.99}
            image="https://m.media-amazon.com/images/I/51RIxsmfcIS._AC_SY200_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="76754389"
            title='OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)'
            price={29.99}
            image="https://m.media-amazon.com/images/I/71msWIzlvwS._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="32543543"
            title='Nasher Miles Polyester Protective Luggage Cover Set of 2 (Medium-Large) '
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/31/img21/Luggage/Nov21/BWL/Winter_flip/SBC_2/SBC2_03._CB653411339_.jpg"
            rating={4}
          />
          <Product
            id="12356790"
            title='3M Littmann Classic III Monitoring Stethoscope, Black Tube, 27 inch, 5620'
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title='Samsung The Serif Series 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55LS01TAKXXL (Cloud White) (2020 Model)'
            price={29.99}
            image="https://m.media-amazon.com/images/I/81TykyxGSJL._AC_UY218_.jpg"
            rating={4}
          />

        </div>
      </div>
    </div>
  )
}

export default Home
