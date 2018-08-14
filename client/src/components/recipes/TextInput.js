import React from 'react';

const TextInput = ({label, onChange, value}) => {
    return(
        <div className="form-group row">
            <div className="col-sm-4">
                <label>{label}: </label>
            </div>
            <div className="col-sm">
                <input type="text" value={value} onChange={onChange}/>
            </div>
        </div>
    )
}

export default TextInput;