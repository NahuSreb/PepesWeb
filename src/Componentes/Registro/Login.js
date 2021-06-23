
import Input from '../input/Input';
function Login() {
    return (
        <div className="reg">
            <form className="reg_form">
                <div>
                    <Input x="Email" />
                    <Input x="Pass" />
                    <button>Login</button>
                    <a>¿Olvidaste tu constraseña?</a>
                    <a>Registrarse</a>
                    
                </div>
            </form>
        </div>
    );

}

export default Login;