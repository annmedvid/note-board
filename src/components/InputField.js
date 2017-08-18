import React from 'react';
import injectProps from '../utils/decorators/injectProps';

class InputField extends React.PureComponent {
    @injectProps
    render({ inputMessage, changeInput, addNote }) {
        return (
            <form className="input-field" onSubmit={addNote}>
                <input
                    type="text"
                    name="inputMessage"
                    value={inputMessage}
                    className="message"
                    placeholder="Note"
                    onChange={e => changeInput(e)}
                />
                <button className="add" onClick={addNote}>pin!</button>
            </form>
        );
    }
}

export default InputField;
