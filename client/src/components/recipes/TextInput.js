import React from 'react';

const TextInput = ({label, onChange, value}) => {

    return(
        <div className="form-group row">
            <div className="col-sm-3">
                <label>{label}: </label>
            </div>
            <div className="col-sm">
                <input type="text" className="form-control" onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default TextInput;