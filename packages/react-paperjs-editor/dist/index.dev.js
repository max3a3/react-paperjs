'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactPaperJS = require('@psychobolt/react-paperjs');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var PathTool =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PathTool, _React$Component);

  function PathTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PathTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PathTool)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.path = void 0;
    return _this;
  }

  return PathTool;
}(React.Component);

PathTool.defaultProps = {
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onMouseDown: function onMouseDown() {},
  onMouseDrag: function onMouseDrag() {},
  onMouseUp: function onMouseUp() {},
  onPathInit: function onPathInit() {},
  onPathAdd: function onPathAdd() {},
  onSegmentAdd: function onSegmentAdd() {},
  onSegmentRemove: function onSegmentRemove() {}
};

var _class, _class2, _temp;
var Tool = ReactPaperJS.Tool,
    PaperScope = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE = 0; // $FlowFixMe

var FreeformPathTool = PaperScope(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(FreeformPathTool, _PathTool);

  function FreeformPathTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FreeformPathTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FreeformPathTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.button === MOUSE_LEFT_CODE) {
        var path = new paper.Path(pathProps);
        _this.path = path;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.buttons === 1) {
        _this.path.add(toolEvent.point);
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (toolEvent) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          path = _assertThisInitialize.path;

      var _this$props2 = _this.props,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd,
          pathProps = _this$props2.pathProps;

      if (path) {
        onPathAdd(path, pathProps);
        _this.path = null;
      }

      onMouseUp(toolEvent);
    };

    return _this;
  }

  _createClass(FreeformPathTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onMouseDown = _this$props3.onMouseDown,
          onMouseDrag = _this$props3.onMouseDrag,
          onMouseUp = _this$props3.onMouseUp,
          onPathAdd = _this$props3.onPathAdd,
          paper = _this$props3.paper,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onMouseDown", "onMouseDrag", "onMouseUp", "onPathAdd", "paper", "innerRef"]);

      return React.createElement(Tool, _extends({
        ref: innerRef,
        minDistance: 10,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }, rest));
    }
  }]);

  return FreeformPathTool;
}(PathTool), _class2.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black'
  }
}), _temp)) || _class;

var FreeformPathTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(FreeformPathTool, _extends({
    innerRef: ref
  }, props));
});

var Layer = ReactPaperJS.Layer,
    Group = ReactPaperJS.Group,
    Line = ReactPaperJS.Line;

var Grid = function Grid(_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? left + width : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? top + height : _ref$bottom,
      _ref$cellSize = _ref.cellSize,
      cellSize = _ref$cellSize === void 0 ? 50 : _ref$cellSize,
      _ref$strokeColor = _ref.strokeColor,
      strokeColor = _ref$strokeColor === void 0 ? '#D0D0D0' : _ref$strokeColor,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
      innerRef = _ref.innerRef;
  var x = Math.ceil(left / cellSize) * cellSize;
  var y = Math.ceil(top / cellSize) * cellSize;
  var cols = Math.ceil((right - left) / cellSize);
  var rows = Math.ceil((bottom - top) / cellSize);
  var verticalLines = [];
  var horizontalLines = [];

  for (var i = 0; i <= cols; i += 1) {
    var position = x + i * cellSize;
    verticalLines.push(React.createElement(Line, {
      key: i,
      from: [position, top],
      to: [position, bottom],
      strokeColor: strokeColor,
      strokeWidth: strokeWidth
    }));
  }

  for (var _i = 0; _i <= rows; _i += 1) {
    var _position = y + _i * cellSize;

    horizontalLines.push(React.createElement(Line, {
      key: _i,
      from: [left, _position],
      to: [right, _position],
      strokeColor: strokeColor,
      strokeWidth: strokeWidth
    }));
  }

  return React.createElement(Layer, {
    ref: innerRef
  }, React.createElement(Group, null, verticalLines), React.createElement(Group, null, horizontalLines));
};

var Grid_component = React.forwardRef(function (props, ref) {
  return React.createElement(Grid, _extends({
    innerRef: ref
  }, props));
});

var _class$1, _class2$1, _temp$1;
var Tool$1 = ReactPaperJS.Tool,
    PaperScope$1 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$1 = 0; // $FlowFixMe

var LineTool = PaperScope$1(_class$1 = (_temp$1 = _class2$1 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(LineTool, _PathTool);

  function LineTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LineTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LineTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.type === 'touchstart' || toolEvent.event.button === MOUSE_LEFT_CODE$1) {
        var path = new paper.Path(pathProps);
        path.add(toolEvent.point);
        _this.path = path;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          path = _assertThisInitialize.path;

      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.type === 'touchmove' || toolEvent.event.buttons === 1) {
        path.removeSegment(1);
        path.addSegment(toolEvent.point);
        path.selected = true;
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (toolEvent) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd,
          pathProps = _this$props2.pathProps;

      if (path) {
        path.selected = false;
        onPathAdd(path, pathProps);
        _this.path = null;
      }

      onMouseUp(toolEvent);
    };

    return _this;
  }

  _createClass(LineTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onMouseDown = _this$props3.onMouseDown,
          onMouseDrag = _this$props3.onMouseDrag,
          onMouseUp = _this$props3.onMouseUp,
          onPathAdd = _this$props3.onPathAdd,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onMouseDown", "onMouseDrag", "onMouseUp", "onPathAdd", "innerRef"]);

      return React.createElement(Tool$1, _extends({
        ref: innerRef,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }, rest));
    }
  }]);

  return LineTool;
}(PathTool), _class2$1.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black'
  }
}), _temp$1)) || _class$1;

var LineTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(LineTool, _extends({
    innerRef: ref
  }, props));
});

var _class$2, _class2$2, _temp$2;
var Tool$2 = ReactPaperJS.Tool,
    PaperScope$2 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$2 = 0; // $FlowFixMe

var PolygonTool = PaperScope$2(_class$2 = (_temp$2 = _class2$2 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(PolygonTool, _PathTool);

  function PolygonTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PolygonTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PolygonTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      if (toolEvent.event.button === MOUSE_LEFT_CODE$2) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path;

        if (!path) {
          _this.pathInit();

          _this.props.onPathInit(path);
        }

        if (_this.selectedSegment == null) {
          _this.onSegmentAdd(toolEvent);
        } else {
          _this.onPathAdd();
        }
      }

      _this.props.onMouseDown(toolEvent);
    };

    _this.points = void 0;
    _this.selectedSegment = void 0;
    return _this;
  }

  _createClass(PolygonTool, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var path = this.path,
          points = this.points,
          props = this.props;
      var pathProps = props.pathProps,
          pathData = props.pathData;

      if (path) {
        this.setPathData(pathData);
        Object.assign(path, pathProps);
      } else if (points) {
        this.pathInit();
      }
    }
  }, {
    key: "pathInit",
    value: function pathInit() {
      var _this$props = this.props,
          pathProps = _this$props.pathProps,
          pathData = _this$props.pathData,
          paper = _this$props.paper;
      var Path = paper.Path;
      var path = new Path(pathProps);
      this.path = path;
      this.setPathData(pathData);
    }
  }, {
    key: "setPathData",
    value: function setPathData(pathData) {
      var _this2 = this;

      var path = this.path;
      this.removeBounds();
      path.pathData = pathData;
      path.segments.forEach(function (segment) {
        return _this2.createBounds(segment);
      });
    }
  }, {
    key: "onSegmentAdd",
    value: function onSegmentAdd(toolEvent) {
      var path = this.path;
      path.add(toolEvent.point);
      var segment = path.lastSegment;
      this.createBounds(segment);
      this.props.onSegmentAdd(segment, path);
    }
  }, {
    key: "onPathAdd",
    value: function onPathAdd() {
      var selectedSegment = this.selectedSegment,
          path = this.path,
          points = this.points;
      var _this$props2 = this.props,
          onSegmentRemove = _this$props2.onSegmentRemove,
          onPathAdd = _this$props2.onPathAdd;
      var index = selectedSegment.index;
      var segments = path.removeSegments(0, index);

      if (segments.length) {
        onSegmentRemove(segments, path);
      }

      path.closed = true;
      path.selected = false;
      onPathAdd(path, pathProps);
      this.path = null;
      this.selectedSegment = null;

      if (points) {
        points.remove();
      }
    }
  }, {
    key: "createBounds",
    value: function createBounds(segment) {
      var _this3 = this;

      var paper = this.props.paper;
      var Path = paper.Path,
          Group = paper.Group,
          project = paper.project;
      var path = this.path,
          points = this.points;

      if (!points) {
        this.points = new Group();
        project.layers.$$metadata.addChild(this.points);
      }

      var bounds = new Path.Circle({
        center: segment.point,
        radius: 7,
        fillColor: 'white',
        opacity: 0
      });
      bounds.on('mousedown', function () {
        if (!path.closed && !path.lastSegment.point.equals(bounds.position) && path.contains(bounds.position)) {
          _this3.selectedSegment = segment;
        }
      });
      this.points.addChild(bounds);
    }
  }, {
    key: "removeBounds",
    value: function removeBounds() {
      if (this.points) {
        this.points.remove();
        this.points = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onMouseDown = _this$props3.onMouseDown,
          onPathAdd = _this$props3.onPathAdd,
          onSegmentAdd = _this$props3.onSegmentAdd,
          onSegmentRemove = _this$props3.onSegmentRemove,
          paper = _this$props3.paper,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onMouseDown", "onPathAdd", "onSegmentAdd", "onSegmentRemove", "paper", "innerRef"]);

      return React.createElement(Tool$2, _extends({
        ref: innerRef,
        onMouseDown: this.onMouseDown
      }, rest));
    }
  }]);

  return PolygonTool;
}(PathTool), _class2$2.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black',
    selected: true
  }
}), _temp$2)) || _class$2;

var PolygonTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(PolygonTool, _extends({
    innerRef: ref
  }, props));
});

var _class$3, _class2$3, _temp$3;
var Tool$3 = ReactPaperJS.Tool,
    PaperScope$3 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$3 = 0; // $FlowFixMe

var RectangleTool = PaperScope$3(_class$3 = (_temp$3 = _class2$3 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(RectangleTool, _PathTool);

  function RectangleTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RectangleTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RectangleTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.type === 'touchstart' || toolEvent.event.button === MOUSE_LEFT_CODE$3) {
        var Path = paper.Path,
            Color = paper.Color;
        var start = toolEvent.point;
        var path = new Path.Rectangle({
          point: start,
          size: [1, 1],
          fillColor: pathProps.selectedFillColor || new Color(0.9, 0.9, 1, 0.75),
          selected: true
        });
        _this.path = path;
        _this.start = start;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.type === 'touchmove' || toolEvent.event.buttons === 1) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path,
            start = _assertThisInitialize.start;

        var bounds = path.bounds;
        var offset = toolEvent.point.subtract(start);
        var width = Math.abs(offset.x);
        var height = Math.abs(offset.y);

        if (offset.x < 0) {
          bounds.left = toolEvent.point.x;
          bounds.right = start.x;
        } else {
          bounds.left = start.x;
        }

        if (offset.y > 0) {
          bounds.top = start.y;
          bounds.bottom = toolEvent.point.y;
        } else {
          bounds.top = toolEvent.point.y;
        }

        if (width > 0) {
          bounds.width = width;
        }

        if (height > 0) {
          bounds.height = height;
        }
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          pathProps = _this$props2.pathProps,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        Object.assign(path, _objectSpread({
          selected: false
        }, pathProps));
        onPathAdd(path, pathProps);
        _this.path = null;
        _this.start = null;
      }

      onMouseUp(event);
    };

    _this.start = void 0;
    return _this;
  }

  _createClass(RectangleTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["innerRef"]);

      return React.createElement(Tool$3, _extends({}, rest, {
        ref: innerRef,
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }));
    }
  }]);

  return RectangleTool;
}(PathTool), _class2$3.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    fillColor: 'white',
    strokeColor: 'black'
  }
}), _temp$3)) || _class$3;

var RectangleTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(RectangleTool, _extends({
    innerRef: ref
  }, props));
});

var _class$4, _class2$4, _temp$4;
var Tool$4 = ReactPaperJS.Tool,
    PaperScope$4 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$4 = 0; // $FlowFixMe

var CircleTool = PaperScope$4(_class$4 = (_temp$4 = _class2$4 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(CircleTool, _PathTool);

  function CircleTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CircleTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CircleTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onMouseDown = function (toolEvent) {
      var _this$props = _this.props,
          pathProps = _this$props.pathProps,
          onMouseDown = _this$props.onMouseDown,
          onPathInit = _this$props.onPathInit,
          paper = _this$props.paper;

      if (toolEvent.event.type === 'touchstart' || toolEvent.event.button === MOUSE_LEFT_CODE$4) {
        var Path = paper.Path,
            Color = paper.Color;
        var path = new Path.Circle({
          center: toolEvent.point,
          radius: 1,
          fillColor: pathProps.selectedFillColor || new Color(0.9, 0.9, 1, 0.75),
          selected: true
        });
        _this.path = path;
        onPathInit(path);
      }

      onMouseDown(toolEvent);
    };

    _this.onMouseDrag = function (toolEvent) {
      var onMouseDrag = _this.props.onMouseDrag;

      if (toolEvent.event.type === 'touchmove' || toolEvent.event.buttons === 1) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            path = _assertThisInitialize.path;

        path.scale(toolEvent.point.getDistance(path.position) / (path.bounds.width / 2));
      }

      onMouseDrag(toolEvent);
    };

    _this.onMouseUp = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      var _this$props2 = _this.props,
          pathProps = _this$props2.pathProps,
          onMouseUp = _this$props2.onMouseUp,
          onPathAdd = _this$props2.onPathAdd;

      if (path) {
        Object.assign(path, _objectSpread({
          selected: false
        }, pathProps));
        onPathAdd(path, pathProps);
        _this.path = null;
      }

      onMouseUp(event);
    };

    return _this;
  }

  _createClass(CircleTool, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["innerRef"]);

      return React.createElement(Tool$4, _extends({
        ref: innerRef
      }, rest, {
        onMouseDown: this.onMouseDown,
        onMouseDrag: this.onMouseDrag,
        onMouseUp: this.onMouseUp
      }));
    }
  }]);

  return CircleTool;
}(PathTool), _class2$4.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    fillColor: 'white',
    strokeColor: 'black'
  }
}), _temp$4)) || _class$4;

var CircleTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(CircleTool, _extends({
    innerRef: ref
  }, props));
});

var _class$5, _class2$5, _temp$5;
var Tool$5 = ReactPaperJS.Tool,
    PaperScope$5 = ReactPaperJS.PaperScope;
var MOUSE_LEFT_CODE$5 = 0; // $FlowFixMe

