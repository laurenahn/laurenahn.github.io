import styled from 'styled-components'

const TopImageWrapper = styled.div`
   width: full;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   margin: 0px 0px;
   gap: 10px;
   margin-bottom: 10px;
`
const StyledImage = styled.img`
  max-width: 150px;
`
const StyledTitleSubTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px !important;
`
const StyledParagraph = styled.p`
 
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styleda = styled.a`
  padding: 0px !important;
  margin: 0px 0px !important;
  color: black !important;
  text-decoration: none;
  font-weight: 600 !important;
  font-size: 13px;
  cursor: pointer;
`

const NASA = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./nasalogo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >SWE intern - NASA</StyledParagraph>
                    <StyledParagraph>09/17 - 01/18, Houston (Johnson Space Center)</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
  After my junior year of college, I took a leave of absence for an internship at NASA.
  <ul>
    <li><strong>Department:</strong> Mission Planning Group</li>
    <li><strong>Responsibilities:</strong> Writing code for spaceship launch protocols.</li>
    <li><strong>Project:</strong> Boeing Starliner</li>
    <li><strong>Note:</strong> I got to meet a bunch of astronauts.</li>
  </ul>
</p>
          
            

        </div>
    )
}

export default NASA
