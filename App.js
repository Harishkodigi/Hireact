import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>React form React</h1>;
};

const elem = <h2>Hello harish</h2>;

const HeadingComponent = () => {
  return (
    <div>
      <h1>Am a heading Component My child component below</h1>
      <Title />
      {elem}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
