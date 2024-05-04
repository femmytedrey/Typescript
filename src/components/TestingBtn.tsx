type TestingBtn = {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const TestingBtn = (props: TestingBtn) => {
  return (
    <button onClick={(event) => props.handleClick(event)}>{props.label}</button>
  );
};
