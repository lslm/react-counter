'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var createElement = React.createElement;
var _React = React,
    useState = _React.useState;


var Count = function Count(_ref) {
  var count = _ref.count;

  return React.createElement(
    "p",
    { className: "label" },
    count
  );
};

var CounterComponent = function CounterComponent() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var increaseCount = function increaseCount() {
    setCount(count + 1);
  };

  var decreaseCount = function decreaseCount() {
    setCount(count - 1);
  };

  return React.createElement(
    "div",
    { className: "counter" },
    React.createElement(
      "button",
      { onClick: decreaseCount, className: "button" },
      "-"
    ),
    React.createElement(Count, { count: count }),
    React.createElement(
      "button",
      { onClick: increaseCount, className: "button" },
      "+"
    )
  );
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(createElement(CounterComponent));