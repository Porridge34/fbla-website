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
		key: "render",
		value: function render() {
			return (
				//   <h1>test</h1>
				React.createElement(
					"div",
					{ "class": "nav-bar" },
					React.createElement("link", { rel: "stylesheet", href: "bootstrap.min.css" }),
					React.createElement(
						"nav",
						{ "class": "navbar navbar-expand-lg navbar-dark bg-primary" },
						React.createElement(
							"div",
							{ "class": "container-fluid" },
							React.createElement(
								"a",
								{ "class": "navbar-brand", href: "#" },
								"CSimplified"
							),
							React.createElement(
								"button",
								{ "class": "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarColor01", "aria-controls": "navbarColor01", "aria-expanded": "false", "aria-label": "Toggle navigation" },
								React.createElement("span", { "class": "navbar-toggler-icon" })
							),
							React.createElement(
								"div",
								{ "class": "collapse navbar-collapse", id: "navbarColor01" },
								React.createElement(
									"ul",
									{ "class": "navbar-nav me-auto" },
									React.createElement(
										"li",
										{ "class": "nav-item" },
										React.createElement(
											"a",
											{ "class": "nav-link", href: "index.html" },
											"Home"
										)
									),
									React.createElement(
										"li",
										{ "class": "nav-item" },
										React.createElement(
											"a",
											{ "class": "nav-link", href: "mission.html" },
											"Mission"
										)
									),
									React.createElement(
										"li",
										{ "class": "nav-item" },
										React.createElement(
											"a",
											{ "class": "nav-link", href: "getcsimplified.html" },
											"Get CSimplified"
										)
									),
									React.createElement(
										"li",
										{ "class": "nav-item" },
										React.createElement(
											"a",
											{ "class": "nav-link ", href: "about.html" },
											"Reviews"
										)
									),
									React.createElement(
										"li",
										{ "class": "nav-item dropdown" },
										React.createElement(
											"a",
											{ "class": "nav-link dropdown-toggle", "data-bs-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
											"About"
										),
										React.createElement(
											"div",
											{ "class": "dropdown-menu" },
											React.createElement(
												"a",
												{ "class": "dropdown-item", href: "socials.html" },
												"Our Socials"
											),
											React.createElement(
												"a",
												{ "class": "dropdown-item", href: "contactus.html" },
												"Contact Us"
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return NavBar;
}(React.Component);

var domContainer = document.querySelector('#nav-bar');
ReactDOM.render(React.createElement(NavBar, null), domContainer);