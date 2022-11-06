import React, { useState } from "react";
import { Form, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Products from "./Products";
const Create = () => {
    const [name, setName] = useState("");
    const [quality, setQuality] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    let history = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 9);
        let a = name;
        let b = quality;
        let c = description;
        let d = type;
        Products.push({ id: uniqueId, name: a, quality: b, description: c, type: d });
        history('/')
        alert("Create Data Successfull");
    }
    return (
        <>
            <div className="container">
                <h1 className='text-center'><Badge bg="secondary">Create</Badge></h1>
                <Form>
                    <Form.Group>
                        <Form.Label>ProductName</Form.Label>
                        <Form.Control type="text" name="name" onChange={(e) => { setName(e.target.value) }} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quality</Form.Label>
                        <Form.Control type="text" name="quality" onChange={(e) => { setQuality(e.target.value) }} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e) => { setDescription(e.target.value) }} required />
                    </Form.Group>
                    <Form.Select aria-label="Default select example" onChange={(e) => { setType(e.target.value) }} style={{ marginTop: "20px", }} required>
                        <option>select type</option>
                        <option>Fruits</option>
                        <option>Vegetable</option>
                        <option>Drink</option>
                    </Form.Select>
                    <Button type="submit" onClick={submitHandler} style={{ marginTop: "20px", padding: "10px 40px", font: "18px" }}>Save</Button>
                </Form>
            </div>
        </>
    );
}
export default Create;
