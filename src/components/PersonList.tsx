import { Name } from "./Person.types";

type SaxList = {
  names: Name[]
};
export const PersonList = (props: SaxList) => {
  return <div>{props.names.map(name => {
    return(
        <div>
            <h3 key={name.fname}>{name.fname} {name.lname}</h3>
        </div>
    )
  })}</div>;
};
