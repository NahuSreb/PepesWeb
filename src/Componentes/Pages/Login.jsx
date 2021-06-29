
import { Input } from '../input/Input';
import { Link } from "react-router-dom";
import { useState } from 'react';
function Login() {
    const [inputs] = useState([
        {
            id: "emailLog",
            des: "Email"
        },
        {
            id: "passLog",
            des: "Password"
        }
    ])
    return (
        <div className="reg">
            <form className="reg_form">
                <div>
                    <div>
                        {inputs.map((input) => (
                            <Input key={inputs.id}
                                input={input}
                            />
                        ))}

                    </div>
                    <button>Login</button>
                    <p>¿Olvidaste tu constraseña?</p>
                    <Link to="/Registro"><p>Registrarse</p></Link>

                </div>
            </form>
        </div>
    );

}

export default Login;