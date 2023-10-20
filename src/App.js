import { ThemeProvider } from "styled-components";
import Section from "./commons/Section";
import Header from "./features/Header";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import {
  firstColumnSkills,
  secondColumnSkills,
  thirdColumnSkills,
  skillsetTitle,
  futureSkillsTitle,
  firstColumnFutureSkills,
  secondColumnFutureSkills,
  thirdColumnFutureSkills,
} from "./skillsAndGoals.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Section
          title={skillsetTitle}
          firstColumn={firstColumnSkills}
          secondColumn={secondColumnSkills}
          thirdColumn={thirdColumnSkills}
        />
        <Section
          title={futureSkillsTitle}
          firstColumn={firstColumnFutureSkills}
          secondColumn={secondColumnFutureSkills}
          thirdColumn={thirdColumnFutureSkills}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
