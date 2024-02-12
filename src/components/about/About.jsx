import styled from 'styled-components'

const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
`

const StyledUl = styled.ul`
  padding: 0px ;
  padding-left: 15px;
  margin-top: 40px;
`
const StyledPara = styled.p`
 margin-top: 20px;
`

const About = () => {
    return (
        <div>
            <h2>
                Lauren Ahn
            </h2>
            <StyledPara>
                I'm a biz ops manager based in Los Angeles with 5+ years in project management, program development, and sales.
            </StyledPara>

            <StyledPara>
                Currently I’m at Spotify managing all ops behind the Managed Partner Program for the Content Partnerships Team. We manage the biggest names in podcasting.
            </StyledPara>
            <StyledPara>
                Previously, I oversaw operations for the largest WeWork in Southern California with clients including Amazon, Teradata, and JP Morgan.
            </StyledPara>
            <StyledPara>
                Funny enough, I studied something completely unrelated to my career in college.
            </StyledPara>
            <StyledPara>
                I graduated with a Bachelor’s of Science in Society & Environment under the Environmental Science, Policy, and Management Curriculum at UC Berkeley. Feel free to email me about this pivot (transferable skills are so important)!
            </StyledPara>
            <StyledPara>
                When I’m away from work, I’m re-grounding myself with Korean culture, community gardening, friendships, family, and most importantly, my beloved emotional support animal, Cassius-Carti.
            </StyledPara>
            <StyledPara>
                If you like my vibe, hit my line:
            </StyledPara>
            <StyledUl >
                <Styledli>
                    <Styledh5>
                    <a href="mailto:willtmatteson@gmail.com" target="_blank" rel="noopener noreferrer">email: laurenahn@berkeley.edu</a>
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>
                    <a href="https://www.linkedin.com/in/laurenahn/" target="_blank" rel="noopener noreferrer">linkedin</a>
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>
                    <a href="https://www.instagram.com/koreanbutch/" target="_blank" rel="noopener noreferrer">@koreanbutch</a> on IG if you want to lurk
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>resume:(still working on it, just email me :))</Styledh5>
                </Styledli>
            </StyledUl>
        </div>
    )
}

export default About