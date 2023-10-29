const createElement = React.createElement;
const { useState } = React

const Count = ({count}) => {
  return <p className="label">{count}</p>
}

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <button onClick={decreaseCount} className="button" >-</button>
      <Count count={count} />
      <button onClick={increaseCount} className="button">+</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(createElement(CounterComponent));
