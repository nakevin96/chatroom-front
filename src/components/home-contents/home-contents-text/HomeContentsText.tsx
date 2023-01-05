import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  MAIN_COLOR_BASE,
  TEXT_FIELD_DISABLED_COLOR,
} from '../../../assets/colors';
import { DefaultP } from '../../../assets/styles';

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

const ContentsTextArea = styled.textarea`
  height: 2rem;
  background-color: ${TEXT_FIELD_DISABLED_COLOR};
  padding: 0.6rem 1rem 0.1rem 1rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: white;

  &:focus {
    background-color: #282c34;
  }
`;

export default function HomeContentsText() {
  const [message, setMessage] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const handleResizeHeight = () => {
    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = '0px';
      console.log(textAreaRef.current.scrollHeight);
      textAreaRef.current.style.height = `${
        textAreaRef.current.scrollHeight / 16
      }rem`;
    }
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleMessageChange(event);
    handleResizeHeight();
  };
  return (
    <ContentsTextDiv>
      {/*<ContentsTextArea*/}
      {/*  id="message"*/}
      {/*  name="message"*/}
      {/*  value={message}*/}
      {/*  ref={textAreaRef}*/}
      {/*  rows={1}*/}
      {/*  onChange={handleTextAreaChange}*/}
      {/*  placeholder="메세지 보내기"*/}
      {/*/>*/}
      <div contentEditable suppressContentEditableWarning />
    </ContentsTextDiv>
  );
}
