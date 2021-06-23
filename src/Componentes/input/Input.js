

function Input(props) {
    return (
        <div className="reg_form_item">
            <label className="reg_form_label">{props.x}
                <input
                    className="reg_form_input"
                ></input>
            </label>
        </div>
    );
}

export default Input;