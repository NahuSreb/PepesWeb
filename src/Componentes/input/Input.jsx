import { Form } from "react-bootstrap";
export const Input = ({ dataForm }) => {
    const { value, placeHolder, type, event, text, label } = dataForm
console.log("dataForm", dataForm)
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeHolder} value={value} onChange={event} />
            {text && <Form.Text className="text-muted">
                {text}
            </Form.Text>}
        </Form.Group>
    );
}

export default Input;