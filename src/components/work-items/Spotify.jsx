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

const Spotify = () => {
  return (
    <div>
      <TopImageWrapper >
        <StyledImage className='' src='./spotifylogo.png' />
        <StyledTitleSubTitleDiv>
          <StyledParagraph >Content Ops @ Spotify</StyledParagraph>
          <StyledParagraph>06/23 - Present, Los Angeles, CA</StyledParagraph>
        </StyledTitleSubTitleDiv>
      </TopImageWrapper>
      <p>I report to the Director of Content Partnerships and oversee all operations that touch the Content Partnerships team which include cross functional project management, creator programs ideation and execution, Salesforce, and more.</p>
    </div>
  )
}

export default Spotify
