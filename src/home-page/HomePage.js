import React from 'react';
import injectProps from '../utils/decorators/injectProps';

import InputField from '../components/InputField';
import Cards from '../components/Cards';

class HomePage extends React.PureComponent {
    @injectProps
    render({ notes, error, showWarning, inputMessage, addEditStatus, changeInput, addNote, editNote, deleteNote }) {
        let warning = null;
        if (showWarning) {
            warning = <p>Please make sure the note is not empty and you finished other actions.</p>;
        }
        if (error) {
            warning = <p>Something went wrong...</p>;
        }

        console.log(notes)

        return (
            <div className="home-page-content">
                <h1 className="header">
                    <span>
                        <span className="letter">n</span>
                        <span className="letter o">o</span>
                        <span className="letter">t</span>
                        <span className="letter">e</span>
                        <span className="letter"> </span>
                    </span>
                    <wbr/>
                    <span>
                        <span className="letter">b</span>
                        <span className="letter o">o</span>
                        <span className="letter">a</span>
                        <span className="letter">r</span>
                        <span className="letter">d</span>
                    </span>
                </h1>
                <InputField inputMessage={inputMessage} changeInput={changeInput} addNote={addNote} />
                <div className="warning">
                    {warning}
                </div>
                <Cards notes={notes} addEditStatus={addEditStatus} editNote={editNote} deleteNote={deleteNote} />
            </div>
        );
    }
}

export default HomePage;
