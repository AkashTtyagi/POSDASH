import React from 'react'
import "./Products.css"
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
function Products() {

    const tableHeader = [
        "Product",
        "Code",
        "Category",
        "price",
        "Brand Name",
        "Cost",
        "Quantity",
        "Action"
    ];

    const tableData = [
        {
            product: "Organic Cream",
            code: "CREM01",
            Category: "Beauty",
            price: "$25.00",
            brand_name: "Lakme",
            cost: "$10.00",
            quantity: "10.0",
            action: [
                {
                    title: "view",
                    icon: <RemoveRedEyeOutlinedIcon />
                },
                {
                    title: "Edit",
                    icon: <CreateOutlinedIcon />
                },
                {
                    title: "Delete",
                    icon: <DeleteOutlineOutlinedIcon />
                }
            ]
        },
        {
            product: "Organic Cream",
            code: "CREM01",
            Category: "Beauty",
            price: "$25.00",
            brand_name: "Lakme",
            cost: "$10.00",
            quantity: "10.0",
            action: [
                {
                    title: "view",
                    icon: <RemoveRedEyeOutlinedIcon />
                },
                {
                    title: "Edit",
                    icon: <CreateOutlinedIcon />
                },
                {
                    title: "Delete",
                    icon: <DeleteOutlineOutlinedIcon />
                }
            ]
        },
        {
            product: "Organic Cream",
            code: "CREM01",
            Category: "Beauty",
            price: "$25.00",
            brand_name: "Lakme",
            cost: "$10.00",
            quantity: "10.0",
            action: [
                {
                    title: "view",
                    icon: <RemoveRedEyeOutlinedIcon />
                },
                {
                    title: "Edit",
                    icon: <CreateOutlinedIcon />
                },
                {
                    title: "Delete",
                    icon: <DeleteOutlineOutlinedIcon />
                }
            ]
        }
    ];

    return (
        <div className="productListParent">

            <div className="productsDetails">
                <div className="productsList">
                    <div className="productListLeft">
                        <ul>
                            <li>Product List</li>
                            <li>The product list effectively dictates product presentation and provides space</li>
                            <li>to list your products and offering in the most appealing way.</li>
                        </ul>
                    </div>
                    <div className="addProductsButton">
                      <a>Add Products</a>
                    </div>
                </div>
                <div className="">
                    555555
                </div>
            </div>

            <div className="productTableParent">
                <table className="tableParent">
                    <thead>
                        <tr className="tableHeader">
                            {(tableHeader || []).map((item, key) => {
                                return <th>{item}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (tableData || []).map((item, key) => {
                                return <tr>
                                    <td>{item.product}</td>
                                    <td>{item.code}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.cost}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <ul className="tableIcons">
                                            {
                                                (item.action || []).map(
                                                    (actions, key) => {
                                                        return <li>{actions.icon}</li>
                                                    }
                                                )
                                            }
                                        </ul>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Products
