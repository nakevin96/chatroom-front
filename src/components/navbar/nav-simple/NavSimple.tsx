import styled from 'styled-components';
import { MAIN_COLOR_DARK } from '../../../assets/colors';

const SimpleNav = styled.nav`
  background-color: ${MAIN_COLOR_DARK};
  width: 5rem;
  display: flex;
  flex-direction: column;
`;

export default function NavSimple() {
  const tmpString: string = 'This is nav simple';

  return (
    <SimpleNav>
      <p>{tmpString}</p>
    </SimpleNav>
  );
}
