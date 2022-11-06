import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import Products from './Products';
import { Link, useNavigate } from 'react-router-dom';
const ListItem = () => {
    let history = useNavigate();
    const editHandler = (id, name, quality, description, type) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("quality", quality);
        localStorage.setItem("description", description);
        localStorage.setItem("type", type);
    }

    const deleteHandler = (id) => {
        alert("Are you sure for delete? ");
        console.log(id)
        console.log(Products, "PPPPPPPP")
        var index = Products.map((e) => {
            console.log(e.id)
            return e.id
        }).indexOf(id);
        console.log(index);
        Products.splice(index, 1);
        history('/');
    }
    return (
        <>
            <div className='container'>
                <h1 className='text-center'><Badge bg="secondary">Products Table</Badge></h1>
                <Link to='/create' className='gap-2'>
                    <Button size='lg'>Create</Button>
                </Link>
                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Product Name</td>
                            <td>Quality</td>
                            <td>Description</td>
                            <td>Type</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products && Products.length > 0
                                ?
                                Products.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.quality}</td>
                                            <td>{item.description}</td>
                                            <td>{item.type}</td>
                                            <td>
                                                <Link to="/edit">
                                                    <Button onClick={() => editHandler(item.id, item.name, item.quality, item.description, item.type)} className="me-4">Edit</Button>
                                                </Link>
                                                <Button variant="danger" onClick={() => deleteHandler(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <p className='text-center'>No data available</p>
                        }
                    </tbody>
                </Table>
                <br />
            </div>
        </>
    )
}
export default ListItem;
