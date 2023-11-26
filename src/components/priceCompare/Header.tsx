import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ChevronLeft, PriceCompareLogo } from '../../assets/icon';
import { HeadBanner } from '../../assets/image';

const Header = () => {
  return (
    <HeaderContainer>
      <Contents>
        <GoBackContainer to="/ticketList">
          <StyledImg src={ChevronLeft} />
          <GoBackText>돌아가기</GoBackText>
        </GoBackContainer>
        <StyledImg src={PriceCompareLogo} />
      </Contents>
      <BannerContainer>
        <Banner src={HeadBanner} />
        <BannerContents>
          <Title>삿포로</Title>
          <Description>서울 · 삿포로 왕복 항공편</Description>
        </BannerContents>
      </BannerContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding-top: 1rem;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 57.3rem;
`;

const GoBackContainer = styled(Link)`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;
  width: 7.3rem;
`;

const GoBackText = styled.span`
  ${({ theme }) => theme.fonts.caption02}

  color:${({ theme }) => theme.colors.skscanSecondary};
`;

const StyledImg = styled.img``;

const Banner = styled.img`
  position: absolute;
  width: 100%;
  height: 17.3rem;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const BannerContents = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  margin-top: 7.2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.heading01}

  color: ${({ theme }) => theme.colors.skscanWt};
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.caption03}

  color: ${({ theme }) => theme.colors.skscanWt};
`;
