import styled from "styled-components";
import listItemDeco from "../../images/listItemDeco.svg";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  padding: 32px;
  margin-top: 63px;
`;

export const Title = styled.h2`
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 0 0 15px 0;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 32px;
`;

export const Column = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  background-image: url(${listItemDeco});
  background-repeat: no-repeat;
  background-position: 0 50%;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.slateGrey};
`;
