import ReachDOM from 'react-dom';

const App = () => {
  return <div>
    <h1>Hi there!</h1>
  </div>
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);