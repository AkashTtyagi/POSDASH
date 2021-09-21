import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import "./SideBar.css";
import { sideBarData } from "../SideBarData/SideBarData";
import SubMain from "../SubMain/SubMain"
function SideBar() {

    const [sidebar, setSidebar] = useState(false);
    const showSliderbar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={"sideBarParent " + ((sidebar) ? "sideBarParentCloseOpen" : "")}>
                <div className="sideBarHearder">
                    <FiArrowDownLeft className="downArrowHeader" />
                    <FiArrowUpRight className="upArrowHeader" />
                    <span className="headingHeader" >POSDash</span>
                    <span ><FiMenu className="iconHeader" onClick={showSliderbar} /></span>
                </div>

                <div className="mainList">
                    {
                        (sideBarData || []).map((item, index) => (
                            <SubMain item={item} key={index} />
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SideBar
