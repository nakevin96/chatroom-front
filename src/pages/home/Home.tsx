import styled from 'styled-components';
import { Navbar } from '../../components/navbar';
import { SideInfo } from '../../components/side-info';
import { MAIN_COLOR_LIGHT } from '../../assets/colors';

const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${MAIN_COLOR_LIGHT};
  display: flex;
  flex-direction: row; ;
`;

const ContentsDiv = styled.div`
  width: 100%;
  flex-shrink: 1;
`;

export default function Home() {
  const tmpContent: string = 'this is home contents';
  return (
    <HomeDiv>
      <Navbar />
      <ContentsDiv>{tmpContent}</ContentsDiv>
      <SideInfo />
    </HomeDiv>
  );
}
