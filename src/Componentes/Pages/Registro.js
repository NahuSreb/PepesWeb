
import Input from '../input/Input';
import {useState } from "react";

function Registro() {
    const [inputs] = useState([
        {
            id:1,
            des:"Nombre"
        },
        {
            id:2,
            des:"Apellido"
        },
        {
            id:3,
            des:"Email"
        },
        {
            id:4,
            des:"Telefono"
        },
        {
            id:5,
            des:"Password"
        },
        {
            id:6,
            des:"Confirmar Password"
        }
    ])
    return (
        <div className="reg">
            <form className="reg_form">
                <div>
                    {inputs.map((input) => (
                        <Input key={inputs.id}
                            input={input}
                             />
                    ))}
                    
                </div>
            </form>
        </div>
    );

}

export default Registro;