import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 66px;
`;

export const ProfilePhoto = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  align-content: center;
`;

export const SwitchModeDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const LigthModeInfo = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.slateGrey};
  margin-right: 12px;
`;

export const LightModeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.slateGrey};
`;

export const InfoDiv = styled.div`
  max-width: 80%;
`;

export const SmallText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.slateGrey};
`;

export const Name = styled.h1`
  font-weight: 900;
  letter-spacing: 1.9px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const Button = styled.button`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 49px;
  width: 154px;
  align-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBLue};
`;

export const ButtonSvg = styled.img``;

export const ButtonPara = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  font-family: Inter;
  font-size: 20px;
`;
