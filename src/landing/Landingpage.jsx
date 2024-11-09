import React from 'react'
import '../assets/css/landingpagedesign.css'
import sweet from '../assets/images/sweet.jpg'
import sweet1 from '../assets/images/sweet1.jpg'

import { motion, useScroll } from "framer-motion"

function Component() {
    const { scrollYProgress } = useScroll();
    return(
        <motion.div style={{ scaleX: scrollYProgress }} />
    )
}
export const Landingpage = () => {
    return (
        <div className='landingpagejsx'>
            <div className="landingpagefront">
                <div className="landingpagelogo">Kitchenorigin</div>
                <div className="landingpagelogodata">"Find good food from kitchenorigins."</div>
                <div class="landingpage-input-container">
                    <input class="input" name="text" type="text" placeholder="Search the kitchens.." />
                </div>
            </div>
            <div className="landingpageimages">
                <div class="container">
                    <h1>Kitchens</h1>
                    <div class="gallery-wrap">
                        <div class="item item-1"></div>
                        <div class="item item-2"></div>
                        <div class="item item-3"></div>
                        <div class="item item-4"></div>
                        <div class="item item-5"></div>
                    </div>
                </div>
            </div>
            <div className="landingpagecollection">
                <div className="container">
                    <h1>Popular localities in and around City.</h1>
                    <div className="collection-wrap">
                        <button><div className="collection"><div className='collectionplace'>Sarghasan</div><div className='collectioncount'>12 places</div></div></button>
                        <button><div className="collection"><div className='collectionplace'>Kudasasn</div><div className='collectioncount'>15 places</div></div></button>
                        <button><div className="collection"><div className='collectionplace'>Randesan</div><div className='collectioncount'>10 places</div></div></button>
                    </div>
                    <div className="collection-wrap">
                        <button><div className="collection"><div className='collectionplace'>Infocity</div><div className='collectioncount'>20 places</div></div></button>
                        <button><div className="collection"><div className='collectionplace'>Giftcity</div><div className='collectioncount'>25 places</div></div></button>
                        <button><div className="collection"><div className='collectionplace'>Rakshashakti</div><div className='collectioncount'>30 places</div></div></button>
                    </div>
                    <div className="collection-wrap">
                        <button><div className="collection"><div className='collectionplace'>Por</div><div className='collectioncount'>18 places</div></div></button>
                        <button><div className="collection"><div className='collectionplace'>Adalaj</div><div className='collectioncount'>16 places</div></div></button>
                        <button><div className="collection"><div className='collectionplace'>Many more</div><div className='collectioncount'>100+ places</div></div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
