import React, { ReactNode, ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import { title } from "process";

//conventional props

//{title?:string} the ? makes a param optional

const Heading = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

const HeadingWithContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <h1>{children}</h1>;
};

//React node used for tags
//Returning react element is not necessary because its assumed

//default props

const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type ContainerProps = {
  children: ReactNode;
} & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      <h1>{children}</h1>
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

function App() {
  return (
    <div>
      <Heading title="Hello there" />
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
    </div>
  );
}

export default App;
