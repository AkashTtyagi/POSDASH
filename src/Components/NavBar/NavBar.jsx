import React from 'react';
import "./NavBar.css"
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
function NavBar() {
    return (
        <div className="navBarParent">
            <div className="searchBar">
                <input className="inputField" type="text" placeholder="Search Here..." />
            </div>

            <div className="navBarDetails">
                <ul className="navBarUl" >
                    <li>
                        <span className="navBarLanguage">
                            <span>En</span>
                        </span>
                    </li>
                    <li>
                        <span className="navBarNewOrder">
                            <a>New Order</a>
                        </span>
                    </li>
                    <li>
                        <span  >
                            <MailOutlineOutlinedIcon className="navBarMessage" />
                        </span>
                    </li>
                    <li>
                        <span >
                           <NotificationsNoneOutlinedIcon className="navBarNotification" />
                        </span>
                    </li>
                    <li>
                        <span className="navBarProfile" >
                            <img src={require(`./surajbhaiya.png`).default}></img>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
