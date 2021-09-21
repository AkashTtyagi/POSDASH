import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

export const sideBarData = [
    {
        title: 'Dasboards',
        path:'/dasboards',
        icon: <FiIcons.FiBox />,
        iconClosed: <FiIcons.FiCornerRightDown />,
        iconOpened: <FiIcons.FiCornerLeftUp />,
        subNav: [
            {
                title: 'OverView',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            },
            {
                title: 'OverView',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            }

        ]
    },
    {
        title: 'Products',
        path:'/products',
        icon: <FiIcons.FiBox />,
        iconClosed: <FiIcons.FiCornerRightDown />,
        iconOpened: <FiIcons.FiCornerLeftUp />,
        subNav: [
            {
                title: 'List Product',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            },
            {
                title: 'Add Product',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            }
        ]
    },
    {
        title: 'Dasboards',
        path:'/dasboards',
        icon: <FiIcons.FiBox />,
        iconClosed: <FiIcons.FiCornerRightDown />,
        iconOpened: <FiIcons.FiCornerLeftUp />,
        subNav: [
            {
                title: 'OverView',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            },
            {
                title: 'OverView',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            }

        ]
    },
    {
        title: 'Products',
        path:'/products',
        icon: <FiIcons.FiBox />,
        iconClosed: <FiIcons.FiCornerRightDown />,
        iconOpened: <FiIcons.FiCornerLeftUp />,
        subNav: [
            {
                title: 'List Product',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            },
            {
                title: 'Add Product',
                path:'/overview',
                icon: <AiIcons.AiOutlineMinus />
            }
        ]
    }
]