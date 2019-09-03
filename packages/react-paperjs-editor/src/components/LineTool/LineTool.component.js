// @flow
import * as React from 'react';
import * as ReactPaperJS from '@psychobolt/react-paperjs';
import typeof { ToolEvent, Tool as ToolType } from 'paper';

import PathTool from '../shared/PathTool';

const { Tool, PaperScope } = ReactPaperJS;

type Props = {
  pathProps: {
    strokeColor: string,
  },
  innerRef: React.Ref<ToolType>
};

const MOUSE_LEFT_CODE = 0;

// $FlowFixMe
@PaperScope
class LineTool extends PathTool<Props> {
  static defaultProps = {
    ...PathTool.defaultProps,
    pathProps: {
      strokeColor: 'black',
    },
  };

  onMouseDown = (toolEvent: ToolEvent) => {
    const { pathProps, onMouseDown, onPathInit, paper } = this.props;
    if (toolEvent.event.button === MOUSE_LEFT_CODE) {
      const path = new paper.Path(pathProps);
      path.add(toolEvent.point);
      this.path = path;
      onPathInit(path);
    }
    onMouseDown(toolEvent);
  }

  onMouseDrag = (toolEvent: ToolEvent) => {
    const { path } = this;
    const { onMouseDrag } = this.props;
    if (toolEvent.event.buttons === 1) {
      path.removeSegment(1);
      path.addSegment(toolEvent.point);
      path.selected = true;
    }
    onMouseDrag(toolEvent);
  }

  onMouseUp = (toolEvent: ToolEvent) => {
    const { path } = this;
    const { onMouseUp, onPathAdd,pathProps } = this.props;
    if (path) {
      path.selected = false;
      onPathAdd(path,pathProps);
      this.path = null;
    }
    onMouseUp(toolEvent);
  }

  render() {
    const {
      pathProps, onMouseDown, onMouseDrag, onMouseUp, onPathAdd, innerRef, ...rest
    } = this.props;
    return (
      <Tool
        ref={innerRef}
        onMouseDown={this.onMouseDown}
        onMouseDrag={this.onMouseDrag}
        onMouseUp={this.onMouseUp}
        {...rest}
      />
    );
  }
}

export default React.forwardRef((props, ref) => <LineTool innerRef={ref} {...props} />);
