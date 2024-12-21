import React ,{useEffect} from 'react'
// import { menu_list } from '../assets/frontend_assets/assets'
import '../assets/css/exploremenudesign.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchcaterardata } from '../services/slices/caterarslice'


export const Exploremenu = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchcaterardata());
      }, [dispatch]);

    const showdish = (caterarName) => {
        console.log(caterarName)
        dispatch(showdish(caterarName))
    }
    
    const state = useSelector((state) => state)
    console.log(state.caterardata.data, 'caterar')

    if (state.caterardata.isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>
        );
    }
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Kitchens</h1>
            <p className='explore-menu-text'>Choose your favourite Kitchens from the Menu.</p>
            <div className="explore-menu-list">
                {state.caterardata.data?.data && state.caterardata.data?.data?.map((item, index) => {
                    return (
                        <div
                            onClick={() => showdish(item.caterarName)}
                            key={index} className='explore-menu-list-item'>
                            <div className="rounded-full h-[70px] w-[70px] bg-slate-600">
                                {/* <img className={category === item.caterarLogo ? "active" : ""} src={item.caterarLogo} alt="" /> */}
                            </div>
                            <p className=''>{item.caterarName}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
