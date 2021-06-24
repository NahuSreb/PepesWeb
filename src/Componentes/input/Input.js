

function Input({input}) {
    const  {des} = input 
    return (
        <div className="reg_form_item">
            <label className="reg_form_label">{des}
                <input
                    className="reg_form_input"
                ></input>
            </label>
        </div>
    );
}

export default Input;