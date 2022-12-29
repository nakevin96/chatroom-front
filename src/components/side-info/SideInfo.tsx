import styled from 'styled-components';
import { MAIN_COLOR_MEDIUM } from '../../assets/colors';

const SideInfoNav = styled.nav`
  background-color: ${MAIN_COLOR_MEDIUM};
  min-width: 15rem;
  display: flex;
  flex-direction: column;
`;

export default function SideInfo() {
  const tmpString: string = 'This is side info';

  return (
    <SideInfoNav>
      <p>{tmpString}</p>
    </SideInfoNav>
  );
}
