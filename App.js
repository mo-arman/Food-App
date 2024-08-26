import React from "react";
import ReactDOM from "react-dom/client";

// Create nested React Elements
// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       style: {
//         background:"red",
//       },
//       className:"title"
//     },
//     "This is Heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title",
//     },
//     "This is heading1"
//   );

//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
//   );

//   // create root using createRoot
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   // passing react element inside root
//   root.render(container);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Laying The Foundation"
);
console.log(heading);

// JSX is differnet React is Different Without jsx React Work well but JSX makes Life Easier JSX is HTML Like Syntax not HTML and Babel is Transpiled jsx to Pure ReactElement one by one token Read jsx Engine understand ES6 Babel does lots of transpiled
// If JSX Attribute use so write the camelcase like HeadingComponent

const UsingMultipleLine = (
  <div>
  <h1>UsingMultipleLine</h1>
  <h2>So Wrapped </h2>
  </div>

);
console.log(UsingMultipleLine);

// React Component => Functionl Component => write Always Capital Latter and Class Based Component
// Three way to write functional Component The Best way to write Third way it's simple and understand syntax
const Heading = () =>   <h1>Functional Component</h1>;

const Heading1 = () => {
  return <h1>Functional Component 1</h1>
}

const Heading2 = () => {
  return(
    <div>
      <h1>Functional Component 2</h1>
    </div>
  )
}

// Here put the component inside the body and header anywhere put like this

const title = (
  <h1>Simple React Element</h1>
);

const number = 1000009;
const Title =() => {
  return(
    <div>
      {title}
      <h1>{number}</h1>
      <h1>Title</h1>
    </div>
  )
}

const Title1 = () => {
  return(
    <div>
      <Title/>
      <Title></Title>
      {Title()}
      <h1>Three way to put the fuctional component inside the body or anywhere</h1>
    </div>
  )
}

const jsxHeading = <h1 id="heading">Hello JSX</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title1/>);