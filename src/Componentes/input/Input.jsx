
export const Input = ({ input }) => {

    const { des, id } = input
    return (
        <div className="reg_form_item">
            <label className="reg_form_label">{des}
                <input
                    id={id}
                    className="reg_form_input"
                ></input>
            </label>
        </div>
    );
}

export default Input;