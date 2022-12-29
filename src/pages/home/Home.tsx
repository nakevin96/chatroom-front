import styled from 'styled-components';
import { Navbar } from '../../components/navbar';
import { SideInfo } from '../../components/side-info';
import { MAIN_COLOR_BASE } from '../../assets/colors';

const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${MAIN_COLOR_BASE};
  display: flex;
  flex-direction: row; ;
`;

const ContentsDiv = styled.div`
  background-color: ${MAIN_COLOR_BASE};
  padding: 0.5rem 1rem;
  width: 100%;
  height: auto;
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
