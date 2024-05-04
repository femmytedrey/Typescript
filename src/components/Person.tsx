type PersonProps = {
  name: {
    fname: string
    lname: string
  };
};
export const Person = (props: PersonProps) => {
  return <h3>{props.name.fname} {props.name.lname} i a legend</h3>;
};
