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

const Bain = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./bainlogo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >Consultant - Bain & Company</StyledParagraph>
                    <StyledParagraph>09/18 - 11/20, Chicago IL</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
                I started off my career at Bain, learning a little about a lot. Did a mixture of classic strategy work for Fortune 100 companies and due diligence for private equity transactions. Which included becoming an expert on things like Jet Engines, Golf Carts, Nursing Homes. Perfect for a curious 24 year old.    
            </p>
            

        </div>
    )
}

export default Bain
