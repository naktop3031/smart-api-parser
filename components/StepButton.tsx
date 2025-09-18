import styled from "@emotion/styled";

type StepButtonProps = {
  isForward: boolean;
  handleClick?: () => void;
};

export const StepButton = ({isForward, handleClick}: StepButtonProps) => {
  return (
    <div className={`flex ${isForward ? "justify-end" : "justify-start"}`}>
      <Button onClick={handleClick}>{isForward ? "👉" : "👈"}</Button>
    </div>
  );
};

const Button = styled.button`
  width: 60px;
  height: 60px;
  transition: 0.5s;
  padding: 12px 18px;
  font-size: 1.5em;
  background-color: var(--dark-color);
  border-radius: 50%;
  &:hover {
    border-radius: 0;
    transition: 0.7s;
    cursor: pointer;
  }
`;
