import React, { FC } from 'react';

// Define a type for the props
interface GreetingProps {
  name: string;  // The 'name' prop should be a string
}

// Use FC to define the functional component type
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
