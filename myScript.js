// Create a React component as a function
function Hello(props) {
  return <div>Hello, {props.name}!</div>;
}

// Render the component to the root element
ReactDOM.render(
  <Hello name="Copilot" />,
  document.getElementById('root')
);
