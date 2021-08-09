
import { Input } from '../Componentes/Input/Input';
import { Fragment, useState } from "react";
import firebase from '../Config/firebase';
import { Link } from 'react-router-dom';

function Login() {
    const [loading, setLoading] = useState
    const [producto, setProducto] = useState({name:"", price:"", description:""})
    const handleSubmit = (event) =>{

    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange", name, value)
        setForm({ ...form, [name]: value })
    }
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div>
                <h1>Alta de producto</h1>
                <form onSubmit={handleSubmit}>

                </form>
            </div>
        )
    }
}

export default Login;