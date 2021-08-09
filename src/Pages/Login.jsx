
import { Input } from '../Componentes/Input/Input';
import { useState } from "react";
import firebase from '../Config/firebase';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


export const Login = ({ setLoging }) => {
    const [form, setForm] = useState({ email: "", password: "" })
    const handleSubmit = async (event) => {
        console.log("handleSubmit", form)
        event.preventDefault()
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
            alert("Usted se a logeado con exito")
            setLoging(true)
        }
        catch (e) {
            console.log("error", e)
            alert(e.message)
        }

    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange", name, value)
        setForm({ ...form, [name]: value })

    }

    const dataForm = [
        {
            value: "form.email",
            placeHolder: "Email",
            type: "email",
            event: { handleChange },
            text: "No compartas tu emial con nadie",
            label: "Email"
        }
    ]

    return (

        <div className="reg">
            <form className="reg_form" onSubmit={handleSubmit}>
                <div className="reg_form_item">
                    <label className="reg_form_label">Email
                        <input className="reg_form_input" name="email" value={form.email} onChange={handleChange}></input>
                    </label>
                </div>
                <div className="reg_form_item">
                    <label className="reg_form_label">Password
                        <input className="reg_form_input" name="password" value={form.password} onChange={handleChange}></input>
                    </label>
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );

}

