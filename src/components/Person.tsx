import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <h3>
      {props.name.fname} {props.name.lname} is a legend
    </h3>
  );
};
