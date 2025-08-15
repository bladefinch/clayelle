'use client';

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('no__scroll');
        } else {
            document.body.classList.remove('no__scroll');
        }
    }, [isActive])

    
    const popupRef = useRef(null);

    useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsActive(false);
        }
    }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <>
        <div className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__left">
                        <img onClick={()=>setIsActive(!isActive)} src="/svg/menu_icon_w.svg"/>
                    </div>
                        <Link href="/"><div className="header__mid">Clayelle</div></Link>
                    <div className="header__right">
                        <Link href="/"><img src="/svg/search_icon_w.svg"/></Link>
                        <Link href="/"><img src="/svg/buy_icon_w.svg"/></Link>
                    </div>
                </div>
            </div>
            <div className={`sliderbar ${isActive? 'active' : ''}`}>
                <div ref={popupRef} className='sliderbar__wrap'>
                    <img src='/svg/close_icon_w.svg' onClick={()=>setIsActive(false)}/>
                    <Link href="/" onClick={()=>setIsActive(false)}>About us</Link>
                    <Link href="/" onClick={()=>setIsActive(false)}>Store</Link>
                    <Link href="/" onClick={()=>setIsActive(false)}>Artbook</Link>
                    <Link href="/" onClick={()=>setIsActive(false)}>Contact us+</Link>
                </div>
            </div>
            <div className={`overlay ${isActive? 'overlay__active': ''}`}></div>
        </div>
    </>
    
  );
}