var SegmentPathTool = PaperScope$5(_class$5 = (_temp$5 = _class2$5 =
/*#__PURE__*/
function (_PathTool) {
  _inherits(SegmentPathTool, _PathTool);

  function SegmentPathTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SegmentPathTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SegmentPathTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onKeyUp = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          path = _assertThisInitialize.path,
          onPathAdd = _assertThisInitialize.onPathAdd;

      if (path) {
        if (path.segments.length > 1) {
          onPathAdd();
        } else {
          path.remove();
          _this.path = null;
        }
      }
    };

    _this.onMouseDown = function (toolEvent) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          path = _assertThisInitialize2.path;

      if (toolEvent.event.button === MOUSE_LEFT_CODE$5 && toolEvent.modifiers.shift) {
        if (!path) {
          _this.pathInit();

          _this.props.onPathInit(path);
        }

        _this.onSegmentAdd(toolEvent);
      }

      _this.props.onMouseDown(toolEvent);
    };

    _this.onPathAdd = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          path = _assertThisInitialize3.path;

      var _this$props = _this.props,
          onPathAdd = _this$props.onPathAdd,
          pathProps = _this$props.pathProps;
      path.selected = false;
      onPathAdd(path, pathProps);
      _this.path = null;
    };

    return _this;
  }

  _createClass(SegmentPathTool, [{
    key: "pathInit",
    value: function pathInit() {
      var _this$props2 = this.props,
          pathProps = _this$props2.pathProps,
          pathData = _this$props2.pathData,
          paper = _this$props2.paper;
      var Path = paper.Path;
      var path = new Path(pathProps);
      this.path = path;
      this.setPathData(pathData);
    }
  }, {
    key: "setPathData",
    value: function setPathData(pathData) {
      this.path.pathData = pathData;
    }
  }, {
    key: "onSegmentAdd",
    value: function onSegmentAdd(toolEvent) {
      var path = this.path;
      path.add(toolEvent.point);
      this.props.onSegmentAdd(path.lastSegment, path);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          pathProps = _this$props3.pathProps,
          onKeyUp = _this$props3.onKeyUp,
          onMouseDown = _this$props3.onMouseDown,
          onPathAdd = _this$props3.onPathAdd,
          onSegmentAdd = _this$props3.onSegmentAdd,
          onSegmentRemove = _this$props3.onSegmentRemove,
          paper = _this$props3.paper,
          innerRef = _this$props3.innerRef,
          rest = _objectWithoutProperties(_this$props3, ["pathProps", "onKeyUp", "onMouseDown", "onPathAdd", "onSegmentAdd", "onSegmentRemove", "paper", "innerRef"]);

      return React.createElement(Tool$5, _extends({
        ref: innerRef,
        onKeyUp: this.onKeyUp,
        onMouseDown: this.onMouseDown
      }, rest));
    }
  }]);

  return SegmentPathTool;
}(PathTool), _class2$5.defaultProps = _objectSpread({}, PathTool.defaultProps, {
  pathProps: {
    strokeColor: 'black',
    selected: true
  }
}), _temp$5)) || _class$5;

var SegmentPathTool_component = React.forwardRef(function (props, ref) {
  return React.createElement(SegmentPathTool, _extends({
    innerRef: ref
  }, props));
});

var _class$6, _class2$6, _temp$6;
var PaperScope$6 = ReactPaperJS.PaperScope,
    getProps = ReactPaperJS.getProps;

function add(num1, num2) {
  return (num1 * 10 + num2 * 10) / 10;
}

function callAllHandlers() {
  var handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (event) {
    return handlers.forEach(function (handler) {
      return handler && handler(event);
    });
  };
}

