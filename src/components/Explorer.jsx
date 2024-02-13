import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import PropTypes from "prop-types"
import { Folder, WindowsExplorer } from '@react95/icons';

const StyledItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
    cursor: pointer;
	width: 33.33%;
    gap: 3px;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(3, 1fr);
	flex-wrap: wrap;
`;

function Explorer({ closeExplorer, isMobile, openNotepad }) {
    return (
        <Modal
            icon={<Folder />}
            title="Work"
            closeModal={closeExplorer}
            style={{
                left: isMobile ? '2%' : '15%',
                top: '30%',
                width: isMobile ? '96%' : 400,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
            >
                {/* Work Items  */}
                <FilesWrapper>
                    <StyledItem onClick={() => openNotepad("Spotify")}>
                        {/* You can change this ny replacing the file Item1.png in public folder with any logo image of same size */}
                        <img src="./spotifylogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Spotify</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("WeWork")}>
                        {/* You can change this ny replacing the file Riot.png in public folder with any logo image of same size */}
                        <img src="./weworklogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>WeWork</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Education")}>
                        {/* You can change this ny replacing the file Bain.png in public folder with any logo image of same size */}
                        <img src="./ucberkeleylogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Education</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("lauren ahn")}>
                        {/* You can change this ny replacing the file NASA.png in public folder with any logo image of same size */}
                        <img src="./laurensignature.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Me</StyledSpan>
                    </StyledItem>
                </FilesWrapper>
            </Frame>
        </Modal>
    )
}

Explorer.propTypes = {
    closeExplorer: PropTypes.func,
    isMobile: PropTypes.bool,
    openNotepad: PropTypes.func,

}


export default Explorer


