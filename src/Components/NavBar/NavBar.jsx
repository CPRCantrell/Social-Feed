import React, { useState } from 'react';
import "./NavBar.css"

const NavBar = () => {

    const [showSettingMenu, setshowSettingMenu] = useState(false);

    function handleSettingClick(){
        showSettingMenu ? setshowSettingMenu(false):setshowSettingMenu(true)
    }

    return (
        <nav>
            <div className="nav-content">
                <div className="logo">
                    <h1>Social<span className="soft">Feed</span></h1>
                </div>
                <div className='btn-area'>
                    <button className={`${showSettingMenu ? "settings-menu-btn":"settings-btn"}`} onClick={()=>handleSettingClick()}>
                        <div className={`${showSettingMenu ? "to-small":"hidden"}`}>Settings</div>
                        <div className='setting-icon'></div>
                    </button>
                </div>
            </div>
            <div className={`${showSettingMenu ? "settings-menu":"setting-menu-hide"}`}>
                <div className={`${showSettingMenu ? "option":"option-hide"}`}>
                    <label className='option-label'>Bubble-view:</label>
                    <label className='switch'>
                        <input type='checkbox'></input>
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;