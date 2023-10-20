import { Wrapper, Title, ColumnsWrapper, ListItem, Column } from "./styled";

const Section = ({ title, firstColumn, secondColumn, thirdColumn }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ColumnsWrapper>
        <Column>
          {firstColumn
            ? firstColumn.map((element, index) => (
                <ListItem key={index}>{element}</ListItem>
              ))
            : []}
        </Column>
        <Column>
          {secondColumn
            ? secondColumn.map((element, index) => (
                <ListItem key={index}>{element}</ListItem>
              ))
            : []}
        </Column>
        <Column>
          {thirdColumn
            ? thirdColumn.map((element, index) => (
                <ListItem key={index}>{element}</ListItem>
              ))
            : []}
        </Column>
      </ColumnsWrapper>
    </Wrapper>
  );
};

export default Section;
