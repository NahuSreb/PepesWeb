
import { Input } from '../Componentes/Input/Input';
import { useState } from "react";
import firebase from '../Config/firebase';

export const Registro = () => {
    const [form, setForm] = useState({ nombre: "", apellido: "", email: "", telefono: "", password: "" })
    const handleSubmit = async (event) => {
        console.log("handleSubmit", form)
        event.preventDefault()
        try {
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
            console.log("User", responseUser)
            firebase.db.collection("Ususarios")
            const document = await firebase.db.collection("Usuarios")
            .add({
                nombre:form.nombre,
                apellido:form.apellido,
                email:form.email,
                telefono:form.telefono,
                password:form.password,
                id:responseUser.user.uid
            })
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

    /* const [inputs] = useState([
        {
            id: "nombre",
            des: "Nombre"
        },
        {
            id: "apellido",
            des: "Apellido"
        },
        {
            id: "email",
            des: "Email"
        },
        {
            id: "telefono",
            des: "Telefono"
        },
        {
            id: "password",
            des: "Password"
        }
    ]) */
    return (
        <div className="reg">
            <form className="reg_form" onSubmit={handleSubmit}>
                <div className="reg_form_item">
                    <label className="reg_form_label">Nombre
                        <input className="reg_form_input" name="nombre" value={form.nombre} onChange={handleChange}></input>
                    </label>
                </div>
                <div className="reg_form_item">
                    <label className="reg_form_label">Apellido
                        <input className="reg_form_input" name="apellido" value={form.apellido} onChange={handleChange}></input>
                    </label>
                </div>
                <div className="reg_form_item">
                    <label className="reg_form_label">Email
                        <input className="reg_form_input" name="email" value={form.email} onChange={handleChange}></input>
                    </label>
                </div>
                <div className="reg_form_item">
                    <label className="reg_form_label">Telefono
                        <input className="reg_form_input" name="telefono" value={form.telefono} onChange={handleChange}></input>
                    </label>
                </div>
                <div className="reg_form_item">
                    <label className="reg_form_label">Password
                        <input className="reg_form_input" name="password" value={form.password} onChange={handleChange}></input>
                    </label>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );

}

