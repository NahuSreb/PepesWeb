
import Input from '../input/Input';
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="reg">
            <form className="reg_form">
                <div>
                    <Input x="Email" />
                    <Input x="Pass" />
                    <button>Login</button>
                    <p>¿Olvidaste tu constraseña?</p>
                    <Link to="/Registro"><p>Registrarse</p></Link>
                    
                </div>
            </form>
        </div>
    );

}

export default Login;