import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    gap: 0.5rem;
`;

export const Input = styled.input<{ background: string; fontColor: string }>`
  width: 15rem;
  background: ${(props) => props.background};
  color: ${(props) => props.fontColor};
  font-size: medium;
  height: 2.5rem;
  border-radius: 0.5rem;
  border-width: 0;
  padding-left: 1rem;
`;

export const Label = styled.span<{fontColor: string}>`
    font-size: medium;
    color: ${(props) => props.fontColor};
`;

export const SubmitWrapper = styled.div`
    padding-top: 2rem;
`

export const Error = styled.span`
    font-size: medium;
    color: red;
    margin-top: 2rem;
`;