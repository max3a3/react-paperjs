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

      if (toolEvent.event.button === MOUSE_LEFT_CODE$1) {
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

      if (toolEvent.event.buttons === 1) {
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

      if (toolEvent.event.button === MOUSE_LEFT_CODE$3) {
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

      if (toolEvent.event.buttons === 1) {
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

      if (toolEvent.event.button === MOUSE_LEFT_CODE$4) {
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

      if (toolEvent.event.buttons === 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvUGF0aFRvb2wvUGF0aFRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvRnJlZWZvcm1QYXRoVG9vbC9GcmVlZm9ybVBhdGhUb29sLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9MaW5lVG9vbC9MaW5lVG9vbC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Qb2x5Z29uVG9vbC9Qb2x5Z29uVG9vbC5jb21wb25lbnQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGVUb29sL1JlY3RhbmdsZVRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ2lyY2xlVG9vbC9DaXJjbGVUb29sLmNvbXBvbmVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnRQYXRoVG9vbC9TZWdtZW50UGF0aFRvb2wuY29tcG9uZW50LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvUGFuQW5kWm9vbS9QYW5BbmRab29tLmNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBUb29sRXZlbnRIYW5kbGVyIH0gZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgUGFwZXJTY29wZSBhcyBQYXBlciwgUGF0aCwgU2VnbWVudCwgS2V5RXZlbnQgfSBmcm9tICdwYXBlcic7XG5cbnR5cGUgS2V5RXZlbnRIYW5kbGVyID0gKGV2ZW50OiBLZXlFdmVudCkgPT4gYW55XG50eXBlIFBhdGhFdmVudEhhbmRsZXIgPSAocGF0aDogUGF0aCkgPT4gYW55XG50eXBlIFNlZ21lbnRFdmVudEhhbmRsZXIgPSAoc2VnbWVudDogU2VnbWVudCB8IFNlZ21lbnRbXSkgPT4gYW55O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXBlcjogUGFwZXIsXG4gIG9uS2V5RG93bjogS2V5RXZlbnRIYW5kbGVyLFxuICBvbktleVVwOiBLZXlFdmVudEhhbmRsZXIsXG4gIG9uTW91c2VEb3duOiBUb29sRXZlbnRIYW5kbGVyLFxuICBvbk1vdXNlRHJhZzogVG9vbEV2ZW50SGFuZGxlcixcbiAgb25Nb3VzZVVwOiBUb29sRXZlbnRIYW5kbGVyLFxuICBvblBhdGhJbml0OiBQYXRoRXZlbnRIYW5kbGVyLFxuICBvblBhdGhBZGQ6IFBhdGhFdmVudEhhbmRsZXIsXG4gIG9uU2VnbWVudEFkZDogU2VnbWVudEV2ZW50SGFuZGxlcixcbiAgb25TZWdtZW50UmVtb3ZlOiBTZWdtZW50RXZlbnRIYW5kbGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoVG9vbDxQPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQICYgUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbktleURvd246ICgpID0+IHt9LFxuICAgIG9uS2V5VXA6ICgpID0+IHt9LFxuICAgIG9uTW91c2VEb3duOiAoKSA9PiB7fSxcbiAgICBvbk1vdXNlRHJhZzogKCkgPT4ge30sXG4gICAgb25Nb3VzZVVwOiAoKSA9PiB7fSxcbiAgICBvblBhdGhJbml0OiAoKSA9PiB7fSxcbiAgICBvblBhdGhBZGQ6ICgpID0+IHt9LFxuICAgIG9uU2VnbWVudEFkZDogKCkgPT4ge30sXG4gICAgb25TZWdtZW50UmVtb3ZlOiAoKSA9PiB7fSxcbiAgfVxuXG4gIHBhdGg6IFBhdGhcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgRnJlZWZvcm1QYXRoVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgfSxcbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCBwYXRoID0gbmV3IHBhcGVyLlBhdGgocGF0aFByb3BzKTtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICBvblBhdGhJbml0KHBhdGgpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VEcmFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9ucyA9PT0gMSkge1xuICAgICAgdGhpcy5wYXRoLmFkZCh0b29sRXZlbnQucG9pbnQpO1xuICAgIH1cbiAgICBvbk1vdXNlRHJhZyh0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZVVwID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25Nb3VzZVVwLCBvblBhdGhBZGQscGF0aFByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBvblBhdGhBZGQocGF0aCxwYXRoUHJvcHMpO1xuICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgb25Nb3VzZVVwKHRvb2xFdmVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aFByb3BzLCBvbk1vdXNlRG93biwgb25Nb3VzZURyYWcsIG9uTW91c2VVcCwgb25QYXRoQWRkLCBwYXBlciwgaW5uZXJSZWYsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgbWluRGlzdGFuY2U9ezEwfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZURyYWc9e3RoaXMub25Nb3VzZURyYWd9XG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbk1vdXNlVXB9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxGcmVlZm9ybVBhdGhUb29sIGlubmVyUmVmPXtyZWZ9IHsuLi5wcm9wc30gLz4pO1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0UGFwZXJKUyBmcm9tICdAcHN5Y2hvYm9sdC9yZWFjdC1wYXBlcmpzJztcblxuY29uc3QgeyBMYXllciwgR3JvdXAsIExpbmUgfSA9IFJlYWN0UGFwZXJKUztcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9wOiBudW1iZXIsXG4gIGxlZnQ6IG51bWJlcixcbiAgcmlnaHQ6IG51bWJlcixcbiAgYm90dG9tOiBudW1iZXIsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBjZWxsU2l6ZTogbnVtYmVyLFxuICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICBzdHJva2VXaWR0aDogbnVtYmVyLFxuICBpbm5lclJlZjogUmVhY3QuUmVmPHR5cGVvZiBMYXllcj5cbn07XG5cbmNvbnN0IEdyaWQgPSAoeyB3aWR0aCwgaGVpZ2h0LCB0b3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsIGJvdHRvbSA9IHRvcCArIGhlaWdodCwgY2VsbFNpemUgPSA1MCwgc3Ryb2tlQ29sb3IgPSAnI0QwRDBEMCcsIHN0cm9rZVdpZHRoID0gMSwgaW5uZXJSZWYgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeCA9IE1hdGguY2VpbChsZWZ0IC8gY2VsbFNpemUpICogY2VsbFNpemU7XG4gIGNvbnN0IHkgPSBNYXRoLmNlaWwodG9wIC8gY2VsbFNpemUpICogY2VsbFNpemU7XG4gIGNvbnN0IGNvbHMgPSBNYXRoLmNlaWwoKHJpZ2h0IC0gbGVmdCkgLyBjZWxsU2l6ZSk7XG4gIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoKGJvdHRvbSAtIHRvcCkgLyBjZWxsU2l6ZSk7XG4gIGNvbnN0IHZlcnRpY2FsTGluZXMgPSBbXTtcbiAgY29uc3QgaG9yaXpvbnRhbExpbmVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGNvbHM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0geCArIChpICogY2VsbFNpemUpO1xuICAgIHZlcnRpY2FsTGluZXMucHVzaCg8TGluZVxuICAgICAga2V5PXtpfVxuICAgICAgZnJvbT17W3Bvc2l0aW9uLCB0b3BdfVxuICAgICAgdG89e1twb3NpdGlvbiwgYm90dG9tXX1cbiAgICAgIHN0cm9rZUNvbG9yPXtzdHJva2VDb2xvcn1cbiAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAvPik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcm93czsgaSArPSAxKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB5ICsgKGkgKiBjZWxsU2l6ZSk7XG4gICAgaG9yaXpvbnRhbExpbmVzLnB1c2goPExpbmVcbiAgICAgIGtleT17aX1cbiAgICAgIGZyb209e1tsZWZ0LCBwb3NpdGlvbl19XG4gICAgICB0bz17W3JpZ2h0LCBwb3NpdGlvbl19XG4gICAgICBzdHJva2VDb2xvcj17c3Ryb2tlQ29sb3J9XG4gICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgLz4pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheWVyIHJlZj17aW5uZXJSZWZ9PlxuICAgICAgPEdyb3VwPlxuICAgICAgICB7dmVydGljYWxMaW5lc31cbiAgICAgIDwvR3JvdXA+XG4gICAgICA8R3JvdXA+XG4gICAgICAgIHtob3Jpem9udGFsTGluZXN9XG4gICAgICA8L0dyb3VwPlxuICAgIDwvTGF5ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8R3JpZCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgTGluZVRvb2wgZXh0ZW5kcyBQYXRoVG9vbDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLlBhdGhUb29sLmRlZmF1bHRQcm9wcyxcbiAgICBwYXRoUHJvcHM6IHtcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmxhY2snLFxuICAgIH0sXG4gIH07XG5cbiAgb25Nb3VzZURvd24gPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGhQcm9wcywgb25Nb3VzZURvd24sIG9uUGF0aEluaXQsIHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9uID09PSBNT1VTRV9MRUZUX0NPREUpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgcGFwZXIuUGF0aChwYXRoUHJvcHMpO1xuICAgICAgcGF0aC5hZGQodG9vbEV2ZW50LnBvaW50KTtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICBvblBhdGhJbml0KHBhdGgpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBvbk1vdXNlRHJhZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbnMgPT09IDEpIHtcbiAgICAgIHBhdGgucmVtb3ZlU2VnbWVudCgxKTtcbiAgICAgIHBhdGguYWRkU2VnbWVudCh0b29sRXZlbnQucG9pbnQpO1xuICAgICAgcGF0aC5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIG9uTW91c2VEcmFnKHRvb2xFdmVudCk7XG4gIH1cblxuICBvbk1vdXNlVXAgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBvbk1vdXNlVXAsIG9uUGF0aEFkZCxwYXRoUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGguc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIG9uUGF0aEFkZChwYXRoLHBhdGhQcm9wcyk7XG4gICAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIH1cbiAgICBvbk1vdXNlVXAodG9vbEV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvbk1vdXNlRHJhZywgb25Nb3VzZVVwLCBvblBhdGhBZGQsIGlubmVyUmVmLCAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uTW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlRHJhZz17dGhpcy5vbk1vdXNlRHJhZ31cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPExpbmVUb29sIGlubmVyUmVmPXtyZWZ9IHsuLi5wcm9wc30gLz4pO1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0UGFwZXJKUyBmcm9tICdAcHN5Y2hvYm9sdC9yZWFjdC1wYXBlcmpzJztcbmltcG9ydCB0eXBlb2YgeyBHcm91cCBhcyBQb2ludHMsIFNlZ21lbnQsIFRvb2xFdmVudCwgVG9vbCBhcyBUb29sVHlwZSB9IGZyb20gJ3BhcGVyJztcblxuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4uL3NoYXJlZC9QYXRoVG9vbCc7XG5cbmNvbnN0IHsgVG9vbCwgUGFwZXJTY29wZSB9ID0gUmVhY3RQYXBlckpTO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoUHJvcHM6IHtcbiAgICBzdHJva2VDb2xvcjogc3RyaW5nLFxuICB9LFxuICBwYXRoRGF0YTogc3RyaW5nLFxuICBpbm5lclJlZjogUmVhY3QuUmVmPFRvb2xUeXBlPlxufTtcblxuY29uc3QgTU9VU0VfTEVGVF9DT0RFID0gMDtcblxuLy8gJEZsb3dGaXhNZVxuQFBhcGVyU2NvcGVcbmNsYXNzIFBvbHlnb25Ub29sIGV4dGVuZHMgUGF0aFRvb2w8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5QYXRoVG9vbC5kZWZhdWx0UHJvcHMsXG4gICAgcGF0aFByb3BzOiB7XG4gICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgcGF0aCwgcG9pbnRzLCBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IHBhdGhQcm9wcywgcGF0aERhdGEgfSA9IHByb3BzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICB0aGlzLnNldFBhdGhEYXRhKHBhdGhEYXRhKTtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGF0aCwgcGF0aFByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHBvaW50cykge1xuICAgICAgdGhpcy5wYXRoSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC5idXR0b24gPT09IE1PVVNFX0xFRlRfQ09ERSkge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aEluaXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBhdGhJbml0KHBhdGgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTZWdtZW50ID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vblNlZ21lbnRBZGQodG9vbEV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25QYXRoQWRkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25Nb3VzZURvd24odG9vbEV2ZW50KTtcbiAgfVxuXG4gIHBhdGhJbml0KCkge1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBwYXRoRGF0YSwgcGFwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBQYXRoIH0gPSBwYXBlcjtcbiAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgocGF0aFByb3BzKTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuc2V0UGF0aERhdGEocGF0aERhdGEpO1xuICB9XG5cbiAgc2V0UGF0aERhdGEocGF0aERhdGE6IHN0cmluZykge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcztcbiAgICB0aGlzLnJlbW92ZUJvdW5kcygpO1xuICAgIHBhdGgucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgICBwYXRoLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB0aGlzLmNyZWF0ZUJvdW5kcyhzZWdtZW50KSk7XG4gIH1cblxuICBvblNlZ21lbnRBZGQodG9vbEV2ZW50OiBUb29sRXZlbnQpIHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgcGF0aC5hZGQodG9vbEV2ZW50LnBvaW50KTtcbiAgICBjb25zdCBzZWdtZW50ID0gcGF0aC5sYXN0U2VnbWVudDtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzZWdtZW50KTtcbiAgICB0aGlzLnByb3BzLm9uU2VnbWVudEFkZChzZWdtZW50LCBwYXRoKTtcbiAgfVxuXG4gIG9uUGF0aEFkZCgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkU2VnbWVudCwgcGF0aCwgcG9pbnRzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25TZWdtZW50UmVtb3ZlLCBvblBhdGhBZGQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gc2VsZWN0ZWRTZWdtZW50O1xuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5yZW1vdmVTZWdtZW50cygwLCBpbmRleCk7XG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgb25TZWdtZW50UmVtb3ZlKHNlZ21lbnRzLCBwYXRoKTtcbiAgICB9XG4gICAgcGF0aC5jbG9zZWQgPSB0cnVlO1xuICAgIHBhdGguc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBvblBhdGhBZGQocGF0aCxwYXRoUHJvcHMpO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFNlZ21lbnQgPSBudWxsO1xuICAgIGlmIChwb2ludHMpIHtcbiAgICAgIHBvaW50cy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCb3VuZHMoc2VnbWVudDogU2VnbWVudCkge1xuICAgIGNvbnN0IHsgcGFwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBQYXRoLCBHcm91cCwgcHJvamVjdCB9ID0gcGFwZXI7XG4gICAgY29uc3QgeyBwYXRoLCBwb2ludHMgfSA9IHRoaXM7XG4gICAgaWYgKCFwb2ludHMpIHtcbiAgICAgIHRoaXMucG9pbnRzID0gbmV3IEdyb3VwKCk7XG4gICAgICBwcm9qZWN0LmxheWVycy4kJG1ldGFkYXRhLmFkZENoaWxkKHRoaXMucG9pbnRzKTtcbiAgICB9XG4gICAgY29uc3QgYm91bmRzID0gbmV3IFBhdGguQ2lyY2xlKHtcbiAgICAgIGNlbnRlcjogc2VnbWVudC5wb2ludCxcbiAgICAgIHJhZGl1czogNyxcbiAgICAgIGZpbGxDb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSk7XG4gICAgYm91bmRzLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBpZiAoIXBhdGguY2xvc2VkXG4gICAgICAgICAgJiYgIXBhdGgubGFzdFNlZ21lbnQucG9pbnQuZXF1YWxzKGJvdW5kcy5wb3NpdGlvbilcbiAgICAgICAgICAmJiBwYXRoLmNvbnRhaW5zKGJvdW5kcy5wb3NpdGlvbikpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlZ21lbnQgPSBzZWdtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucG9pbnRzLmFkZENoaWxkKGJvdW5kcyk7XG4gIH1cblxuICByZW1vdmVCb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzKSB7XG4gICAgICB0aGlzLnBvaW50cy5yZW1vdmUoKTtcbiAgICAgIHRoaXMucG9pbnRzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwb2ludHM6IFBvaW50cztcblxuICBzZWxlY3RlZFNlZ21lbnQ6IFNlZ21lbnQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhQcm9wcywgb25Nb3VzZURvd24sIG9uUGF0aEFkZCwgb25TZWdtZW50QWRkLCBvblNlZ21lbnRSZW1vdmUsIHBhcGVyLCBpbm5lclJlZiwgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbFxuICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRG93bn1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPFBvbHlnb25Ub29sIGlubmVyUmVmPXtyZWZ9IHsuLi5wcm9wc30gLz4pO1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0UGFwZXJKUyBmcm9tICdAcHN5Y2hvYm9sdC9yZWFjdC1wYXBlcmpzJztcbmltcG9ydCB0eXBlb2YgeyBQb2ludCwgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIGZpbGxDb2xvcjogc3RyaW5nLFxuICB9LFxuICBpbm5lclJlZjogUmVhY3QuUmVmPFRvb2xUeXBlPlxufTtcblxuY29uc3QgTU9VU0VfTEVGVF9DT0RFID0gMDtcblxuLy8gJEZsb3dGaXhNZVxuQFBhcGVyU2NvcGVcbmNsYXNzIFJlY3RhbmdsZVRvb2wgZXh0ZW5kcyBQYXRoVG9vbDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLlBhdGhUb29sLmRlZmF1bHRQcm9wcyxcbiAgICBwYXRoUHJvcHM6IHtcbiAgICAgIGZpbGxDb2xvcjogJ3doaXRlJyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmxhY2snLFxuICAgIH0sXG4gIH1cblxuICBvbk1vdXNlRG93biA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBvbk1vdXNlRG93biwgb25QYXRoSW5pdCwgcGFwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC5idXR0b24gPT09IE1PVVNFX0xFRlRfQ09ERSkge1xuICAgICAgY29uc3QgeyBQYXRoLCBDb2xvciB9ID0gcGFwZXI7XG4gICAgICBjb25zdCBzdGFydCA9IHRvb2xFdmVudC5wb2ludDtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aC5SZWN0YW5nbGUoe1xuICAgICAgICBwb2ludDogc3RhcnQsXG4gICAgICAgIHNpemU6IFsxLCAxXSxcbiAgICAgICAgZmlsbENvbG9yOiBwYXRoUHJvcHMuc2VsZWN0ZWRGaWxsQ29sb3IgfHwgbmV3IENvbG9yKDAuOSwgMC45LCAxLCAwLjc1KSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICBvblBhdGhJbml0KHBhdGgpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bih0b29sRXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAodG9vbEV2ZW50OiBUb29sRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VEcmFnIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0b29sRXZlbnQuZXZlbnQuYnV0dG9ucyA9PT0gMSkge1xuICAgICAgY29uc3QgeyBwYXRoLCBzdGFydCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHsgYm91bmRzIH0gPSBwYXRoO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gdG9vbEV2ZW50LnBvaW50LnN1YnRyYWN0KHN0YXJ0KTtcbiAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5hYnMob2Zmc2V0LngpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5hYnMob2Zmc2V0LnkpO1xuICAgICAgaWYgKG9mZnNldC54IDwgMCkge1xuICAgICAgICBib3VuZHMubGVmdCA9IHRvb2xFdmVudC5wb2ludC54O1xuICAgICAgICBib3VuZHMucmlnaHQgPSBzdGFydC54O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm91bmRzLmxlZnQgPSBzdGFydC54O1xuICAgICAgfVxuICAgICAgaWYgKG9mZnNldC55ID4gMCkge1xuICAgICAgICBib3VuZHMudG9wID0gc3RhcnQueTtcbiAgICAgICAgYm91bmRzLmJvdHRvbSA9IHRvb2xFdmVudC5wb2ludC55O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm91bmRzLnRvcCA9IHRvb2xFdmVudC5wb2ludC55O1xuICAgICAgfVxuICAgICAgaWYgKHdpZHRoID4gMCkge1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIG9uTW91c2VEcmFnKHRvb2xFdmVudCk7XG4gIH1cblxuICBvbk1vdXNlVXAgPSAoZXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcztcbiAgICBjb25zdCB7IHBhdGhQcm9wcywgb25Nb3VzZVVwLCBvblBhdGhBZGQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGF0aCwge1xuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIC4uLnBhdGhQcm9wcyxcbiAgICAgIH0pO1xuICAgICAgb25QYXRoQWRkKHBhdGgscGF0aFByb3BzKTtcbiAgICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0OiBQb2ludDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uTW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlRHJhZz17dGhpcy5vbk1vdXNlRHJhZ31cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiA8UmVjdGFuZ2xlVG9vbCBpbm5lclJlZj17cmVmfSB7Li4ucHJvcHN9IC8+KTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdFBhcGVySlMgZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZW9mIHsgVG9vbEV2ZW50LCBUb29sIGFzIFRvb2xUeXBlIH0gZnJvbSAncGFwZXInO1xuXG5pbXBvcnQgUGF0aFRvb2wgZnJvbSAnLi4vc2hhcmVkL1BhdGhUb29sJztcblxuY29uc3QgeyBUb29sLCBQYXBlclNjb3BlIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdGhQcm9wczoge1xuICAgIGZpbGxDb2xvcjogc3RyaW5nLFxuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcsXG4gIH0sXG4gIGlubmVyUmVmOiBSZWFjdC5SZWY8VG9vbFR5cGU+XG59O1xuXG5jb25zdCBNT1VTRV9MRUZUX0NPREUgPSAwO1xuXG4vLyAkRmxvd0ZpeE1lXG5AUGFwZXJTY29wZVxuY2xhc3MgQ2lyY2xlVG9vbCBleHRlbmRzIFBhdGhUb29sPFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uUGF0aFRvb2wuZGVmYXVsdFByb3BzLFxuICAgIHBhdGhQcm9wczoge1xuICAgICAgZmlsbENvbG9yOiAnd2hpdGUnLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibGFjaycsXG4gICAgfSxcbiAgfVxuXG4gIG9uTW91c2VEb3duID0gKHRvb2xFdmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoUHJvcHMsIG9uTW91c2VEb3duLCBvblBhdGhJbml0LCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFKSB7XG4gICAgICBjb25zdCB7IFBhdGgsIENvbG9yIH0gPSBwYXBlcjtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgICBjZW50ZXI6IHRvb2xFdmVudC5wb2ludCxcbiAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICBmaWxsQ29sb3I6IHBhdGhQcm9wcy5zZWxlY3RlZEZpbGxDb2xvciB8fCBuZXcgQ29sb3IoMC45LCAwLjksIDEsIDAuNzUpLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIG9uUGF0aEluaXQocGF0aCk7XG4gICAgfVxuICAgIG9uTW91c2VEb3duKHRvb2xFdmVudCk7XG4gIH1cblxuICBvbk1vdXNlRHJhZyA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25Nb3VzZURyYWcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRvb2xFdmVudC5ldmVudC5idXR0b25zID09PSAxKSB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IHRoaXM7XG4gICAgICBwYXRoLnNjYWxlKHRvb2xFdmVudC5wb2ludC5nZXREaXN0YW5jZShwYXRoLnBvc2l0aW9uKSAvIChwYXRoLmJvdW5kcy53aWR0aCAvIDIpKTtcbiAgICB9XG4gICAgb25Nb3VzZURyYWcodG9vbEV2ZW50KTtcbiAgfVxuXG4gIG9uTW91c2VVcCA9IChldmVudDogVG9vbEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBvbk1vdXNlVXAsIG9uUGF0aEFkZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocGF0aCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXRoLCB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgLi4ucGF0aFByb3BzLFxuICAgICAgfSk7XG4gICAgICBvblBhdGhBZGQocGF0aCxwYXRoUHJvcHMpO1xuICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlubmVyUmVmLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbFxuICAgICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIG9uTW91c2VEcmFnPXt0aGlzLm9uTW91c2VEcmFnfVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMub25Nb3VzZVVwfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxDaXJjbGVUb29sIGlubmVyUmVmPXtyZWZ9IHsuLi5wcm9wc30gLz4pO1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0UGFwZXJKUyBmcm9tICdAcHN5Y2hvYm9sdC9yZWFjdC1wYXBlcmpzJztcbmltcG9ydCB0eXBlb2YgeyBUb29sRXZlbnQsIFRvb2wgYXMgVG9vbFR5cGUgfSBmcm9tICdwYXBlcic7XG5cbmltcG9ydCBQYXRoVG9vbCBmcm9tICcuLi9zaGFyZWQvUGF0aFRvb2wnO1xuXG5jb25zdCB7IFRvb2wsIFBhcGVyU2NvcGUgfSA9IFJlYWN0UGFwZXJKUztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGF0aFByb3BzOiB7XG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZyxcbiAgfSxcbiAgcGF0aERhdGE6IHN0cmluZyxcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZjxUb29sVHlwZT5cbn07XG5cbmNvbnN0IE1PVVNFX0xFRlRfQ09ERSA9IDA7XG5cbi8vICRGbG93Rml4TWVcbkBQYXBlclNjb3BlXG5jbGFzcyBTZWdtZW50UGF0aFRvb2wgZXh0ZW5kcyBQYXRoVG9vbDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLlBhdGhUb29sLmRlZmF1bHRQcm9wcyxcbiAgICBwYXRoUHJvcHM6IHtcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmxhY2snLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBvbktleVVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCwgb25QYXRoQWRkIH0gPSB0aGlzO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBpZiAocGF0aC5zZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9uUGF0aEFkZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93biA9ICh0b29sRXZlbnQ6IFRvb2xFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcztcbiAgICBpZiAodG9vbEV2ZW50LmV2ZW50LmJ1dHRvbiA9PT0gTU9VU0VfTEVGVF9DT0RFICYmIHRvb2xFdmVudC5tb2RpZmllcnMuc2hpZnQpIHtcbiAgICAgIGlmICghcGF0aCkge1xuICAgICAgICB0aGlzLnBhdGhJbml0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25QYXRoSW5pdChwYXRoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25TZWdtZW50QWRkKHRvb2xFdmVudCk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25Nb3VzZURvd24odG9vbEV2ZW50KTtcbiAgfVxuXG4gIHBhdGhJbml0KCkge1xuICAgIGNvbnN0IHsgcGF0aFByb3BzLCBwYXRoRGF0YSwgcGFwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBQYXRoIH0gPSBwYXBlcjtcbiAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgocGF0aFByb3BzKTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuc2V0UGF0aERhdGEocGF0aERhdGEpO1xuICB9XG5cbiAgc2V0UGF0aERhdGEocGF0aERhdGE6IHN0cmluZykge1xuICAgIHRoaXMucGF0aC5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICB9XG5cbiAgb25TZWdtZW50QWRkKHRvb2xFdmVudDogVG9vbEV2ZW50KSB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIHBhdGguYWRkKHRvb2xFdmVudC5wb2ludCk7XG4gICAgdGhpcy5wcm9wcy5vblNlZ21lbnRBZGQocGF0aC5sYXN0U2VnbWVudCwgcGF0aCk7XG4gIH1cblxuICBvblBhdGhBZGQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgb25QYXRoQWRkLHBhdGhQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBwYXRoLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgb25QYXRoQWRkKHBhdGgscGF0aFByb3BzKTtcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhQcm9wcyxcbiAgICAgIG9uS2V5VXAsXG4gICAgICBvbk1vdXNlRG93bixcbiAgICAgIG9uUGF0aEFkZCxcbiAgICAgIG9uU2VnbWVudEFkZCxcbiAgICAgIG9uU2VnbWVudFJlbW92ZSxcbiAgICAgIHBhcGVyLFxuICAgICAgaW5uZXJSZWYsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcH1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IDxTZWdtZW50UGF0aFRvb2wgaW5uZXJSZWY9e3JlZn0gey4uLnByb3BzfSAvPik7XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RQYXBlckpTIGZyb20gJ0Bwc3ljaG9ib2x0L3JlYWN0LXBhcGVyanMnO1xuaW1wb3J0IHR5cGUgeyBQYXBlciwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQHBzeWNob2JvbHQvcmVhY3QtcGFwZXJqcyc7XG5pbXBvcnQgdHlwZSB7IEtleUV2ZW50LCBNb3VzZUV2ZW50IH0gZnJvbSAncGFwZXInO1xuXG5jb25zdCB7IFBhcGVyU2NvcGUsIGdldFByb3BzIH0gPSBSZWFjdFBhcGVySlM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uUGFuRW5hYmxlZD86ICgpID0+IGFueSxcbiAgb25QYW5EaXNhYmxlZD86ICgpID0+IGFueSxcbiAgb25ab29tPzogKGxldmVsOiBudW1iZXIpID0+IGFueSxcbiAgem9vbUxldmVsPzogbnVtYmVyLFxuICBjZW50ZXI6IE9iamVjdCB8IG51bWJlcltdLFxuICBwYXBlcjogUGFwZXIsXG4gIG1lcmdlUHJvcHM6IChzdGF0ZToge30sIHByb3BzPzoge30pID0+IHt9LFxuICBjaGlsZHJlbjogYW55LFxufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgZHJhZ2dhYmxlOiBib29sZWFuLFxuICBkcmFnU3RhcnQ6ID9PYmplY3QsXG59O1xuXG5mdW5jdGlvbiBhZGQobnVtMSwgbnVtMikge1xuICByZXR1cm4gKChudW0xICogMTApICsgKG51bTIgKiAxMCkpIC8gMTA7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGxIYW5kbGVycyhoYW5kbGVyczogRXZlbnRIYW5kbGVyW10gPSBbXSkge1xuICByZXR1cm4gZXZlbnQgPT4gaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIgJiYgaGFuZGxlcihldmVudCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBAUGFwZXJTY29wZSBjbGFzcyBQYW5BbmRTY3JvbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgem9vbUxldmVsOiAxLFxuICAgIG9uUGFuRW5hYmxlZDogKCkgPT4ge30sXG4gICAgb25QYW5EaXNhYmxlZDogKCkgPT4ge30sXG4gICAgb25ab29tOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBkcmFnU3RhcnQ6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFwZXIsIHpvb21MZXZlbCwgY2VudGVyLCBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBvbldoZWVsLCAuLi5jYW52YXNQcm9wcyB9ID0gZ2V0UHJvcHMocGFwZXIsIHByb3BzLmNhbnZhc1Byb3BzKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb25LZXlEb3duLCBvbktleVVwLCBvbk1vdXNlRG93biwgb25Nb3VzZURyYWcsIG9uTW91c2VVcCwgLi4udmlld1Byb3BzXG4gICAgICB9ID0gZ2V0UHJvcHMocGFwZXIsIHByb3BzLnZpZXdQcm9wcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW52YXNQcm9wczoge1xuICAgICAgICAgIC4uLmNhbnZhc1Byb3BzLFxuICAgICAgICAgIG9uV2hlZWw6IGNhbGxBbGxIYW5kbGVycyhbb25XaGVlbCwgdGhpcy5vbldoZWVsXSksXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZGlzYWJsZWQnLFxuICAgICAgICB9LFxuICAgICAgICB2aWV3UHJvcHM6IHtcbiAgICAgICAgICAuLi52aWV3UHJvcHMsXG4gICAgICAgICAgb25LZXlEb3duOiBjYWxsQWxsSGFuZGxlcnMoW29uS2V5RG93biwgdGhpcy5vbktleURvd25dKSxcbiAgICAgICAgICBvbktleVVwOiBjYWxsQWxsSGFuZGxlcnMoW29uS2V5VXAsIHRoaXMub25LZXlVcF0pLFxuICAgICAgICAgIG9uTW91c2VEb3duOiBjYWxsQWxsSGFuZGxlcnMoW29uTW91c2VEb3duLCB0aGlzLm9uTW91c2VEb3duXSksXG4gICAgICAgICAgb25Nb3VzZURyYWc6IGNhbGxBbGxIYW5kbGVycyhbb25Nb3VzZURyYWcsIHRoaXMub25Nb3VzZURyYWddKSxcbiAgICAgICAgICBvbk1vdXNlVXA6IGNhbGxBbGxIYW5kbGVycyhbb25Nb3VzZVVwLCB0aGlzLm9uTW91c2VVcF0pLFxuICAgICAgICAgIHpvb206IHpvb21MZXZlbCxcbiAgICAgICAgICBjZW50ZXIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgb25XaGVlbCA9ICh7IGRlbHRhWSB9OiBTeW50aGV0aWNXaGVlbEV2ZW50PEhUTUxDYW52YXNFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25ab29tLCBtZXJnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgbGV0IHsgem9vbSB9ID0gc3RhdGUudmlld1Byb3BzO1xuICAgICAgaWYgKGRlbHRhWSA8IDApIHtcbiAgICAgICAgem9vbSA9IGFkZCh6b29tLCAwLjEpO1xuICAgICAgICBvblpvb20oem9vbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmlld1Byb3BzOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy52aWV3UHJvcHMsXG4gICAgICAgICAgICAuLi5zdGF0ZS52aWV3UHJvcHMsXG4gICAgICAgICAgICB6b29tLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoZGVsdGFZID4gMCAmJiB6b29tID4gMC4xKSB7XG4gICAgICAgIHpvb20gPSBhZGQoem9vbSwgLTAuMSk7XG4gICAgICAgIG9uWm9vbSh6b29tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2aWV3UHJvcHM6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLnZpZXdQcm9wcyxcbiAgICAgICAgICAgIC4uLnN0YXRlLnZpZXdQcm9wcyxcbiAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgb25LZXlEb3duID0gKHsga2V5IH06IEtleUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBkcmFnZ2FibGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGtleSA9PT0gJ3NwYWNlJyAmJiAhZHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCB7IG9uUGFuRW5hYmxlZCwgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgLi4uc3RhdGUuY2FudmFzUHJvcHMsXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZW5hYmxlZCcsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dhYmxlOiB0cnVlIH0pO1xuICAgICAgb25QYW5FbmFibGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcCA9ICh7IGtleSB9OiBLZXlFdmVudCkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdzcGFjZScpIHtcbiAgICAgIGNvbnN0IHsgb25QYW5EaXNhYmxlZCwgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgLi4uc3RhdGUuY2FudmFzUHJvcHMsXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZGlzYWJsZWQnLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYWdnYWJsZTogZmFsc2UgfSk7XG4gICAgICBvblBhbkRpc2FibGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24gPSAoeyBwb2ludCB9OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBkcmFnZ2FibGUsIGRyYWdTdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZHJhZ2dhYmxlICYmICFkcmFnU3RhcnQpIHtcbiAgICAgIGNvbnN0IHsgbWVyZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhbnZhc1Byb3BzOiB7XG4gICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgLi4uc3RhdGUuY2FudmFzUHJvcHMsXG4gICAgICAgICAgJ2RyYWctc3RhdGUnOiAnZHJhZ2dpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYWdTdGFydDogcG9pbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZHJhZ1N0YXJ0LCBkcmFnZ2FibGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGRyYWdTdGFydCkge1xuICAgICAgaWYgKGRyYWdnYWJsZSkge1xuICAgICAgICBjb25zdCB7IG1lcmdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYW52YXNQcm9wczoge1xuICAgICAgICAgICAgLi4ucHJvcHMuY2FudmFzUHJvcHMsXG4gICAgICAgICAgICAuLi5zdGF0ZS5jYW52YXNQcm9wcyxcbiAgICAgICAgICAgICdkcmFnLXN0YXRlJzogJ2VuYWJsZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnU3RhcnQ6IG51bGwgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURyYWcgPSAoeyBwb2ludCB9OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBtZXJnZVByb3BzLCBwYXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRyYWdnYWJsZSwgZHJhZ1N0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIG1lcmdlUHJvcHMoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgaWYgKGRyYWdTdGFydCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpZXdQcm9wczoge1xuICAgICAgICAgICAgLi4ucHJvcHMudmlld1Byb3BzLFxuICAgICAgICAgICAgLi4uc3RhdGUudmlld1Byb3BzLFxuICAgICAgICAgICAgY2VudGVyOlxuICAgICAgICAgICAgICBwYXBlci52aWV3LmNlbnRlclxuICAgICAgICAgICAgICAgIC5hZGQocG9pbnQuc3VidHJhY3QoZHJhZ1N0YXJ0KVxuICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KDAuNSkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICBpZiAoZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ1N0YXJ0OiBwb2ludCB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXRoVG9vbCIsInBhdGgiLCJSZWFjdCIsImRlZmF1bHRQcm9wcyIsIm9uS2V5RG93biIsIm9uS2V5VXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VEcmFnIiwib25Nb3VzZVVwIiwib25QYXRoSW5pdCIsIm9uUGF0aEFkZCIsIm9uU2VnbWVudEFkZCIsIm9uU2VnbWVudFJlbW92ZSIsIlRvb2wiLCJSZWFjdFBhcGVySlMiLCJQYXBlclNjb3BlIiwiTU9VU0VfTEVGVF9DT0RFIiwiRnJlZWZvcm1QYXRoVG9vbCIsInRvb2xFdmVudCIsInByb3BzIiwicGF0aFByb3BzIiwicGFwZXIiLCJldmVudCIsImJ1dHRvbiIsIlBhdGgiLCJidXR0b25zIiwiYWRkIiwicG9pbnQiLCJpbm5lclJlZiIsInJlc3QiLCJSZWFjdC5jcmVhdGVFbGVtZW50Iiwic3Ryb2tlQ29sb3IiLCJyZWYiLCJMYXllciIsIkdyb3VwIiwiTGluZSIsIkdyaWQiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImNlbGxTaXplIiwic3Ryb2tlV2lkdGgiLCJ4IiwiTWF0aCIsImNlaWwiLCJ5IiwiY29scyIsInJvd3MiLCJ2ZXJ0aWNhbExpbmVzIiwiaG9yaXpvbnRhbExpbmVzIiwiaSIsInBvc2l0aW9uIiwicHVzaCIsIkxpbmVUb29sIiwicmVtb3ZlU2VnbWVudCIsImFkZFNlZ21lbnQiLCJzZWxlY3RlZCIsIlBvbHlnb25Ub29sIiwicGF0aEluaXQiLCJzZWxlY3RlZFNlZ21lbnQiLCJwb2ludHMiLCJwYXRoRGF0YSIsInNldFBhdGhEYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwicmVtb3ZlQm91bmRzIiwic2VnbWVudHMiLCJmb3JFYWNoIiwic2VnbWVudCIsImNyZWF0ZUJvdW5kcyIsImxhc3RTZWdtZW50IiwiaW5kZXgiLCJyZW1vdmVTZWdtZW50cyIsImxlbmd0aCIsImNsb3NlZCIsInJlbW92ZSIsInByb2plY3QiLCJsYXllcnMiLCIkJG1ldGFkYXRhIiwiYWRkQ2hpbGQiLCJib3VuZHMiLCJDaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJmaWxsQ29sb3IiLCJvcGFjaXR5Iiwib24iLCJlcXVhbHMiLCJjb250YWlucyIsIlJlY3RhbmdsZVRvb2wiLCJDb2xvciIsInN0YXJ0IiwiUmVjdGFuZ2xlIiwic2l6ZSIsInNlbGVjdGVkRmlsbENvbG9yIiwib2Zmc2V0Iiwic3VidHJhY3QiLCJhYnMiLCJDaXJjbGVUb29sIiwic2NhbGUiLCJnZXREaXN0YW5jZSIsIlNlZ21lbnRQYXRoVG9vbCIsIm1vZGlmaWVycyIsInNoaWZ0IiwiZ2V0UHJvcHMiLCJudW0xIiwibnVtMiIsImNhbGxBbGxIYW5kbGVycyIsImhhbmRsZXJzIiwiaGFuZGxlciIsIlBhbkFuZFNjcm9sbCIsIm9uV2hlZWwiLCJkZWx0YVkiLCJvblpvb20iLCJtZXJnZVByb3BzIiwic3RhdGUiLCJ6b29tIiwidmlld1Byb3BzIiwia2V5IiwiZHJhZ2dhYmxlIiwib25QYW5FbmFibGVkIiwiY2FudmFzUHJvcHMiLCJzZXRTdGF0ZSIsIm9uUGFuRGlzYWJsZWQiLCJkcmFnU3RhcnQiLCJ2aWV3IiwibXVsdGlwbHkiLCJ6b29tTGV2ZWwiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQnFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFhbkJDOzs7OztFQWJ1Q0M7O0FBQXBCRixTQUNaRyxlQUFlO0VBQ3BCQyxTQUFTLEVBQUUscUJBQU0sRUFERztFQUVwQkMsT0FBTyxFQUFFLG1CQUFNLEVBRks7RUFHcEJDLFdBQVcsRUFBRSx1QkFBTSxFQUhDO0VBSXBCQyxXQUFXLEVBQUUsdUJBQU0sRUFKQztFQUtwQkMsU0FBUyxFQUFFLHFCQUFNLEVBTEc7RUFNcEJDLFVBQVUsRUFBRSxzQkFBTSxFQU5FO0VBT3BCQyxTQUFTLEVBQUUscUJBQU0sRUFQRztFQVFwQkMsWUFBWSxFQUFFLHdC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
