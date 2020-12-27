"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),ReactPaperJS=require("@psychobolt/react-paperjs");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(e){_defineProperty(t,e,o[e])})}return t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],0<=t.indexOf(o)||(r[o]=e[o]);return r}function _objectWithoutProperties(e,t){if(null==e)return{};var o,n,r=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}var _class,_class2,_temp,PathTool=function(){function a(){var e,t;_classCallCheck(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(a)).call.apply(e,[this].concat(n)))).path=void 0,t}return _inherits(a,React.Component),a}();PathTool.defaultProps={onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},onMouseDrag:function(){},onMouseUp:function(){},onPathInit:function(){},onPathAdd:function(){},onSegmentAdd:function(){},onSegmentRemove:function(){}};var _class$1,_class2$1,_temp$1,_class$2,_class2$2,_temp$2,_class$3,_class2$3,_temp$3,_class$4,_class2$4,_temp$4,_class$5,_class2$5,_temp$5,_class$6,_class2$6,_temp$6,Tool=ReactPaperJS.Tool,PaperScope=ReactPaperJS.PaperScope,MOUSE_LEFT_CODE=0,FreeformPathTool=PaperScope((_temp=_class2=function(){function r(){var e,p;_classCallCheck(this,r);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(p=_possibleConstructorReturn(this,(e=_getPrototypeOf(r)).call.apply(e,[this].concat(o)))).onMouseDown=function(e){var t=p.props,o=t.pathProps,n=t.onMouseDown,r=t.onPathInit,a=t.paper;if(e.event.button===MOUSE_LEFT_CODE){var s=new a.Path(o);r(p.path=s)}n(e)},p.onMouseDrag=function(e){var t=p.props.onMouseDrag;1===e.event.buttons&&p.path.add(e.point),t(e)},p.onMouseUp=function(e){var t=_assertThisInitialized(p).path,o=p.props,n=o.onMouseUp,r=o.onPathAdd,a=o.pathProps;t&&(r(t,a),p.path=null),n(e)},p}return _inherits(r,PathTool),_createClass(r,[{key:"render",value:function(){var e=this.props,t=(e.pathProps,e.onMouseDown,e.onMouseDrag,e.onMouseUp,e.onPathAdd,e.paper,e.innerRef),o=_objectWithoutProperties(e,["pathProps","onMouseDown","onMouseDrag","onMouseUp","onPathAdd","paper","innerRef"]);return React.createElement(Tool,_extends({ref:t,minDistance:10,onMouseDown:this.onMouseDown,onMouseDrag:this.onMouseDrag,onMouseUp:this.onMouseUp},o))}}]),r}(),_class2.defaultProps=_objectSpread({},PathTool.defaultProps,{pathProps:{strokeColor:"black"}}),_class=_temp))||_class,FreeformPathTool_component=React.forwardRef(function(e,t){return React.createElement(FreeformPathTool,_extends({innerRef:t},e))}),Layer=ReactPaperJS.Layer,Group=ReactPaperJS.Group,Line=ReactPaperJS.Line,Grid=function(e){for(var t=e.width,o=e.height,n=e.top,r=void 0===n?0:n,a=e.left,s=void 0===a?0:a,p=e.right,i=void 0===p?s+t:p,l=e.bottom,c=void 0===l?r+o:l,u=e.cellSize,h=void 0===u?50:u,d=e.strokeColor,f=void 0===d?"#D0D0D0":d,P=e.strokeWidth,_=void 0===P?1:P,v=e.innerRef,g=Math.ceil(s/h)*h,m=Math.ceil(r/h)*h,S=Math.ceil((i-s)/h),b=Math.ceil((c-r)/h),y=[],M=[],w=0;w<=S;w+=1){var D=g+w*h;y.push(React.createElement(Line,{key:w,from:[D,r],to:[D,c],strokeColor:f,strokeWidth:_}))}for(var R=0;R<=b;R+=1){var T=m+R*h;M.push(React.createElement(Line,{key:R,from:[s,T],to:[i,T],strokeColor:f,strokeWidth:_}))}return React.createElement(Layer,{ref:v},React.createElement(Group,null,y),React.createElement(Group,null,M))},Grid_component=React.forwardRef(function(e,t){return React.createElement(Grid,_extends({innerRef:t},e))}),Tool$1=ReactPaperJS.Tool,PaperScope$1=ReactPaperJS.PaperScope,MOUSE_LEFT_CODE$1=0,LineTool=PaperScope$1((_temp$1=_class2$1=function(){function r(){var e,p;_classCallCheck(this,r);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(p=_possibleConstructorReturn(this,(e=_getPrototypeOf(r)).call.apply(e,[this].concat(o)))).onMouseDown=function(e){var t=p.props,o=t.pathProps,n=t.onMouseDown,r=t.onPathInit,a=t.paper;if(e.event.button===MOUSE_LEFT_CODE$1){var s=new a.Path(o);s.add(e.point),r(p.path=s)}n(e)},p.onMouseDrag=function(e){var t=_assertThisInitialized(p).path,o=p.props.onMouseDrag;1===e.event.buttons&&(t.removeSegment(1),t.addSegment(e.point),t.selected=!0),o(e)},p.onMouseUp=function(e){var t=_assertThisInitialized(p).path,o=p.props,n=o.onMouseUp,r=o.onPathAdd,a=o.pathProps;t&&(t.selected=!1,r(t,a),p.path=null),n(e)},p}return _inherits(r,PathTool),_createClass(r,[{key:"render",value:function(){var e=this.props,t=(e.pathProps,e.onMouseDown,e.onMouseDrag,e.onMouseUp,e.onPathAdd,e.innerRef),o=_objectWithoutProperties(e,["pathProps","onMouseDown","onMouseDrag","onMouseUp","onPathAdd","innerRef"]);return React.createElement(Tool$1,_extends({ref:t,onMouseDown:this.onMouseDown,onMouseDrag:this.onMouseDrag,onMouseUp:this.onMouseUp},o))}}]),r}(),_class2$1.defaultProps=_objectSpread({},PathTool.defaultProps,{pathProps:{strokeColor:"black"}}),_class$1=_temp$1))||_class$1,LineTool_component=React.forwardRef(function(e,t){return React.createElement(LineTool,_extends({innerRef:t},e))}),Tool$2=ReactPaperJS.Tool,PaperScope$2=ReactPaperJS.PaperScope,MOUSE_LEFT_CODE$2=0,PolygonTool=PaperScope$2((_temp$2=_class2$2=function(){function a(){var e,o;_classCallCheck(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(o=_possibleConstructorReturn(this,(e=_getPrototypeOf(a)).call.apply(e,[this].concat(n)))).onMouseDown=function(e){if(e.event.button===MOUSE_LEFT_CODE$2){var t=_assertThisInitialized(o).path;t||(o.pathInit(),o.props.onPathInit(t)),null==o.selectedSegment?o.onSegmentAdd(e):o.onPathAdd()}o.props.onMouseDown(e)},o.points=void 0,o.selectedSegment=void 0,o}return _inherits(a,PathTool),_createClass(a,[{key:"componentDidUpdate",value:function(){var e=this.path,t=this.points,o=this.props,n=o.pathProps,r=o.pathData;e?(this.setPathData(r),Object.assign(e,n)):t&&this.pathInit()}},{key:"pathInit",value:function(){var e=this.props,t=e.pathProps,o=e.pathData,n=new e.paper.Path(t);this.path=n,this.setPathData(o)}},{key:"setPathData",value:function(e){var t=this,o=this.path;this.removeBounds(),o.pathData=e,o.segments.forEach(function(e){return t.createBounds(e)})}},{key:"onSegmentAdd",value:function(e){var t=this.path;t.add(e.point);var o=t.lastSegment;this.createBounds(o),this.props.onSegmentAdd(o,t)}},{key:"onPathAdd",value:function(){var e=this.selectedSegment,t=this.path,o=this.points,n=this.props,r=n.onSegmentRemove,a=n.onPathAdd,s=e.index,p=t.removeSegments(0,s);p.length&&r(p,t),t.closed=!0,t.selected=!1,a(t,pathProps),this.path=null,this.selectedSegment=null,o&&o.remove()}},{key:"createBounds",value:function(e){var t=this,o=this.props.paper,n=o.Path,r=o.Group,a=o.project,s=this.path;this.points||(this.points=new r,a.layers.$$metadata.addChild(this.points));var p=new n.Circle({center:e.point,radius:7,fillColor:"white",opacity:0});p.on("mousedown",function(){s.closed||s.lastSegment.point.equals(p.position)||!s.contains(p.position)||(t.selectedSegment=e)}),this.points.addChild(p)}},{key:"removeBounds",value:function(){this.points&&(this.points.remove(),this.points=null)}},{key:"render",value:function(){var e=this.props,t=(e.pathProps,e.onMouseDown,e.onPathAdd,e.onSegmentAdd,e.onSegmentRemove,e.paper,e.innerRef),o=_objectWithoutProperties(e,["pathProps","onMouseDown","onPathAdd","onSegmentAdd","onSegmentRemove","paper","innerRef"]);return React.createElement(Tool$2,_extends({ref:t,onMouseDown:this.onMouseDown},o))}}]),a}(),_class2$2.defaultProps=_objectSpread({},PathTool.defaultProps,{pathProps:{strokeColor:"black",selected:!0}}),_class$2=_temp$2))||_class$2,PolygonTool_component=React.forwardRef(function(e,t){return React.createElement(PolygonTool,_extends({innerRef:t},e))}),Tool$3=ReactPaperJS.Tool,PaperScope$3=ReactPaperJS.PaperScope,MOUSE_LEFT_CODE$3=0,RectangleTool=PaperScope$3((_temp$3=_class2$3=function(){function r(){var e,c;_classCallCheck(this,r);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(c=_possibleConstructorReturn(this,(e=_getPrototypeOf(r)).call.apply(e,[this].concat(o)))).onMouseDown=function(e){var t=c.props,o=t.pathProps,n=t.onMouseDown,r=t.onPathInit,a=t.paper;if(e.event.button===MOUSE_LEFT_CODE$3){var s=a.Path,p=a.Color,i=e.point,l=new s.Rectangle({point:i,size:[1,1],fillColor:o.selectedFillColor||new p(.9,.9,1,.75),selected:!0});c.path=l,c.start=i,r(l)}n(e)},c.onMouseDrag=function(e){var t=c.props.onMouseDrag;if(1===e.event.buttons){var o=_assertThisInitialized(c),n=o.path,r=o.start,a=n.bounds,s=e.point.subtract(r),p=Math.abs(s.x),i=Math.abs(s.y);s.x<0?(a.left=e.point.x,a.right=r.x):a.left=r.x,0<s.y?(a.top=r.y,a.bottom=e.point.y):a.top=e.point.y,0<p&&(a.width=p),0<i&&(a.height=i)}t(e)},c.onMouseUp=function(e){var t=_assertThisInitialized(c).path,o=c.props,n=o.pathProps,r=o.onMouseUp,a=o.onPathAdd;t&&(Object.assign(t,_objectSpread({selected:!1},n)),a(t,n),c.path=null,c.start=null),r(e)},c.start=void 0,c}return _inherits(r,PathTool),_createClass(r,[{key:"render",value:function(){var e=this.props,t=e.innerRef,o=_objectWithoutProperties(e,["innerRef"]);return React.createElement(Tool$3,_extends({},o,{ref:t,onMouseDown:this.onMouseDown,onMouseDrag:this.onMouseDrag,onMouseUp:this.onMouseUp}))}}]),r}(),_class2$3.defaultProps=_objectSpread({},PathTool.defaultProps,{pathProps:{fillColor:"white",strokeColor:"black"}}),_class$3=_temp$3))||_class$3,RectangleTool_component=React.forwardRef(function(e,t){return React.createElement(RectangleTool,_extends({innerRef:t},e))}),Tool$4=ReactPaperJS.Tool,PaperScope$4=ReactPaperJS.PaperScope,MOUSE_LEFT_CODE$4=0,CircleTool=PaperScope$4((_temp$4=_class2$4=function(){function r(){var e,l;_classCallCheck(this,r);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(l=_possibleConstructorReturn(this,(e=_getPrototypeOf(r)).call.apply(e,[this].concat(o)))).onMouseDown=function(e){var t=l.props,o=t.pathProps,n=t.onMouseDown,r=t.onPathInit,a=t.paper;if(e.event.button===MOUSE_LEFT_CODE$4){var s=a.Path,p=a.Color,i=new s.Circle({center:e.point,radius:1,fillColor:o.selectedFillColor||new p(.9,.9,1,.75),selected:!0});r(l.path=i)}n(e)},l.onMouseDrag=function(e){var t=l.props.onMouseDrag;if(1===e.event.buttons){var o=_assertThisInitialized(l).path;o.scale(e.point.getDistance(o.position)/(o.bounds.width/2))}t(e)},l.onMouseUp=function(e){var t=_assertThisInitialized(l).path,o=l.props,n=o.pathProps,r=o.onMouseUp,a=o.onPathAdd;t&&(Object.assign(t,_objectSpread({selected:!1},n)),a(t,n),l.path=null),r(e)},l}return _inherits(r,PathTool),_createClass(r,[{key:"render",value:function(){var e=this.props,t=e.innerRef,o=_objectWithoutProperties(e,["innerRef"]);return React.createElement(Tool$4,_extends({ref:t},o,{onMouseDown:this.onMouseDown,onMouseDrag:this.onMouseDrag,onMouseUp:this.onMouseUp}))}}]),r}(),_class2$4.defaultProps=_objectSpread({},PathTool.defaultProps,{pathProps:{fillColor:"white",strokeColor:"black"}}),_class$4=_temp$4))||_class$4,CircleTool_component=React.forwardRef(function(e,t){return React.createElement(CircleTool,_extends({innerRef:t},e))}),Tool$5=ReactPaperJS.Tool,PaperScope$5=ReactPaperJS.PaperScope,MOUSE_LEFT_CODE$5=0,SegmentPathTool=PaperScope$5((_temp$5=_class2$5=function(){function a(){var e,r;_classCallCheck(this,a);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(r=_possibleConstructorReturn(this,(e=_getPrototypeOf(a)).call.apply(e,[this].concat(o)))).onKeyUp=function(){var e=_assertThisInitialized(r),t=e.path,o=e.onPathAdd;t&&(1<t.segments.length?o():(t.remove(),r.path=null))},r.onMouseDown=function(e){var t=_assertThisInitialized(r).path;e.event.button===MOUSE_LEFT_CODE$5&&e.modifiers.shift&&(t||(r.pathInit(),r.props.onPathInit(t)),r.onSegmentAdd(e)),r.props.onMouseDown(e)},r.onPathAdd=function(){var e=_assertThisInitialized(r).path,t=r.props,o=t.onPathAdd,n=t.pathProps;e.selected=!1,o(e,n),r.path=null},r}return _inherits(a,PathTool),_createClass(a,[{key:"pathInit",value:function(){var e=this.props,t=e.pathProps,o=e.pathData,n=new e.paper.Path(t);this.path=n,this.setPathData(o)}},{key:"setPathData",value:function(e){this.path.pathData=e}},{key:"onSegmentAdd",value:function(e){var t=this.path;t.add(e.point),this.props.onSegmentAdd(t.lastSegment,t)}},{key:"render",value:function(){var e=this.props,t=(e.pathProps,e.onKeyUp,e.onMouseDown,e.onPathAdd,e.onSegmentAdd,e.onSegmentRemove,e.paper,e.innerRef),o=_objectWithoutProperties(e,["pathProps","onKeyUp","onMouseDown","onPathAdd","onSegmentAdd","onSegmentRemove","paper","innerRef"]);return React.createElement(Tool$5,_extends({ref:t,onKeyUp:this.onKeyUp,onMouseDown:this.onMouseDown},o))}}]),a}(),_class2$5.defaultProps=_objectSpread({},PathTool.defaultProps,{pathProps:{strokeColor:"black",selected:!0}}),_class$5=_temp$5))||_class$5,SegmentPathTool_component=React.forwardRef(function(e,t){return React.createElement(SegmentPathTool,_extends({innerRef:t},e))}),PaperScope$6=ReactPaperJS.PaperScope,getProps=ReactPaperJS.getProps;function add(e,t){return(10*e+10*t)/10}function callAllHandlers(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return function(t){return e.forEach(function(e){return e&&e(t)})}}var PanAndScroll=PaperScope$6((_temp$6=_class2$6=function(){function t(e){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).onWheel=function(e){var n=e.deltaY,t=i.props,r=t.onZoom;(0,t.mergeProps)(function(e,t){var o=e.viewProps.zoom;return n<0?(o=add(o,.1),r(o),{viewProps:_objectSpread({},t.viewProps,e.viewProps,{zoom:o})}):0<n&&.1<o?(o=add(o,-.1),r(o),{viewProps:_objectSpread({},t.viewProps,e.viewProps,{zoom:o})}):null})},i.onKeyDown=function(e){var t=e.key,o=i.state.draggable;if("space"===t&&!o){var n=i.props,r=n.onPanEnabled;(0,n.mergeProps)(function(e,t){return _objectSpread({},e,{canvasProps:_objectSpread({},t.canvasProps,e.canvasProps,{"drag-state":"enabled"})})}),i.setState({draggable:!0}),r()}},i.onKeyUp=function(e){if("space"===e.key){var t=i.props,o=t.onPanDisabled;(0,t.mergeProps)(function(e,t){return _objectSpread({},e,{canvasProps:_objectSpread({},t.canvasProps,e.canvasProps,{"drag-state":"disabled"})})}),i.setState({draggable:!1}),o()}},i.onMouseDown=function(e){var t=e.point,o=i.state,n=o.draggable,r=o.dragStart;n&&!r&&((0,i.props.mergeProps)(function(e,t){return _objectSpread({},e,{canvasProps:_objectSpread({},t.canvasProps,e.canvasProps,{"drag-state":"dragging"})})}),i.setState({dragStart:t}))},i.onMouseUp=function(){var e=i.state,t=e.dragStart,o=e.draggable;if(t){if(o)(0,i.props.mergeProps)(function(e,t){return _objectSpread({},e,{canvasProps:_objectSpread({},t.canvasProps,e.canvasProps,{"drag-state":"enabled"})})});i.setState({dragStart:null})}},i.onMouseDrag=function(e){var o=e.point,t=i.props,n=t.mergeProps,r=t.paper,a=i.state,s=a.draggable,p=a.dragStart;n(function(e,t){return p?{viewProps:_objectSpread({},t.viewProps,e.viewProps,{center:r.view.center.add(o.subtract(p).multiply(.5))})}:null}),s&&i.setState({dragStart:o})},i.state={draggable:!1,dragStart:null},i}return _inherits(t,React.Component),_createClass(t,[{key:"componentDidMount",value:function(){var h=this,e=this.props,d=e.paper,f=e.zoomLevel,P=e.center;(0,e.mergeProps)(function(e,t){var o=getProps(d,t.canvasProps),n=o.onWheel,r=_objectWithoutProperties(o,["onWheel"]),a=getProps(d,t.viewProps),s=a.onKeyDown,p=a.onKeyUp,i=a.onMouseDown,l=a.onMouseDrag,c=a.onMouseUp,u=_objectWithoutProperties(a,["onKeyDown","onKeyUp","onMouseDown","onMouseDrag","onMouseUp"]);return{canvasProps:_objectSpread({},r,{onWheel:callAllHandlers([n,h.onWheel]),"drag-state":"disabled"}),viewProps:_objectSpread({},u,{onKeyDown:callAllHandlers([s,h.onKeyDown]),onKeyUp:callAllHandlers([p,h.onKeyUp]),onMouseDown:callAllHandlers([i,h.onMouseDown]),onMouseDrag:callAllHandlers([l,h.onMouseDrag]),onMouseUp:callAllHandlers([c,h.onMouseUp]),zoom:f,center:P})}})}},{key:"render",value:function(){return this.props.children}}]),t}(),_class2$6.defaultProps={zoomLevel:1,onPanEnabled:function(){},onPanDisabled:function(){},onZoom:function(){}},_class$6=_temp$6))||_class$6;exports.CircleTool=CircleTool_component,exports.FreeformPathTool=FreeformPathTool_component,exports.Grid=Grid_component,exports.LineTool=LineTool_component,exports.PanAndZoom=PanAndScroll,exports.PolygonTool=PolygonTool_component,exports.RectangleTool=RectangleTool_component,exports.SegmentPathTool=SegmentPathTool_component;