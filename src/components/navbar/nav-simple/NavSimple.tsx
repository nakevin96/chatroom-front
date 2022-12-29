import styled from 'styled-components';
import { MAIN_COLOR_BASE } from '../../../assets/colors';

const SimpleNav = styled.nav`
  background-color: ${MAIN_COLOR_BASE};
  padding: 0.5rem 1rem;
  border-width: 0;
  border-right-width: 0.25rem;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      rgba(233, 168, 84, 1),
      rgba(20, 20, 21, 1)
    )
    1 100%;
  width: 4rem;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function NavSimple() {
  const tmpString: string = 'This is nav simple';

  return (
    <SimpleNav>
      <p>{tmpString}</p>
    </SimpleNav>
  );
}
