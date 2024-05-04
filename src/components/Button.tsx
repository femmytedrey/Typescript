import { Name } from "./Person.types";

type ButtonProps = {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  names: Name[];
};
export const Button = (props: ButtonProps) => {
  return <div>
    <button onClick={(event) => props.handleClick(event, 1)}>{props.label}</button>
    <p>{props.names?.map((name) => {
        return (
            <div key={name.fname}>
                {name.fname} {name.lname}
            </div>
        )
    })}</p>
  </div>;
};
