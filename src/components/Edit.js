import React, { useState, useEffect } from "react";
import { Form, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Products from "./Products";
const Edit = () => {
    const [name, setName] = useState("");
    const [quality, setQuality] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [id, setId] = useState("");
    let history = useNavigate();
    var index = Products.map((e) => {
        return e.id
    }).indexOf(id);

    const submitHandler = (e) => {
        e.preventDefault();
        let a = Products[index];
        a.name = name;
        a.description = description;
        a.quality = quality;
        a.type = type;
        history('/')
        alert("Update data successfull");
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setQuality(localStorage.getItem("quality"));
        setDescription(localStorage.getItem("description"));
        setType(localStorage.getItem("type"));
        setId(localStorage.getItem("id"));
    }, [])

    return (
        <>
            <div className='container'>
                <h1 className='text-center'><Badge bg="secondary">Edit</Badge></h1>
                <Form>
                    <Form.Group>
                        <Form.Label>ProductName</Form.Label>
                        <Form.Control type="text" name="name" onChange={(e) => { setName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quality</Form.Label>
                        <Form.Control type="text" name="quality" onChange={(e) => { setQuality(e.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e) => { setDescription(e.target.value) }} />
                    </Form.Group>
                    <Form.Select aria-label="Default select example" onChange={(e) => { setType(e.target.value) }} style={{ marginTop: "20px", }}>
                        <option>select type</option>
                        <option>Fruits</option>
                        <option>Vegetable</option>
                        <option>Drink</option>
                    </Form.Select>
                    <Button type="submit" onClick={submitHandler} style={{ marginTop: "20px", padding: "10px 40px", font: "18px" }}>Update</Button>
                </Form>
            </div>
        </>
    )
}
export default Edit;