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

const StyledMainImage = styled.img`
  max-width: 200px;
  display: block;
  margin: 0 auto;
`

const LaurenAhn = () => {
  return (
    <div>
      <TopImageWrapper >
        <StyledImage className='' src='./laurensignature.png' />
      </TopImageWrapper>
      <p>
        When I’m not working, I’m gardening, pondering ways to preserve and share my Korean heritage, or spending time with loved ones.
      </p>
      <p>Currently, my friend Micah and I are working on Botanical Angels, a free landscaping and gardening service for seniors in the South Bay.</p>
      <p>We’ll link our menu of offerings here soon. If you have a parent or grandparent in or near the South Bay, let us know.</p>
      <p>In the meantime, enjoy this picture of Cassius’ birthday in 2022!</p>
      <div>
        <StyledMainImage src="./cassiusbirthdayparty.JPG"></StyledMainImage>
      </div>
    </div>
  )
}

export default LaurenAhn
