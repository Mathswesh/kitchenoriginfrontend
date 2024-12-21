import React from 'react'
import '../assets/css/appdownload.css'
import {assets} from '../assets/frontend_assets/assets'
export const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Batter Experience Download <br />KitchenOrigin</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}
