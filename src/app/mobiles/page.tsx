import React from 'react'

const Mobile = () => {

   const mobileData=[
       {id: 1, name: "Samsung - Galaxy S23 Ultra", price:'1,199', description: 'A productivity beast with a 200MP camera and S Pen support.', Image:'/Samsung.jpg'},
       {id: 2, name: " Apple - iPhone 15 Pro Max", price:'1,199', description: 'A titanium-bodied flagship with a powerful A17 Pro chip and stunning cameras.', Image:'/Apple.jpg'},
       {id: 3, name: " Vivo X100 Pro+", price:'1,199', description: 'A photography-centric flagship with Zeiss optics and premium design.', Image:'/Vivo.jpg'},
       {id: 4, name: "Google - Pixel 8 Pro", price:'999', description: 'An AI-driven smartphone excelling in computational photography.', Image:'/Google.jpg'},
       {id: 5, name: "Xiaomi - Mi 13 Ultra", price:'899', description: 'A Leica-powered camera phone with premium performance.', Image:'/Xiaomi.jpeg'},
       {id: 6, name: "Realme - Realme GT5", price:'599', description: 'A value-packed flagship with lightning-fast 240W charging.', Image:'/Realme.jpg'},
   ]
 return (
   <div>
       <div className='mobiles'>
           {mobileData.map((mobile) =>(
               <div key={mobile.id} className='mobile-card'>
                   <img src={mobile.Image} alt={mobile.name} />
                   <h3>{mobile.name}</h3>
                   <p>{mobile.description}</p>
                   <div className='price'>${mobile.price}</div>
                   <button>Add to Cart</button>
               </div>
           ))}
       </div>
   </div>
 )
}

export default Mobile