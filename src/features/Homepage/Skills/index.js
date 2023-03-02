import { SkillsList, SkillsListToLern } from "./skillsData";
import { Div, Header, List, Li, Index } from "./styled";
import blueMarker from "./images/blueMarker.svg"

export const Skills = () => (
    <>
    <Div>
        <Header>
            My skillset includes 🛠️
        </Header>
        <List>
            {SkillsList.map(({ id, content }) => (
                <Li key={id}>
                    <Index src={blueMarker} alt=""  />
                    {content}
                </Li>
            ))}
        </List>
    </Div>
    <Div>
        <Header>
            What I want to learn next 🚀
        </Header>
        <List>
            {SkillsListToLern.map(({ id, content }) => (
                <Li key={id}>
                    <Index src={blueMarker} alt=""  />
                    {content}
                </Li>
            ))}
        </List>
    </Div>
    </>
);