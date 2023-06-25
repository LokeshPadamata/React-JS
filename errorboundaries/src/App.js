import './App.css';
import Counter from './Counter';
import ErrorBoundaries from './ErrorBoundaries';

function App() {
  return (
    <div className="App">
      <ErrorBoundaries>
      <Counter></Counter>
      </ErrorBoundaries>
    </div>
  );
}

export default App;
