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

const Education = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./jhulogo.png' />
                <StyledTitleSubTitleDiv>
                <StyledParagraph>Johns Hopkins University, Baltimore MD</StyledParagraph>
                    <StyledParagraph >B.A.in Economics</StyledParagraph>
                    <StyledParagraph >GPA: 3.78</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
                Studied economics and enough computer science to interest me in technology but dissuade me from being a developer (personal websites notwithstanding). In my free time I did college radio and ran a brewery out of my kitchen.
            </p>
            

        </div>
    )
}

export default Education
