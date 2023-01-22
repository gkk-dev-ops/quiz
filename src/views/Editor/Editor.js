import React from 'react'
import Navbar from '../../components/Navbar/Navbar';

function Editor() {
    return (
        <>
            <Navbar/>
            <div className="editor-wrapper">
                <h2>Fix me</h2>
                <p>If answers or questions changed, you can send fixed version here. Additional questions are also welcomed.</p>
            </div>
        </>
    )
}

export default Editor