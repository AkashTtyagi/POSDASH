import React, { useState } from 'react';
import "./SubMain.css";

function SubMain({ item }) {

    const [subNav, setSabNav] = useState(false);

    const showSubNav = () => setSabNav(!subNav);

    return (
        <>
            <div className="subMainParent" onClick={item.subNav && showSubNav}>
                <div>
                    <span className="subMainIcon">{item.icon}</span>
                    <span className="subMainHeading">{item.title}</span>
                </div>
                <div>
                    <span className="subMainArrowIcon">{item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}</span>
                </div>
            </div>

            {subNav && item.subNav.map((item, index) => {
                return (
                    <a className="subMainList" to={item.path} key={index}>
                        <span className="subMainIcon">
                            {item.icon}
                        </span>

                        <span className="subMainHeading">
                            {item.title}
                        </span>
                    </a>
                )
            })}
        </>
    )
}

export default SubMain
