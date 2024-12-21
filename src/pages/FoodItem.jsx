import React, { useContext , useEffect , useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addItem, fetchdishdata } from '../services/slices/dishslice'

export const FoodItem = () => {

  const [counts, setCounts] = useState(0);
  
  const dispatch = useDispatch();

  const addtocart = (dish,counts) => {
    dish = {
      ...dish,counts
    }
    console.log("product added to cart " ,dish , counts)
    dispatch(addItem(dish))
  }
  
  useEffect(() => {
    dispatch(fetchdishdata());
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log(state.dishdata.data, "dishdata");

  if (state.dishdata.isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
    
      {/* Dynamic Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Array.isArray(state.dishdata.data?.data) &&
          state.dishdata.data?.data?.map((e, index) => (
            <div
              key={index}
              className="flex flex-col h-auto p-2 rounded-md bg-green-600 shadow-lg"
            >

              <div className="h-32 w-full rounded-t-md bg-purple-700
              "></div>

              <div className="p-2 rounded-b-md">
                <p className='text-lg text-white mb-2 p-1 rounded flex gap-3'>
                  { !counts 
                  ? <div className="rounded-full text-center"   onClick={() => setCounts(prev=>prev+1)}><i class="fa-solid fa-plus"></i></div>
                  : <div className='text-lg text-white rounded flex gap-3'> 
                      <div className="rounded-full text-center"   onClick={() => setCounts(prev=>prev+1)}><i class="fa-solid fa-plus"></i></div>
                      <div className="rounded-full text-center text-[20px]">{counts}</div>
                      <div className="rounded-full text-center"   onClick={() => setCounts(prev=>prev-1)}><i class="fa-solid fa-minus"></i></div>          
                    </div>
                  }
                </p>
                <p className="text-sm text-white mb-2 p-1 rounded">
                  DishName: {e.dishName}
                </p>
                <p className="text-sm text-white mb-2 p-1 rounded">
                  Price: ${e.price}
                </p>
                <p className="text-sm text-white p-1 rounded">
                  Time : {e.prepareTime}
                </p>
                <p className="text-sm text-white p-1 rounded">
                  Caterer Name: {e.caterarName}
                </p>
                <button className='btn' onClick={()=>{addtocart(e,counts)}}>add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


// export const FoodItem = () => {
  
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state)
  
//   console.log(state.dishdata.data,"hii")
 
 
//   if(state.dishdata.isLoading){
//     return  <div className="flex justify-center items-center min-h-screen">
//               <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
//             </div>
//   }
//   return(
//     <div>
//       <button className='rounded-lg bg-purple-700' onClick={(e) => dispatch(fetchdishdata())}>Fetch</button>
//       <div className="h-[200px] w-[150px] bg-red-800">

//       </div>
       
       
//       <div className=" bg-yellow-700 border-s-black ] grid grid-cols-4">
//           {Array.isArray(state.dishdata.data?.data) && state.dishdata.data?.data?.map( (e) => 
//             (
//               <div className="h-[200px] w-[200px] bg-green-600 border-s-black gap-[20px]">              
//                 <div className="h-[100px] w-[200px] bg-purple-800"></div>
//                 <div className="h-[100px] w-[200px] bg-red-800 ">
//                     <p className="mb-2 bg-blue-800">DishName: {e.dishName}</p>
//                     <p className="mb-2 bg-blue-800">Price: ${e.price}</p>
//                     <p className="mb-2 bg-blue-800">CaterarId: {e.prepareTime}</p>
//                 </div>
//               </div>
//             ))
//           }    
//       </div>
//   </div>
//   )
// }

// export const FoodItem = ({id,name,price,description,image}) => {

//     const [data, setdata] = useState([])

//     const getdata = async () => {
//       const res = await dishmodelget();
//       // const data = res.json
//       console.log(res.data)
//       setdata(res.data.data)
//     }
  
//     useEffect(() => {
//       getdata();
//     }, [])
    
//     const {cartItems, addToCart,removeFromCart} = useContext(StoreContext)
    
//     return (
//     <div className='food-item'>
//         <div className="food-item-image-container">
//             <img className='food-item-image' src={image} alt="" />
//             {!cartItems[id]
//                 ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className="food-item-counter">
//                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                     <p>{cartItems[id]}</p>
//                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//                 </div>
//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className="food-item-price">${price}</p>
//         </div>
//     </div>
    // <div className='food-item'>
    //     <div className="food-item-image-container">
    //         <img className='food-item-image' src={image} alt="" />
    //         {!cartItems[id]
    //             ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
    //             :<div className="food-item-counter">
    //                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
    //                 <p>{cartItems[id]}</p>
    //                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
    //             </div>
    //         }
    //     </div>
    //     <div className="food-item-info">
    //         <div className="food-item-name-rating">
    //             <p>{name}</p>
    //             <img src={assets.rating_starts} alt="" />
    //         </div>
    //         <p className="food-item-desc">{description}</p>
    //         <p className="food-item-price">${price}</p>
    //     </div>
    // </div>
//   )
// }
