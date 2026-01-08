import Content from "../Contend/Contend";

import { SectionTitle, SectionWrapper } from "./styles";

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Component</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}

export default Section;