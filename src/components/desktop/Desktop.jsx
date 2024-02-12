import React, {  useEffect, useState } from 'react'
import Shortcuts from '../Shortcuts';
import Notepad from '../note-pad-content/NotePad';
import Explorer from '../Explorer';


function Desktop() {
    const [explorerOpened, toggleExplorer] = useState(true);
    const [selectedItem, setSelectedItem] = useState("About");
    const [isMobile, setIsMobile] = useState(false)
    const [notepadOpened, toggleNotepad] = useState(false);
      

    const closeExplorer = () => {
        toggleExplorer(false);
    };

    const openExlorer = () => {
        toggleExplorer(true);
    };

    const closeNotepad = () => {
        toggleNotepad(false);
    };

    const openNotepad = (item) => {
        setSelectedItem(item)
        toggleNotepad(true);
    };

    useEffect(() => {
        if(window !== "undefined" && window.innerWidth < 850){
            toggleNotepad(false)
            setIsMobile(true)
        }else{
            toggleNotepad(true)

        }
    }, [])

    return (
        <React.Fragment>
            <Shortcuts openNotepad={openNotepad} openExlorer={openExlorer} isMobile={isMobile}/>
            {
                notepadOpened &&
                <div style={{zIndex:"9999999999"}}>
                    <Notepad closeNotepad={closeNotepad} selectedItem={selectedItem} isMobile={isMobile} />
                </div>
            }
            {
                explorerOpened &&
                <div style={{zIndex: notepadOpened ?"1":"" }}>
                    <Explorer closeExplorer={closeExplorer} selectedItem={selectedItem} openNotepad={openNotepad} isMobile={isMobile} />
                </div>
            }
        </React.Fragment>
    )
}

export default Desktop
