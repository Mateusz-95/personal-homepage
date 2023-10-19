import {
  ProfilePhoto,
  Wrapper,
  ContentWrapper,
  SwitchModeDiv,
  LigthModeInfo,
  LightModeButton,
  InfoDiv,
  SmallText,
  Name,
  Text,
  Button,
  ButtonSvg,
  ButtonPara,
} from "./styled";
import photo from "../../images/profile.jpeg";
import buttonSvg from "../../images/Message.svg";

const Header = () => {
  return (
    <Wrapper>
      <ProfilePhoto src={photo} alt="profile photo" />
      <ContentWrapper>
        <SwitchModeDiv>
          <LigthModeInfo>DARK MODE OFF</LigthModeInfo>
          <LightModeButton>CLICK</LightModeButton>
        </SwitchModeDiv>
        <InfoDiv>
          <SmallText>THIS IS</SmallText>
          <Name>MATEUSZ GRYGOROWICZ</Name>
          <Text>
            👨🏻‍💻 I am a passionate Frontend Developer in love with React,
            currently looking for new job opportunities.
          </Text>
          <Button>
            <ButtonSvg src={buttonSvg} alt="hire me svg" />
            <ButtonPara>Hire me</ButtonPara>
          </Button>
        </InfoDiv>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
