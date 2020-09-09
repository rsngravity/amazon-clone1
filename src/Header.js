import React from 'react'; 
import './Header.css';



function Header() {
    return (
        <div className="Header">
            <img 
                className="Header__logo"
            
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            />

            <div
                classname="header__search">
                <input
                classname="header_searchInput"/>
                {/* Logo */} 
            </div>
        
            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                    Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                    Sign In
                    </span>
                
                </div>

                <div className='header__option'>
                <span className='header__optionLineOne'>
                    Returns
                    </span>
                    <span className='header__optionLineTwo'>
                    & Orders
                    </span>
                
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                    Your
                    </span>
                    <span className='header__optionLineTwo'>
                    Prime
                    </span>
                
                </div>
            
            </div>
        </div>
        
    )
}

export default Header;
