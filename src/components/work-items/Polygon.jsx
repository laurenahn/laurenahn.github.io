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

const Polygon = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./polygonlogo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >Snr Dir Games Product - Polygon Labs </StyledParagraph>
                    <StyledParagraph>04/22 - 01/24, Los Angeles CA</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
    I joined Polygon Labs to build out our games business and product offering. Starting from scratch, I created out a <a href="https://drive.google.com/file/d/1uBiVum_NOKAJf2nIxonY46L6iYe4SjsA/view?usp=sharing" target="_blank">games toolkit</a>, prototyped back end tooling & architecture, 
    and shipped two games focused protocols &nbsp;<a href="https://polygon.technology/polygon-cdk" target="_blank">CDK</a> & <a href="https://www.immutable.com/products/immutable-zkevm" target="_blank">IMX zkEVM</a>) that are used by 150+ game studios. Survived numerous crypto meltdowns, macro events, etc., and got to work with some amazing gamedevs.
</p>

        

        </div>
    )
}

export default Polygon
