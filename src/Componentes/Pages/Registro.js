
import Input from '../input/Input';
import {useState } from "react";

function Registro() {
    const [inputs] = useState([
        {
            id:"name",
            des:"Nombre"
        },
        {
            id:"lastname",
            des:"Apellido"
        },
        {
            id:"emailReg",
            des:"Email"
        },
        {
            id:"phone",
            des:"Telefono"
        },
        {
            id:"passReg",
            des:"Password"
        },
        {
            id:"confPassReg",
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