'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
		_inherits(NavBar, _React$Component);

		function NavBar() {
				_classCallCheck(this, NavBar);

				return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
		}

		_createClass(NavBar, [{
				key: 'render',
				value: function render() {
						return React.createElement(
								'h1',
								null,
								'test'
						)
						// <div class = "nav-bar">
						// 	<link rel="stylesheet" href="bootstrap.min.css" />
						// 	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
						// 	<div class="container-fluid">
						// 	  <a class="navbar-brand" href="#">CSimplified</a>
						// 	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						// 		<span class="navbar-toggler-icon"></span>
						// 	  </button>

						// 	  <div class="collapse navbar-collapse" id="navbarColor01">
						// 		<ul class="navbar-nav me-auto">
						// 		  <li class="nav-item">
						// 			<a class="nav-link" href="index.html">Home</a>
						// 		  </li>
						// 		  <li class="nav-item">
						// 			<a class="nav-link" href="mission.html">Mission</a>
						// 		  </li>
						// 		  <li class="nav-item">
						// 			<a class="nav-link active" href="getcsimplified.html">Get CSimplified</a>
						// 		  </li>
						// 		  <li class="nav-item">
						// 			<a class="nav-link " href="about.html">Reviews</a>
						// 		  </li>
						// 		  <li class="nav-item dropdown">
						// 			<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
						// 			<div class="dropdown-menu">
						// 			  <a class="dropdown-item" href="socials.html">Our Socials</a>
						// 			  <a class="dropdown-item" href="contactus.html">Contact Us</a>
						// 			</div>
						// 		  </li>
						// 		</ul>
						// 	  </div>
						// 	</div>
						//   </nav>
						// </div>
						;
				}
		}]);

		return NavBar;
}(React.Component);

var domContainer = document.querySelector('#nav-bar');
ReactDOM.render(React.createElement(NavBar, null), domContainer);