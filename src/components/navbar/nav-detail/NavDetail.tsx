import styled from 'styled-components';
import { MAIN_COLOR_MEDIUM } from '../../../assets/colors';

const DetailNav = styled.nav`
  background-color: ${MAIN_COLOR_MEDIUM};
  display: flex;
  flex-direction: column;
`;

export default function NavDetail() {
  const tmpString: string = 'This is nav detail';

  return (
    <DetailNav>
      <p>{tmpString}</p>
    </DetailNav>
  );
}
