'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sdlfkorg/git/etherum_projects/coin-card/pages/index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex(props) {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		var _this = (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call(this));

		_this.fetchData = _this.fetchData.bind(_this);
		_this.coinExtra = _this.coinExtra.bind(_this);
		_this.state = { coins: [] };

		return _this;
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var url = 'https://api.coinmarketcap.com/v2/ticker/?limit=20';
			this.fetchData(url).then(function (data) {
				console.log(data.data.data);
				_this2.setState({ coins: data.data });
				console.log(data.data.data['1']);
				console.log('this.state in promise');
				console.log(_this2.state);
			});
			console.log('this.state');
			console.log(this.state);
		}
	}, {
		key: 'fetchData',
		value: function fetchData(url) {
			return _axios2.default.get(url);
		}
	}, {
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}, {
		key: 'coinExtra',
		value: function coinExtra(coin) {
			var extra = _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'archive', __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}), 'Market Cap: ', this.state.coins.data[coin].quotes.USD.market_cap);
			return extra;
		}
	}, {
		key: 'renderCoins',
		value: function renderCoins() {
			if (this.state.coins) {
				var coins = [];

				for (var coin in this.state.coins.data) {
					var psudo_obj = {};
					psudo_obj = this.state.coins.data[coin];
					psudo_obj.header = this.state.coins.data[coin].name;
					psudo_obj.description = '$ ' + psudo_obj.quotes.USD.price;
					psudo_obj.extra = this.coinExtra(coin);

					coins.push(psudo_obj);
				}

				console.log('coins');
				console.log(coins);
				return _react2.default.createElement(_semanticUiReact.Card.Group, { items: coins, __source: {
						fileName: _jsxFileName,
						lineNumber: 69
					}
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, 'Coin Prices'), this.renderCoins()));
		}
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZEV4YW1wbGVDYXJkIiwiYXhpb3MiLCJIZWFkIiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJDYW1wYWlnbkluZGV4IiwicHJvcHMiLCJmZXRjaERhdGEiLCJiaW5kIiwiY29pbkV4dHJhIiwic3RhdGUiLCJjb2lucyIsInVybCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldFN0YXRlIiwiZ2V0IiwiY29pbiIsImV4dHJhIiwicXVvdGVzIiwiVVNEIiwibWFya2V0X2NhcCIsInBzdWRvX29iaiIsImhlYWRlciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicHVzaCIsInJlbmRlckNvaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUSxBQUFNLEFBQVE7Ozs7Ozs7SUFFaEIsQTt3Q0FDTDs7d0JBQUEsQUFBWSxPQUFPO3NDQUFBOzs0SUFFZjs7UUFBQSxBQUFLLFlBQVksTUFBQSxBQUFLLFVBQUwsQUFBZSxLQUFoQyxBQUNBO1FBQUEsQUFBSyxZQUFZLE1BQUEsQUFBSyxVQUFMLEFBQWUsS0FBaEMsQUFDQTtRQUFBLEFBQUssUUFBUSxFQUFDLE9BSkMsQUFJZixBQUFhLEFBQVE7O1NBRXhCOzs7OztzQ0FFbUI7Z0JBQ25COztPQUFJLE1BQUosQUFBVSxBQUNWO1FBQUEsQUFBSyxVQUFMLEFBQWUsS0FBZixBQUFvQixLQUNuQixnQkFBUSxBQUNQO1lBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxLQUFqQixBQUFzQixBQUN0QjtXQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sS0FBdEIsQUFBYyxBQUFhLEFBQzNCO1lBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxLQUFMLEFBQVUsS0FBdEIsQUFBWSxBQUFlLEFBQzNCO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtZQUFBLEFBQVEsSUFBSSxPQUFaLEFBQWlCLEFBQ2pCO0FBUEYsQUFTQTtXQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7V0FBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUVqQjs7Ozs0QkFFVSxBLEtBQUksQUFDZDtVQUFPLGdCQUFBLEFBQU0sSUFBYixBQUFPLEFBQVUsQUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFNTSxBLE1BQUssQUFDZDtPQUFNLHdCQUNKLGNBQUE7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsSUFBQSxrQkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztlQUFYO2lCQURGLEFBQ0U7QUFBQTtPQUNhLHFCQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsS0FBakIsQUFBc0IsTUFBdEIsQUFBNEIsT0FBNUIsQUFBbUMsSUFIcEQsQUFDRSxBQUVzRCxBQUd4RDtVQUFBLEFBQU8sQUFDUDs7OztnQ0FFYSxBQUNiO09BQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxPQUFNLEFBQ25CO1FBQUksUUFBSixBQUFZLEFBRVo7O1NBQUksSUFBSixBQUFRLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUEzQixBQUFpQyxNQUFLLEFBQ3JDO1NBQUksWUFBSixBQUFnQixBQUNoQjtpQkFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsS0FBN0IsQUFBWSxBQUFzQixBQUNsQztlQUFBLEFBQVUsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsS0FBakIsQUFBc0IsTUFBekMsQUFBK0MsQUFDL0M7ZUFBQSxBQUFVLGNBQWMsT0FBTyxVQUFBLEFBQVUsT0FBVixBQUFpQixJQUFoRCxBQUFvRCxBQUNwRDtlQUFBLEFBQVUsUUFBUSxLQUFBLEFBQUssVUFBdkIsQUFBa0IsQUFBZSxBQUVqQzs7V0FBQSxBQUFNLEtBQU4sQUFBVyxBQUNYO0FBRUQ7O1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7eUNBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtnQkFBbkI7a0JBQVAsQUFBTyxBQUVQO0FBRk87S0FBQTtBQUlSOzs7OzJCQUVPLEFBQ1A7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBR0MscUJBTkosQUFDQyxBQUNDLEFBSUUsQUFBSyxBQUlUOzs7OztBQTdFMEIsQSxBQWdGNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NkbGZrb3JnL2dpdC9ldGhlcnVtX3Byb2plY3RzL2NvaW4tY2FyZCJ9