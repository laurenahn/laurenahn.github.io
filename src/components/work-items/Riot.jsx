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

const Riot = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./riotlogo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >Product & Corp Strat - Riot Games</StyledParagraph>
                    <StyledParagraph>11/2020 - 04/2022, Los Angeles, CA</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
                I got to work on awesome products across the games and entertainment portfolios. Launched Arcane, the #2 TV show for all of Netflix in 2021 (we barely lost to squid game). Distributed content to millions of players through Twitch account linking. Led a skunk works team of ~10 for another product that ultimately died (RIP).
            </p>
            <div>
                
                <StyledVideo src="./arcane.mp4" autoplay muted loop controls></StyledVideo>
            </div>

        </div>
    )
}

export default Riot
