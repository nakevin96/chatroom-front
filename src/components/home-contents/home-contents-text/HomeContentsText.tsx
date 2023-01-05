import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  MAIN_COLOR_BASE,
  TEXT_FIELD_DISABLED_COLOR,
} from '../../../assets/colors';

const ContentsTextDiv = styled.div`
  background-color: ${MAIN_COLOR_BASE};
  padding: 0.5rem 1rem;
  width: 100%;
  height: auto;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 1.5rem 1rem;
`;

const ChatInputDiv = styled.div`
  height: 2.3rem;
  background-color: ${TEXT_FIELD_DISABLED_COLOR};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: white;
  display: flex;
  align-items: center;

  &:focus {
    background-color: #282c34;
  }
`;

const ChatLogSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${MAIN_COLOR_BASE};
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: white;
`;

export default function HomeContentsText() {
  const $contentEditable = useRef<HTMLDivElement | null>(null);
  const [content, _setContent] = useState<string>('');

  const onInput = (event: ChangeEvent<HTMLDivElement>) => {
    _setContent(event.target.innerText);
  };

  const setContent = (newContent: string) => {
    if ($contentEditable.current) {
      $contentEditable.current.innerText = newContent;
      _setContent(newContent);
    }
  };

  const handleResizeChange = () => {
    if ($contentEditable.current) {
      $contentEditable.current.style.height = 'auto';
      $contentEditable.current.style.height = `${
        $contentEditable.current.scrollHeight / 16
      }rem`;
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLDivElement>) => {
    handleResizeChange();
    onInput(event);
  };

  useEffect(() => {
    setContent('');
  }, []);

  return (
    <ContentsTextDiv>
      <ChatLogSection>Chat log</ChatLogSection>
      <ChatInputDiv
        contentEditable
        suppressContentEditableWarning
        placeholder="메세지를 입력해주세요"
        ref={$contentEditable}
        onInput={handleInputChange}
      />
    </ContentsTextDiv>
  );
}
