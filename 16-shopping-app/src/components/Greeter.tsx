interface GreeterProps {
  person: string;
}

export const Greeter = ({ person }: GreeterProps): JSX.Element => {
  return <h3>Hello, {person}</h3>;
};
