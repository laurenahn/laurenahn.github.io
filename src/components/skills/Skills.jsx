import styled from 'styled-components'
import RadarChart from '../RadarChart'

const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
  font-size: 12px;
`

const Skills = () => {
    const interests = ['Skiing', 'MOBAs','Film', 'Backpacking','Cooking (Fermentation)', 'William Gibson Novels, OSS']; // Array of interests

    return (
        <div>
            <RadarChart />
            <div>
                <h5>
                    Interests:
                </h5>
                <Styledh5>{interests.join(', ')}</Styledh5> {/* Join array elements with a comma and space */}
            </div>
        </div>
    );
}
export default Skills
