
// import React, { Component } from "react";
// import Slider from "react-slick";
// import { SliceProduct } from "../../assets/Functions/Functions";
// import { Link } from "react-router-dom";
// import { AllProducts } from "../../assets/DemoData/ProductData";


// export default function VerticalSlide() {

//   let sliceData = SliceProduct(0,5);

//     console.log(SliceProduct(0,5))
//     console.log("slicedata", sliceData)

//   const settings = {
//     autoplay: true,
//     speed: 4000,
//     autoplaySpeed: 3000,
//     infinite: true,
//     slidesToShow:1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     beforeChange: function(currentSlide, nextSlide) {
//       // console.log("before change", currentSlide, nextSlide);
//     },
//     afterChange: function(currentSlide) {
//       // console.log("after change", currentSlide);
//     }
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {/* {
//           sliceData.map((pd, i)=>{
//             return(
//              <div key={i}>
//                  <div className='Product card py-3 px-2'>
//                   <Link to={`/Product/${pd.id}`}>
//                     <div className="card-header h-[250px]">
//                         <img src={pd.image} alt={pd.name} />
//                     </div>
//                       <div className="card-body flex flex-col gap-1 p-2">
//                           <h6>{pd.name}</h6>
//                           <p className='font-semibold'>Price: {pd.price}Tk</p>
//                           <p>Total-Sold: {pd.sold}</p>
//                       </div>
//                 </Link>
//               </div>
//              </div>
//             )
//           })
//         }         */}
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//       </Slider>
//     </div>
//   );
// }







import React from "react";
import Slider from "react-slick";
import { SliceProduct } from "../../assets/Functions/Functions";
import { Link } from "react-router-dom";

export default function VerticalSlide(){

const sliceData = SliceProduct(4,8);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          sliceData.map((pd, i)=>{
            return(
              <div key={i}>
                 <div className='Product card py-3 px-2' key={i}>
                   <Link to={`/Product/${pd.id}`}>
                     <div className="card-header h-[250px]">
                          <img src={pd.image} alt={pd.name} />
                      </div>
                        <div className="card-body flex flex-col gap-1 p-2">
                            <h6>{pd.name}</h6>
                             <p className='font-semibold'>Price: {pd.price}Tk</p>
                            <p>Total-Sold: {pd.sold}</p>
                        </div>
                   </Link>
                 </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}


