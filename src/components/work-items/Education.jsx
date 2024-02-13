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
        <StyledImage className='' src='./ucberkeleylogo.png' />
        <StyledTitleSubTitleDiv>
          <StyledParagraph>University of California, Berkeley</StyledParagraph>
          <StyledParagraph >B.S. in Society and Environment under the Environmental Science, Policy, and Management Curriculum of the Rausser College of Natural Resources</StyledParagraph>
          <StyledParagraph >GPA: ~3.5</StyledParagraph>
        </StyledTitleSubTitleDiv>
      </TopImageWrapper>
      <p>The collective time and effort between my peers, friends, and/or colleagues at the <a href="https://belonging.berkeley.edu/" target="_blank">Othering & Belonging Institute</a>, <a href="https://www.superb.berkeley.edu/" target="_blank">SUPERB Productions</a>, <a href="https://basicneeds.berkeley.edu/" target="_blank">Basic Needs Center</a> i.e. <a href="https://basicneeds.berkeley.edu/pantry" target="_blank">Food Pantry</a>, Black Earth Farms, and FemSex greatly shaped who I am and what I value most as a human being. </p>
      <p>Key highlights include expanding access to nutrient dense foods to food-insecure students through SNAP registration and pantry pop-ups, receiving grants to expand the work of Black Earth Farms through community-oriented workshops on food systems and polyculture farming (RIP to BEF but do checkout <a href="https://gamsagardens.com/" target="_blank">Gamsa Gardens</a>), and organizing events that reached over 1000 students. </p>
      <p>I also graduated college in 3 years on scholarships. Shoutout to BBCN and the Undergraduate Scholarship Fund + <a href="https://www.linkedin.com/posts/laurenahn_the-toms-gretchens-activity-7027337968235270145-ZqX5/?utm_source=share&utm_medium=member_desktop" target="_blank">Tom & Gretchen</a> to whom I credit for restoring my faith in humanity.</p>
    </div>
  )
}

export default Education
