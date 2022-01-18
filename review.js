'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Review = function (_React$Component) {
    _inherits(Review, _React$Component);

    function Review() {
        _classCallCheck(this, Review);

        return _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).apply(this, arguments));
    }

    _createClass(Review, [{
        key: "processLogin",
        value: function processLogin(form) {
            console.log(form.username);
        }
    }, {
        key: "render",
        value: function render() {
            if (!document.cookie.includes("username")) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement("link", { rel: "stylesheet", href: "bootstrap.min.css" }),
                    React.createElement(
                        "button",
                        { id: "centerbutton", "class": "btn btn-primary btn-lg" },
                        React.createElement(
                            "a",
                            { href: "login.html" },
                            React.createElement(
                                "h3",
                                null,
                                "Log in to leave a review!"
                            )
                        )
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement("link", { rel: "stylesheet", href: "bootstrap.min.css" }),
                    React.createElement(
                        "form",
                        null,
                        React.createElement(
                            "fieldset",
                            null,
                            React.createElement(
                                "div",
                                { "class": "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "title-review", "class": "form-label mt-4" },
                                    "Title of review"
                                ),
                                React.createElement("input", { type: "text", "class": "form-control", id: "username", "aria-describedby": "emailHelp", placeholder: "Enter title" })
                            ),
                            React.createElement(
                                "div",
                                { "class": "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "review-content", "class": "form-label mt-4" },
                                    "Review"
                                ),
                                React.createElement("input", { type: "text", "class": "form-control", placeholder: "Enter review" })
                            ),
                            React.createElement("br", null),
                            React.createElement(
                                "button",
                                { type: "submit", "class": "btn btn-primary dumb-button", onClick: "processLogin(this.form)" },
                                "Submit"
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null)
                        )
                    )
                );
            }
        }
    }]);

    return Review;
}(React.Component);

var domContainer = document.querySelector('#review_');
ReactDOM.render(React.createElement(Review, null), domContainer);