var PanAndScroll = PaperScope$6(_class$6 = (_temp$6 = _class2$6 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PanAndScroll, _React$Component);

  function PanAndScroll(_props) {
    var _this;

    _classCallCheck(this, PanAndScroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanAndScroll).call(this, _props));

    _this.onWheel = function (_ref) {
      var deltaY = _ref.deltaY;
      var _this$props = _this.props,
          onZoom = _this$props.onZoom,
          mergeProps = _this$props.mergeProps;
      mergeProps(function (state, props) {
        var zoom = state.viewProps.zoom;

        if (deltaY < 0) {
          zoom = add(zoom, 0.1);
          onZoom(zoom);
          return {
            viewProps: _objectSpread({}, props.viewProps, state.viewProps, {
              zoom: zoom
            })
          };
        }

        if (deltaY > 0 && zoom > 0.1) {
          zoom = add(zoom, -0.1);
          onZoom(zoom);
          return {
            viewProps: _objectSpread({}, props.viewProps, state.viewProps, {
              zoom: zoom
            })
          };
        }

        return null;
      });
    };

    _this.onKeyDown = function (_ref2) {
      var key = _ref2.key;
      var draggable = _this.state.draggable;

      if (key === 'space' && !draggable) {
        var _this$props2 = _this.props,
            onPanEnabled = _this$props2.onPanEnabled,
            mergeProps = _this$props2.mergeProps;
        mergeProps(function (state, props) {
          return _objectSpread({}, state, {
            canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
              'drag-state': 'enabled'
            })
          });
        });

        _this.setState({
          draggable: true
        });

        onPanEnabled();
      }
    };

    _this.onKeyUp = function (_ref3) {
      var key = _ref3.key;

      if (key === 'space') {
        var _this$props3 = _this.props,
            onPanDisabled = _this$props3.onPanDisabled,
            mergeProps = _this$props3.mergeProps;
        mergeProps(function (state, props) {
          return _objectSpread({}, state, {
            canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
              'drag-state': 'disabled'
            })
          });
        });

        _this.setState({
          draggable: false
        });

        onPanDisabled();
      }
    };

    _this.onMouseDown = function (_ref4) {
      var point = _ref4.point;
      var _this$state = _this.state,
          draggable = _this$state.draggable,
          dragStart = _this$state.dragStart;

      if (draggable && !dragStart) {
        var mergeProps = _this.props.mergeProps;
        mergeProps(function (state, props) {
          return _objectSpread({}, state, {
            canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
              'drag-state': 'dragging'
            })
          });
        });

        _this.setState({
          dragStart: point
        });
      }
    };

    _this.onMouseUp = function () {
      var _this$state2 = _this.state,
          dragStart = _this$state2.dragStart,
          draggable = _this$state2.draggable;

      if (dragStart) {
        if (draggable) {
          var mergeProps = _this.props.mergeProps;
          mergeProps(function (state, props) {
            return _objectSpread({}, state, {
              canvasProps: _objectSpread({}, props.canvasProps, state.canvasProps, {
                'drag-state': 'enabled'
              })
            });
          });
        }

        _this.setState({
          dragStart: null
        });
      }
    };

    _this.onMouseDrag = function (_ref5) {
      var point = _ref5.point;
      var _this$props4 = _this.props,
          mergeProps = _this$props4.mergeProps,
          paper = _this$props4.paper;
      var _this$state3 = _this.state,
          draggable = _this$state3.draggable,
          dragStart = _this$state3.dragStart;
      mergeProps(function (state, props) {
        if (dragStart) {
          return {
            viewProps: _objectSpread({}, props.viewProps, state.viewProps, {
              center: paper.view.center.add(point.subtract(dragStart).multiply(0.5))
            })
          };
        }

        return null;
      });

      if (draggable) {
        _this.setState({
          dragStart: point
        });
      }
    };

    _this.state = {
      draggable: false,
      dragStart: null
    };
    return _this;
  }

  _createClass(PanAndScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props5 = this.props,
          paper = _this$props5.paper,
          zoomLevel = _this$props5.zoomLevel,
          center = _this$props5.center,
          mergeProps = _this$props5.mergeProps;
      mergeProps(function (state, props) {
        var _getProps = getProps(paper, props.canvasProps),
            onWheel = _getProps.onWheel,
            canvasProps = _objectWithoutProperties(_getProps, ["onWheel"]);

        var _getProps2 = getProps(paper, props.viewProps),
            onKeyDown = _getProps2.onKeyDown,
            onKeyUp = _getProps2.onKeyUp,
            onMouseDown = _getProps2.onMouseDown,
            onMouseDrag = _getProps2.onMouseDrag,
            onMouseUp = _getProps2.onMouseUp,
            viewProps = _objectWithoutProperties(_getProps2, ["onKeyDown", "onKeyUp", "onMouseDown", "onMouseDrag", "onMouseUp"]);

        return {
          canvasProps: _objectSpread({}, canvasProps, {
            onWheel: callAllHandlers([onWheel, _this2.onWheel]),
            'drag-state': 'disabled'
          }),
          viewProps: _objectSpread({}, viewProps, {
            onKeyDown: callAllHandlers([onKeyDown, _this2.onKeyDown]),
            onKeyUp: callAllHandlers([onKeyUp, _this2.onKeyUp]),
            onMouseDown: callAllHandlers([onMouseDown, _this2.onMouseDown]),
            onMouseDrag: callAllHandlers([onMouseDrag, _this2.onMouseDrag]),
            onMouseUp: callAllHandlers([onMouseUp, _this2.onMouseUp]),
            zoom: zoomLevel,
            center: center
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return PanAndScroll;
}(React.Component), _class2$6.defaultProps = {
  zoomLevel: 1,
  onPanEnabled: function onPanEnabled() {},
  onPanDisabled: function onPanDisabled() {},
  onZoom: function onZoom() {}
}, _temp$6)) || _class$6;

exports.CircleTool = CircleTool_component;
exports.FreeformPathTool = FreeformPathTool_component;
exports.Grid = Grid_component;
exports.LineTool = LineTool_component;
exports.PanAndZoom = PanAndScroll;
exports.PolygonTool = PolygonTool_component;
exports.RectangleTool = RectangleTool_component;
exports.SegmentPathTool = SegmentPathTool_component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvUGF0aFRvb2wvUGF0aFRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvRnJlZWZvcm1QYXRoVG9vbC9GcmVlZm9ybVBhdGhUb29sLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9MaW5lVG9vbC9MaW5lVG9vbC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Qb2x5Z29uVG9vbC9Qb2x5Z29uVG9vbC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGVUb29sL1JlY3RhbmdsZVRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ2lyY2xlVG9vbC9DaXJjbGVUb29sLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnRQYXRoVG9vbC9TZWdtZW50UGF0aFRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvUGFuQW5kWm9vbS9QYW5BbmRab29tLmNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBUb29sRXZlbnRIYW5kbGVyIH0gZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgUGFwZXJTY29wZSBhcyBQYXBlciwgUGF0aCwgU2VnbWVudCwgS2V5RXZlbnQgfSBmcm9tICdwYXBlcic7XG5cbnR5cGUgS2V5RXZlbnRIYW5kbGVyID0gKGV2ZW50OiBLZXlFdmVudCkgPT4gYW55XG50eXBlIFBhdGhFdmVudEhhbmRsZXIgPSAocGF0aDogUGF0aCkgPT4gYW55XG50eXBlIFNlZ21lbnRFdmVudEhhbmRsZXIgPSAoc2VnbWVudDogU2VnbWVudCB8IFNlZ21lbnRbXSkgPT4gYW55O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXBlcjogUGFwZXIsXG4gIG9uS2V5RG93bjogS2V5RXZlbnRIYW5kbGVyLFxuICBvbktleVVwOiBLZXlFdmVudEhhbmRsZXIsXG4gIG9uTW91c2VEb3duOiBUb29sRXZlbnRIYW5kbGVyLFxuICBvbk1vdXNlRHJhZzogVG9vbEV2ZW50SGFuZGxlcixcbiAgb25Nb3VzZVVwOiBUb29sRXZlbnRIYW5kbGVyLFxuICBvblBhdGhJbml0OiBQYXRoRXZlbnRIYW5kbGVyLFxuICBvblBhdGhBZGQ6IFBhdGhFdmVudEhhbmRsZXIsXG4gIG9uU2VnbWVudEFkZDogU2VnbWVudEV2ZW50SGFuZGxlcixcbiAgb25TZWdtZW50UmVtb3ZlOiBTZWdtZW50RXZlbnRIYW5kbGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoVG9vbDxQPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQICYgUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbktleURvd246ICgpID0+IHt9LFxuICAgIG9uS2V5VXA6ICgpID0+IHt9LFxuICAgIG9uTW91c2VEb3duOiAoKSA9PiB7fSxcbiAgICBvbk1vdXNlRHJhZzogKCkgPT4ge30sXG4gICAgb25Nb3VzZVVwOiAoKSA9PiB7fSxcbiAgICBvblBhdGhJbml0OiAoKSA9PiB7fSxcbiAgICBvblBhdGhBZGQ6ICgpID0+IHt9LFxuICAgIG9uU2VnbWVudEFkZDogKCkgPT4ge30sXG4gICAgb25TZWdtZW50UmVtb3ZlOiAoKSA9PiB7fSxcbiAgfVxuXG4gIHBhdGg6IFBhdGhcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgRnJlZWZvcm1QYXRoVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgfSxcbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCBwYXRoID0gbmV3IHBhcGVyLlBhdGgocGF0aFByb3BzKTtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICBvblBhdGhJbml0KHBhdGgpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VEcmFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9ucyA9PT0gMSkge1xuICAgICAgdGhpcy5wYXRoLmFkZCh0b29sRXZlbnQucG9pbnQpO1xuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25Nb3VzZVVwLCBvblBhdGhBZGQscGF0aFByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBvblBhdGhBZGQocGF0aCxwYXRoUHJvcHMpO1xuICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgb25Nb3VzZVVwKHRvb2xFdmVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aFByb3BzLCBvbk1vdXNlRG93biwgb25Nb3VzZURyYWcsIG9uTW91c2VVcCwgb25QYXRoQWRkLCBwYXBlciwgaW5uZXJSZWYsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgbWluRGlzdGFuY2U9ezEwfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZURyYWc9e3RoaXMub25Nb3VzZURyYWd9XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbk1vdXNlVXB9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxGcmVlZm9ybVBhdGhUb29sIGlubmVyUmVmPXtyZWZ9IHsuLi5wcm9wc30gLz4pO1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0UGFwZXJKUyBmcm9tICdAcHN5Y2hvYm9sdC9yZWFjdC1wYXBlcmpzJztcblxuY29uc3QgeyBMYXllciwgR3JvdXAsIExpbmUgfSA9IFJlYWN0UGFwZXJKUztcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9wOiBudW1iZXIsXG4gIGxlZnQ6IG51bWJlcixcbiAgcmlnaHQ6IG51bWJlcixcbiAgYm90dG9tOiBudW1iZXIsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBjZWxsU2l6ZTogbnVtYmVyLFxuICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICBzdHJva2VXaWR0aDogbnVtYmVyLFxuICBpbm5lclJlZjogUmVhY3QuUmVmPHR5cGVvZiBMYXllcj5cbn07XG5cbmNvbnN0IEdyaWQgPSAoeyB3aWR0aCwgaGVpZ2h0LCB0b3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsIGJvdHRvbSA9IHRvcCArIGhlaWdodCwgY2VsbFNpemUgPSA1MCwgc3Ryb2tlQ29sb3IgPSAnI0QwRDBEMCcsIHN0cm9rZVdpZHRoID0gMSwgaW5uZXJSZWYgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeCA9IE1hdGguY2VpbChsZWZ0IC8gY2VsbFNpemUpICogY2VsbFNpemU7XG4gIGNvbnN0IHkgPSBNYXRoLmNlaWwodG9wIC8gY2VsbFNpemUpICogY2VsbFNpemU7XG4gIGNvbnN0IGNvbHMgPSBNYXRoLmNlaWwoKHJpZ2h0IC0gbGVmdCkgLyBjZWxsU2l6ZSk7XG4gIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoKGJvdHRvbSAtIHRvcCkgLyBjZWxsU2l6ZSk7XG4gIGNvbnN0IHZlcnRpY2FsTGluZXMgPSBbXTtcbiAgY29uc3QgaG9yaXpvbnRhbExpbmVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGNvbHM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0geCArIChpICogY2VsbFNpemUpO1xuICAgIHZlcnRpY2FsTGluZXMucHVzaCg8TGluZVxuICAgICAga2V5PXtpfVxuICAgICAgZnJvbT17W3Bvc2l0aW9uLCB0b3BdfVxuICAgICAgdG89e1twb3NpdGlvbiwgYm90dG9tXX1cbiAgICAgIHN0cm9rZUNvbG9yPXtzdHJva2VDb2xvcn1cbiAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAvPik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcm93czsgaSArPSAxKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB5ICsgKGkgKiBjZWxsU2l6ZSk7XG4gICAgaG9yaXpvbnRhbExpbmVzLnB1c2goPExpbmVcbiAgICAgIGtleT17aX1cbiAgICAgIGZyb209e1tsZWZ0LCBwb3NpdGlvbl19XG4gICAgICB0bz17W3JpZ2h0LCBwb3NpdGlvbl19XG4gICAgICBzdHJva2VDb2xvcj17c3Ryb2tlQ29sb3J9XG4gICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgLz4pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheWVyIHJlZj17aW5uZXJSZWZ9PlxuICAgICAgPEdyb3VwPlxuICAgICAgICB7dmVydGljYWxMaW5lc31cbiAgICAgIDwvR3JvdXA+XG4gICAgICA8R3JvdXA+XG4gICAgICAgIHtob3Jpem9udGFsTGluZXN9XG4gICAgICA8L0dyb3VwPlxuICAgIDwvTGF5ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8R3JpZCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xyXG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xyXG5cclxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XHJcblxyXG5jb25zdCB7IFRvb2wsIFBhcGVyU2NvcGUgfSA9IFJlYWN0UGFwZXJKUztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcGF0aFByb3BzOiB7XHJcbiAgICBzdHJva2VDb2xvcjogc3RyaW5nLFxyXG4gIH0sXHJcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjxUb29sVHlwZT5cclxufTtcclxuXHJcbmNvbnN0IE1PVVNFX0xFRlRfQ09ERSA9IDA7XHJcblxyXG4vLyAkRmxvd0ZpeE1lXHJcbkBQYXBlclNjb3BlXHJcbmNsYXNzIExpbmVUb29sIGV4dGVuZHMgUGF0aFRvb2w8UHJvcHM+IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxyXG4gICAgcGF0aFByb3BzOiB7XHJcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmxhY2snLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBvbk1vdXNlRG93biA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0b29sRXZlbnQuZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IHRvb2xFdmVudC5ldmVudC5idXR0b24gPT09IE1PVVNFX0xFRlRfQ09ERSkge1xyXG4gICAgICBjb25zdCBwYXRoID0gbmV3IHBhcGVyLlBhdGgocGF0aFByb3BzKTtcclxuICAgICAgcGF0aC5hZGQodG9vbEV2ZW50LnBvaW50KTtcclxuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgb25QYXRoSW5pdChwYXRoKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VEb3duKHRvb2xFdmVudCk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRHJhZyA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgeyBvbk1vdXNlRHJhZyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0b29sRXZlbnQuZXZlbnQudHlwZT09PSd0b3VjaG1vdmUnIHx8IHRvb2xFdmVudC5ldmVudC5idXR0b25zID09PSAxKSB7XHJcbiAgICAgIHBhdGgucmVtb3ZlU2VnbWVudCgxKTtcclxuICAgICAgcGF0aC5hZGRTZWdtZW50KHRvb2xFdmVudC5wb2ludCk7XHJcbiAgICAgIHBhdGguc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZURyYWcodG9vbEV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcCA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgeyBvbk1vdXNlVXAsIG9uUGF0aEFkZCxwYXRoUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICBwYXRoLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIG9uUGF0aEFkZChwYXRoLHBhdGhQcm9wcyk7XHJcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAodG9vbEV2ZW50KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGF0aFByb3BzLCBvbk1vdXNlRG93biwgb25Nb3VzZURyYWcsIG9uTW91c2VVcCwgb25QYXRoQWRkLCBpbm5lclJlZiwgLi4ucmVzdFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VG9vbFxyXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XHJcbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XHJcbiAgICAgICAgb25Nb3VzZURyYWc9e3RoaXMub25Nb3VzZURyYWd9XHJcbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8TGluZVRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XHJcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgR3JvdXAgYXMgUG9pbnRzLCBTZWdtZW50LCBUb29sRXZlbnQsIFRvb2wgYXMgVG9vbFR5cGUgfSBmcm9tICdwYXBlcic7XG5cbmltcG9ydCBQYXRoVG9vbCBmcm9tICcuLi9zaGFyZWQvUGF0aFRvb2wnO1xuXG5jb25zdCB7IFRvb2wsIFBhcGVyU2NvcGUgfSA9IFJlYWN0UGFwZXJKUztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGF0aFByb3BzOiB7XG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZyxcbiAgfSxcbiAgcGF0aERhdGE6IHN0cmluZyxcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjxUb29sVHlwZT5cbn07XG5cbmNvbnN0IE1PVVNFX0xFRlRfQ09ERSA9IDA7XG5cbi8vICRGbG93Rml4TWVcbkBQYXBlclNjb3BlXG5jbGFzcyBQb2x5Z29uVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IHBhdGgsIHBvaW50cywgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIHBhdGhEYXRhIH0gPSBwcm9wcztcbiAgICBpZiAocGF0aCkge1xuICAgICAgdGhpcy5zZXRQYXRoRGF0YShwYXRoRGF0YSk7XG4gICAgICBPYmplY3QuYXNzaWduKHBhdGgsIHBhdGhQcm9wcyk7XG4gICAgfSBlbHNlIGlmIChwb2ludHMpIHtcbiAgICAgIHRoaXMucGF0aEluaXQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93biA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9uID09PSBNT1VTRV9MRUZUX0NPREUpIHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgIGlmICghcGF0aCkge1xuICAgICAgICB0aGlzLnBhdGhJbml0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25QYXRoSW5pdChwYXRoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VnbWVudCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub25TZWdtZW50QWRkKHRvb2xFdmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uUGF0aEFkZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKHRvb2xFdmVudCk7XG4gIH1cblxuICBwYXRoSW5pdCgpIHtcbiAgICBjb25zdCB7IHBhdGhQcm9wcywgcGF0aERhdGEsIHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgUGF0aCB9ID0gcGFwZXI7XG4gICAgY29uc3QgcGF0aCA9IG5ldyBQYXRoKHBhdGhQcm9wcyk7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnNldFBhdGhEYXRhKHBhdGhEYXRhKTtcbiAgfVxuXG4gIHNldFBhdGhEYXRhKHBhdGhEYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgdGhpcy5yZW1vdmVCb3VuZHMoKTtcbiAgICBwYXRoLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gICAgcGF0aC5zZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4gdGhpcy5jcmVhdGVCb3VuZHMoc2VnbWVudCkpO1xuICB9XG5cbiAgb25TZWdtZW50QWRkKHRvb2xFdmVudDogVG9vbEV2ZW50KSB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIHBhdGguYWRkKHRvb2xFdmVudC5wb2ludCk7XG4gICAgY29uc3Qgc2VnbWVudCA9IHBhdGgubGFzdFNlZ21lbnQ7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2VnbWVudCk7XG4gICAgdGhpcy5wcm9wcy5vblNlZ21lbnRBZGQoc2VnbWVudCwgcGF0aCk7XG4gIH1cblxuICBvblBhdGhBZGQoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZFNlZ21lbnQsIHBhdGgsIHBvaW50cyB9ID0gdGhpcztcbiAgICBjb25zdCB7IG9uU2VnbWVudFJlbW92ZSwgb25QYXRoQWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IHNlbGVjdGVkU2VnbWVudDtcbiAgICBjb25zdCBzZWdtZW50cyA9IHBhdGgucmVtb3ZlU2VnbWVudHMoMCwgaW5kZXgpO1xuICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgIG9uU2VnbWVudFJlbW92ZShzZWdtZW50cywgcGF0aCk7XG4gICAgfVxuICAgIHBhdGguY2xvc2VkID0gdHJ1ZTtcbiAgICBwYXRoLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgb25QYXRoQWRkKHBhdGgscGF0aFByb3BzKTtcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRTZWdtZW50ID0gbnVsbDtcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBwb2ludHMucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHNlZ21lbnQ6IFNlZ21lbnQpIHtcbiAgICBjb25zdCB7IHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgUGF0aCwgR3JvdXAsIHByb2plY3QgfSA9IHBhcGVyO1xuICAgIGNvbnN0IHsgcGF0aCwgcG9pbnRzIH0gPSB0aGlzO1xuICAgIGlmICghcG9pbnRzKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IG5ldyBHcm91cCgpO1xuICAgICAgcHJvamVjdC5sYXllcnMuJCRtZXRhZGF0YS5hZGRDaGlsZCh0aGlzLnBvaW50cyk7XG4gICAgfVxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IHNlZ21lbnQucG9pbnQsXG4gICAgICByYWRpdXM6IDcsXG4gICAgICBmaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0pO1xuICAgIGJvdW5kcy5vbignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgaWYgKCFwYXRoLmNsb3NlZFxuICAgICAgICAgICYmICFwYXRoLmxhc3RTZWdtZW50LnBvaW50LmVxdWFscyhib3VuZHMucG9zaXRpb24pXG4gICAgICAgICAgJiYgcGF0aC5jb250YWlucyhib3VuZHMucG9zaXRpb24pKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZWdtZW50ID0gc2VnbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnBvaW50cy5hZGRDaGlsZChib3VuZHMpO1xuICB9XG5cbiAgcmVtb3ZlQm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cykge1xuICAgICAgdGhpcy5wb2ludHMucmVtb3ZlKCk7XG4gICAgICB0aGlzLnBvaW50cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcG9pbnRzOiBQb2ludHM7XG5cbiAgc2VsZWN0ZWRTZWdtZW50OiBTZWdtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhBZGQsIG9uU2VnbWVudEFkZCwgb25TZWdtZW50UmVtb3ZlLCBwYXBlciwgaW5uZXJSZWYsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxQb2x5Z29uVG9vbCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgUG9pbnQsIFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBmaWxsQ29sb3I6IHN0cmluZyxcbiAgfSxcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjxUb29sVHlwZT5cbn07XG5cbmNvbnN0IE1PVVNFX0xFRlRfQ09ERSA9IDA7XG5cbi8vICRGbG93Rml4TWVcbkBQYXBlclNjb3BlXG5jbGFzcyBSZWN0YW5nbGVUb29sIGV4dGVuZHMgUGF0aFRvb2w8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5QYXRoVG9vbC5kZWZhdWx0UHJvcHMsXG4gICAgcGF0aFByb3BzOiB7XG4gICAgICBmaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcbiAgICB9LFxuICB9XG5cbiAgb25Nb3VzZURvd24gPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGhQcm9wcywgb25Nb3VzZURvd24sIG9uUGF0aEluaXQsIHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IHRvb2xFdmVudC5ldmVudC5idXR0b24gPT09IE1PVVNFX0xFRlRfQ09ERSkge1xuICAgICAgY29uc3QgeyBQYXRoLCBDb2xvciB9ID0gcGFwZXI7XG4gICAgICBjb25zdCBzdGFydCA9IHRvb2xFdmVudC5wb2ludDtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aC5SZWN0YW5nbGUoe1xuICAgICAgICBwb2ludDogc3RhcnQsXG4gICAgICAgIHNpemU6IFsxLCAxXSxcbiAgICAgICAgZmlsbENvbG9yOiBwYXRoUHJvcHMuc2VsZWN0ZWRGaWxsQ29sb3IgfHwgbmV3IENvbG9yKDAuOSwgMC45LCAxLCAwLjc1KSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICBvblBhdGhJbml0KHBhdGgpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VEcmFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQudHlwZSA9PT0gJ3RvdWNobW92ZScgfHwgdG9vbEV2ZW50LmV2ZW50LmJ1dHRvbnMgPT09IDEpIHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgc3RhcnQgfSA9IHRoaXM7XG4gICAgICBjb25zdCB7IGJvdW5kcyB9ID0gcGF0aDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRvb2xFdmVudC5wb2ludC5zdWJ0cmFjdChzdGFydCk7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGguYWJzKG9mZnNldC54KTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguYWJzKG9mZnNldC55KTtcbiAgICAgIGlmIChvZmZzZXQueCA8IDApIHtcbiAgICAgICAgYm91bmRzLmxlZnQgPSB0b29sRXZlbnQucG9pbnQueDtcbiAgICAgICAgYm91bmRzLnJpZ2h0ID0gc3RhcnQueDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy5sZWZ0ID0gc3RhcnQueDtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZzZXQueSA+IDApIHtcbiAgICAgICAgYm91bmRzLnRvcCA9IHN0YXJ0Lnk7XG4gICAgICAgIGJvdW5kcy5ib3R0b20gPSB0b29sRXZlbnQucG9pbnQueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdW5kcy50b3AgPSB0b29sRXZlbnQucG9pbnQueTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aCA+IDApIHtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKGV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VVcCwgb25QYXRoQWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhdGgsIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAuLi5wYXRoUHJvcHMsXG4gICAgICB9KTtcbiAgICAgIG9uUGF0aEFkZChwYXRoLHBhdGhQcm9wcyk7XG4gICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgICAgdGhpcy5zdGFydCA9IG51bGw7XG4gICAgfVxuICAgIG9uTW91c2VVcChldmVudCk7XG4gIH1cblxuICBzdGFydDogUG9pbnQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5uZXJSZWYsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZURyYWc9e3RoaXMub25Nb3VzZURyYWd9XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbk1vdXNlVXB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPFJlY3RhbmdsZVRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGVvZiB7IFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBmaWxsQ29sb3I6IHN0cmluZyxcbiAgICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICB9LFxuICBpbm5lclJlZjogUmVhY3QuUmVmPFRvb2xUeXBlPlxufTtcblxuY29uc3QgTU9VU0VfTEVGVF9DT0RFID0gMDtcblxuLy8gJEZsb3dGaXhNZVxuQFBhcGVyU2NvcGVcbmNsYXNzIENpcmNsZVRvb2wgZXh0ZW5kcyBQYXRoVG9vbDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLlBhdGhUb29sLmRlZmF1bHRQcm9wcyxcbiAgICBwYXRoUHJvcHM6IHtcbiAgICAgIGZpbGxDb2xvcjogJ3doaXRlJyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmxhY2snLFxuICAgIH0sXG4gIH1cblxuICBvbk1vdXNlRG93biA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBvbk1vdXNlRG93biwgb25QYXRoSW5pdCwgcGFwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgdG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCB7IFBhdGgsIENvbG9yIH0gPSBwYXBlcjtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgICBjZW50ZXI6IHRvb2xFdmVudC5wb2ludCxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBmaWxsQ29sb3I6IHBhdGhQcm9wcy5zZWxlY3RlZEZpbGxDb2xvciB8fCBuZXcgQ29sb3IoMC45LCAwLjksIDEsIDAuNzUpLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIG9uUGF0aEluaXQocGF0aCk7XG4gICAgfVxuICAgIG9uTW91c2VEb3duKHRvb2xFdmVudCk7XG4gIH1cblxuICBvbk1vdXNlRHJhZyA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25Nb3VzZURyYWcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC50eXBlPT09J3RvdWNobW92ZScgfHwgdG9vbEV2ZW50LmV2ZW50LmJ1dHRvbnMgPT09IDEpIHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcztcbiAgICAgIHBhdGguc2NhbGUodG9vbEV2ZW50LnBvaW50LmdldERpc3RhbmNlKHBhdGgucG9zaXRpb24pIC8gKHBhdGguYm91bmRzLndpZHRoIC8gMikpO1xuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKGV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VVcCwgb25QYXRoQWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhdGgsIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAuLi5wYXRoUHJvcHMsXG4gICAgICB9KTtcbiAgICAgIG9uUGF0aEFkZChwYXRoLHBhdGhQcm9wcyk7XG4gICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIH1cbiAgICBvbk1vdXNlVXAoZXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5uZXJSZWYsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZURyYWc9e3RoaXMub25Nb3VzZURyYWd9XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbk1vdXNlVXB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPENpcmNsZVRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGVvZiB7IFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICB9LFxuICBwYXRoRGF0YTogc3RyaW5nLFxuICBpbm5lclJlZjogUmVhY3QuUmVmPFRvb2xUeXBlPlxufTtcblxuY29uc3QgTU9VU0VfTEVGVF9DT0RFID0gMDtcblxuLy8gJEZsb3dGaXhNZVxuQFBhcGVyU2NvcGVcbmNsYXNzIFNlZ21lbnRQYXRoVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIG9uS2V5VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYXRoLCBvblBhdGhBZGQgfSA9IHRoaXM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIGlmIChwYXRoLnNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb25QYXRoQWRkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9uID09PSBNT1VTRV9MRUZUX0NPREUgJiYgdG9vbEV2ZW50Lm1vZGlmaWVycy5zaGlmdCkge1xuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aEluaXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBhdGhJbml0KHBhdGgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNlZ21lbnRBZGQodG9vbEV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgcGF0aEluaXQoKSB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIHBhdGhEYXRhLCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IFBhdGggfSA9IHBhcGVyO1xuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aChwYXRoUHJvcHMpO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5zZXRQYXRoRGF0YShwYXRoRGF0YSk7XG4gIH1cblxuICBzZXRQYXRoRGF0YShwYXRoRGF0YTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXRoLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gIH1cblxuICBvblNlZ21lbnRBZGQodG9vbEV2ZW50OiBUb29sRXZlbnQpIHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgcGF0aC5hZGQodG9vbEV2ZW50LnBvaW50KTtcbiAgICB0aGlzLnByb3BzLm9uU2VnbWVudEFkZChwYXRoLmxhc3RTZWdtZW50LCBwYXRoKTtcbiAgfVxuXG4gIG9uUGF0aEFkZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBvblBhdGhBZGQscGF0aFByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHBhdGguc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBvblBhdGhBZGQocGF0aCxwYXRoUHJvcHMpO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aFByb3BzLFxuICAgICAgb25LZXlVcCxcbiAgICAgIG9uTW91c2VEb3duLFxuICAgICAgb25QYXRoQWRkLFxuICAgICAgb25TZWdtZW50QWRkLFxuICAgICAgb25TZWdtZW50UmVtb3ZlLFxuICAgICAgcGFwZXIsXG4gICAgICBpbm5lclJlZixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgb25LZXlVcD17dGhpcy5vbktleVVwfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPFNlZ21lbnRQYXRoVG9vbCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZSB7IFBhcGVyLCBFdmVudEhhbmRsZXIgfSBmcm9tICdAcHN5Y2hvYm9sdC9yZWFjdC1wYXBlcmpzJztcbmltcG9ydCB0eXBlIHsgS2V5RXZlbnQsIE1vdXNlRXZlbnQgfSBmcm9tICdwYXBlcic7XG5cbmNvbnN0IHsgUGFwZXJTY29wZSwgZ2V0UHJvcHMgfSA9IFJlYWN0UGFwZXJKUztcblxudHlwZSBQcm9wcyA9IHtcbiAgb25QYW5FbmFibGVkPzogKCkgPT4gYW55LFxuICBvblBhbkRpc2FibGVkPzogKCkgPT4gYW55LFxuICBvblpvb20/OiAobGV2ZWw6IG51bWJlcikgPT4gYW55LFxuICB6b29tTGV2ZWw/OiBudW1iZXIsXG4gIGNlbnRlcjogT2JqZWN0IHwgbnVtYmVyW10sXG4gIHBhcGVyOiBQYXBlcixcbiAgbWVyZ2VQcm9wczogKHN0YXRlOiB7fSwgcHJvcHM/OiB7fSkgPT4ge30sXG4gIGNoaWxkcmVuOiBhbnksXG59O1xuXG50eXBlIFN0YXRlID0ge1xuICBkcmFnZ2FibGU6IGJvb2xlYW4sXG4gIGRyYWdTdGFydDogP09iamVjdCxcbn07XG5cbmZ1bmN0aW9uIGFkZChudW0xLCBudW0yKSB7XG4gIHJldHVybiAoKG51bTEgKiAxMCkgKyAobnVtMiAqIDEwKSkgLyAxMDtcbn1cblxuZnVuY3Rpb24gY2FsbEFsbEhhbmRsZXJzKGhhbmRsZXJzOiBFdmVudEhhbmRsZXJbXSA9IFtdKSB7XG4gIHJldHVybiBldmVudCA9PiBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlciAmJiBoYW5kbGVyKGV2ZW50KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEBQYXBlclNjb3BlIGNsYXNzIFBhbkFuZFNjcm9sbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB6b29tTGV2ZWw6IDEsXG4gICAgb25QYW5FbmFibGVkOiAoKSA9PiB7fSxcbiAgICBvblBhbkRpc2FibGVkOiAoKSA9PiB7fSxcbiAgICBvblpvb206ICgpID0+IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIGRyYWdTdGFydDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwYXBlciwgem9vbUxldmVsLCBjZW50ZXIsIG1lcmdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IG9uV2hlZWwsIC4uLmNhbnZhc1Byb3BzIH0gPSBnZXRQcm9wcyhwYXBlciwgcHJvcHMuY2FudmFzUHJvcHMpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBvbktleURvd24sIG9uS2V5VXAsIG9uTW91c2VEb3duLCBvbk1vdXNlRHJhZywgb25Nb3VzZVVwLCAuLi52aWV3UHJvcHNcbiAgICAgIH0gPSBnZXRQcm9wcyhwYXBlciwgcHJvcHMudmlld1Byb3BzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4uY2FudmFzUHJvcHMsXG4gICAgICAgICAgb25XaGVlbDogY2FsbEFsbEhhbmRsZXJzKFtvbldoZWVsLCB0aGlzLm9uV2hlZWxdKSxcbiAgICAgICAgICAnZHJhZy1zdGF0ZSc6ICdkaXNhYmxlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdQcm9wczoge1xuICAgICAgICAgIC4uLnZpZXdQcm9wcyxcbiAgICAgICAgICBvbktleURvd246IGNhbGxBbGxIYW5kbGVycyhbb25LZXlEb3duLCB0aGlzLm9uS2V5RG93bl0pLFxuICAgICAgICAgIG9uS2V5VXA6IGNhbGxBbGxIYW5kbGVycyhbb25LZXlVcCwgdGhpcy5vbktleVVwXSksXG4gICAgICAgICAgb25Nb3VzZURvd246IGNhbGxBbGxIYW5kbGVycyhbb25Nb3VzZURvd24sIHRoaXMub25Nb3VzZURvd25dKSxcbiAgICAgICAgICBvbk1vdXNlRHJhZzogY2FsbEFsbEhhbmRsZXJzKFtvbk1vdXNlRHJhZywgdGhpcy5vbk1vdXNlRHJhZ10pLFxuICAgICAgICAgIG9uTW91c2VVcDogY2FsbEFsbEhhbmRsZXJzKFtvbk1vdXNlVXAsIHRoaXMub25Nb3VzZVVwXSksXG4gICAgICAgICAgem9vbTogem9vbUxldmVsLFxuICAgICAgICAgIGNlbnRlcixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBvbldoZWVsID0gKHsgZGVsdGFZIH06IFN5bnRoZXRpY1doZWVsRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblpvb20sIG1lcmdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICBsZXQgeyB6b29tIH0gPSBzdGF0ZS52aWV3UHJvcHM7XG4gICAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICB6b29tID0gYWRkKHpvb20sIDAuMSk7XG4gICAgICAgIG9uWm9vbSh6b29tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2aWV3UHJvcHM6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLnZpZXdQcm9wcyxcbiAgICAgICAgICAgIC4uLnN0YXRlLnZpZXdQcm9wcyxcbiAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWx0YVkgPiAwICYmIHpvb20gPiAwLjEpIHtcbiAgICAgICAgem9vbSA9IGFkZCh6b29tLCAtMC4xKTtcbiAgICAgICAgb25ab29tKHpvb20pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpZXdQcm9wczoge1xuICAgICAgICAgICAgLi4ucHJvcHMudmlld1Byb3BzLFxuICAgICAgICAgICAgLi4uc3RhdGUudmlld1Byb3BzLFxuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBvbktleURvd24gPSAoeyBrZXkgfTogS2V5RXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGRyYWdnYWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoa2V5ID09PSAnc3BhY2UnICYmICFkcmFnZ2FibGUpIHtcbiAgICAgIGNvbnN0IHsgb25QYW5FbmFibGVkLCBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FudmFzUHJvcHM6IHtcbiAgICAgICAgICAuLi5wcm9wcy5jYW52YXNQcm9wcyxcbiAgICAgICAgICAuLi5zdGF0ZS5jYW52YXNQcm9wcyxcbiAgICAgICAgICAnZHJhZy1zdGF0ZSc6ICdlbmFibGVkJyxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnZ2FibGU6IHRydWUgfSk7XG4gICAgICBvblBhbkVuYWJsZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbktleVVwID0gKHsga2V5IH06IEtleUV2ZW50KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gJ3NwYWNlJykge1xuICAgICAgY29uc3QgeyBvblBhbkRpc2FibGVkLCBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FudmFzUHJvcHM6IHtcbiAgICAgICAgICAuLi5wcm9wcy5jYW52YXNQcm9wcyxcbiAgICAgICAgICAuLi5zdGF0ZS5jYW52YXNQcm9wcyxcbiAgICAgICAgICAnZHJhZy1zdGF0ZSc6ICdkaXNhYmxlZCcsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dhYmxlOiBmYWxzZSB9KTtcbiAgICAgIG9uUGFuRGlzYWJsZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93biA9ICh7IHBvaW50IH06IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGRyYWdnYWJsZSwgZHJhZ1N0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChkcmFnZ2FibGUgJiYgIWRyYWdTdGFydCkge1xuICAgICAgY29uc3QgeyBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FudmFzUHJvcHM6IHtcbiAgICAgICAgICAuLi5wcm9wcy5jYW52YXNQcm9wcyxcbiAgICAgICAgICAuLi5zdGF0ZS5jYW52YXNQcm9wcyxcbiAgICAgICAgICAnZHJhZy1zdGF0ZSc6ICdkcmFnZ2luZycsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ1N0YXJ0OiBwb2ludCB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkcmFnU3RhcnQsIGRyYWdnYWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZHJhZ1N0YXJ0KSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlKSB7XG4gICAgICAgIGNvbnN0IHsgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiAoe1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5jYW52YXNQcm9wcyxcbiAgICAgICAgICAgIC4uLnN0YXRlLmNhbnZhc1Byb3BzLFxuICAgICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZW5hYmxlZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYWdTdGFydDogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRHJhZyA9ICh7IHBvaW50IH06IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG1lcmdlUHJvcHMsIHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZHJhZ2dhYmxlLCBkcmFnU3RhcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgbWVyZ2VQcm9wcygoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICBpZiAoZHJhZ1N0YXJ0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmlld1Byb3BzOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy52aWV3UHJvcHMsXG4gICAgICAgICAgICAuLi5zdGF0ZS52aWV3UHJvcHMsXG4gICAgICAgICAgICBjZW50ZXI6XG4gICAgICAgICAgICAgIHBhcGVyLnZpZXcuY2VudGVyXG4gICAgICAgICAgICAgICAgLmFkZChwb2ludC5zdWJ0cmFjdChkcmFnU3RhcnQpXG4gICAgICAgICAgICAgICAgICAubXVsdGlwbHkoMC41KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIGlmIChkcmFnZ2FibGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnU3RhcnQ6IHBvaW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhdGhUb29sIiwicGF0aCIsIlJlYWN0IiwiZGVmYXVsdFByb3BzIiwib25LZXlEb3duIiwib25LZXlVcCIsIm9uTW91c2VEb3duIiwib25Nb3VzZURyYWciLCJvbk1vdXNlVXAiLCJvblBhdGhJbml0Iiwib25QYXRoQWRkIiwib25TZWdtZW50QWRkIiwib25TZWdtZW50UmVtb3ZlIiwiVG9vbCIsIlJlYWN0UGFwZXJKUyIsIlBhcGVyU2NvcGUiLCJNT1VTRV9MRUZUX0NPREUiLCJGcmVlZm9ybVBhdGhUb29sIiwidG9vbEV2ZW50IiwicHJvcHMiLCJwYXRoUHJvcHMiLCJwYXBlciIsImV2ZW50IiwiYnV0dG9uIiwiUGF0aCIsImJ1dHRvbnMiLCJhZGQiLCJwb2ludCIsImlubmVyUmVmIiwicmVzdCIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJzdHJva2VDb2xvciIsInJlZiIsIkxheWVyIiwiR3JvdXAiLCJMaW5lIiwiR3JpZCIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiY2VsbFNpemUiLCJzdHJva2VXaWR0aCIsIngiLCJNYXRoIiwiY2VpbCIsInkiLCJjb2xzIiwicm93cyIsInZlcnRpY2FsTGluZXMiLCJob3Jpem9udGFsTGluZXMiLCJpIiwicG9zaXRpb24iLCJwdXNoIiwiTGluZVRvb2wiLCJ0eXBlIiwicmVtb3ZlU2VnbWVudCIsImFkZFNlZ21lbnQiLCJzZWxlY3RlZCIsIlBvbHlnb25Ub29sIiwicGF0aEluaXQiLCJzZWxlY3RlZFNlZ21lbnQiLCJwb2ludHMiLCJwYXRoRGF0YSIsInNldFBhdGhEYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwicmVtb3ZlQm91bmRzIiwic2VnbWVudHMiLCJmb3JFYWNoIiwic2VnbWVudCIsImNyZWF0ZUJvdW5kcyIsImxhc3RTZWdtZW50IiwiaW5kZXgiLCJyZW1vdmVTZWdtZW50cyIsImxlbmd0aCIsImNsb3NlZCIsInJlbW92ZSIsInByb2plY3QiLCJsYXllcnMiLCIkJG1ldGFkYXRhIiwiYWRkQ2hpbGQiLCJib3VuZHMiLCJDaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJmaWxsQ29sb3IiLCJvcGFjaXR5Iiwib24iLCJlcXVhbHMiLCJjb250YWlucyIsIlJlY3RhbmdsZVRvb2wiLCJDb2xvciIsInN0YXJ0IiwiUmVjdGFuZ2xlIiwic2l6ZSIsInNlbGVjdGVkRmlsbENvbG9yIiwib2Zmc2V0Iiwic3VidHJhY3QiLCJhYnMiLCJDaXJjbGVUb29sIiwic2NhbGUiLCJnZXREaXN0YW5jZSIsIlNlZ21lbnRQYXRoVG9vbCIsIm1vZGlmaWVycyIsInNoaWZ0IiwiZ2V0UHJvcHMiLCJudW0xIiwibnVtMiIsImNhbGxBbGxIYW5kbGVycyIsImhhbmRsZXJzIiwiaGFuZGxlciIsIlBhbkFuZFNjcm9sbCIsIm9uV2hlZWwiLCJkZWx0YVkiLCJvblpvb20iLCJtZXJnZVByb3BzIiwic3RhdGUiLCJ6b29tIiwidmlld1Byb3BzIiwia2V5IiwiZHJhZ2dhYmxlIiwib25QYW5FbmFibGVkIiwiY2FudmFzUHJvcHMiLCJzZXRTdGF0ZSIsIm9uUGFuRGlzYWJsZWQiLCJkcmFnU3RhcnQiLCJ2aWV3IiwibXVsdGlwbHkiLCJ6b29tTGV2ZWwiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
