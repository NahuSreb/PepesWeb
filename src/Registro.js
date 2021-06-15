
import Input from './Input';
function Registro() {
    return (
        <div className="reg">
            <form className="reg_form">
                <div>
                    <Input x="Nombre" />
                    <Input x="Apellido" />
                    <Input x="Email" />
                    <Input x="Telefono" />
                    <Input x="Password" />
                    <Input x="Confirmar Password" />
                </div>
            </form>
        </div>
    );

}

export default Registro;