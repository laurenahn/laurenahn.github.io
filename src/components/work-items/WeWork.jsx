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
const StyledVideo = styled.video`
  padding: 0px !important;
  margin: 0px 0px ;
  max-width: 100%;
  margin-top: 30px;
`
const StyledIframe = styled.iframe`
  width: 100%;
  height: 300px; // Adjust the height as needed
  border: none;
  padding: 0px !important;
  margin: 0px 0px;
`;

const WeWork = () => {
  return (
    <div>
      <TopImageWrapper >
        <StyledImage className='' src='./weworklogo.png' />
        <StyledTitleSubTitleDiv>
          <StyledParagraph >Community Management @ WeWork</StyledParagraph>
          <StyledParagraph>11/2021-06/2023, El Segundo, CA</StyledParagraph>
        </StyledTitleSubTitleDiv>
      </TopImageWrapper>
      <p>
        Probably the most challenging but enriching time in my career.
      </p>
      <p>Pitched and rolled out a new ancillary revenue stream across markets where vacant office spaces across WeWorks were transformed into turnkey bookable event spaces. Managed relationships with enterprise clients e.g. Amazon, Teradata, and JP Morgan and oversaw all operations of three cross functional teams. </p>
      <p>Also hosted a nationally aired Walmart commercial for Black Friday and Christmas 2022. </p>
    </div>
  )
}

export default WeWork
