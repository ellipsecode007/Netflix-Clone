import React, {useEffect, useState} from 'react'
import './Nav.css'
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200)
            {
                handleShow(true);
            }
            else
            {
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll",()=>{
                if(window.scrollY>200)
                {
                    handleShow(true);
                }
                else
                {
                    handleShow(false);
                }
            });
        };
    },[]);
  return (
    <div className={`nav ${show && "nav___black"}`}>
        <img
        className='nav___logo'
       src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    //   src = "https://cdn.drawception.com/images/panels/2015/3-30/68pRfNcLqw-1.png"
    // src = "https://banner2.cleanpng.com/20180615/euf/kisspng-logo-brand-line-netflix-logo-5b23d5a1699857.6089777815290751054325.jpg"
        alt='Netflix Logo'>
        </img>
        <img
        className='nav___avatar'
        // src = "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
        src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt = 'Netflix Avatar'
        ></img>
    </div>
  )
}

export default Nav