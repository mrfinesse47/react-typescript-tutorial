import React, { ReactNode, ReactElement, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { title } from "process";
import { spawn } from "child_process";

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

//functional props

function TextWithNumber({
  children,
  header,
}: {
  children: (num: number) => ReactNode;
  header?: (num: number) => ReactNode;
}) {
  const [state, setState] = React.useState<number>(1); //state is usually infered but if it is 2 types you can use the tag
  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      {/* header is optional */}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState((state) => state + 1)}>Add</button>
      </div>
    </div>
  );
}

function Components() {
  return (
    <div>
      <Heading title="Hello there" />
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber header={(num: number) => <span>{num}</span>}>
        {(num: number) => <div>Todays number is {num}</div>}
      </TextWithNumber>
      <TextWithNumber>
        {(num: number) => <div>Todays number is {num}</div>}
      </TextWithNumber>
    </div>
  );
}

export default Components;
