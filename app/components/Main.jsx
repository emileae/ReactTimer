var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div>Main.jsx</div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;
