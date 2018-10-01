import PropTypes from 'prop-types';
import React from 'react';
import { DropTarget as ReactDndDropTarget } from 'react-dnd';
import { DRAG_AND_DROP_TYPE } from '../../index';

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
export const dragTargetFunctions = {
  canDrop(props) {
    // You can disallow drop based on props or item
    return !props.isDisabled;
  },

  drop(props, monitor) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested target already handled drop
      return;
    }

    const item = monitor.getItem();

    // You can do something with it
    if (props.onDrop) {
      props.onDrop(props.identifier, item);
    }
  },
};

/**
 * @function
 * @param {Object} connect is an object passed to a collecting function of the DropTarget.
 * Its only method dropTarget() returns a function that lets you assign the drop target role to one of your component's
 * DOM nodes.
 * @param {Object} monitor is an object passed to a collecting function of the DropTarget.
 * Its methods let you get information about the drag state of a specific drop target.
 * The specific drop target bound to that monitor is called the monitor's owner below.
 * @return {Object}
 */
const collect = (connect, monitor) => ({
  // Call this function inside render() to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),

  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  didDrop: monitor.didDrop(),
  currentItem: monitor.getItem(),
});

/**
 * @description DragSource component for the dnd module.
 */
class DragTarget extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    identifier: PropTypes.string.isRequired,
    canDrop: PropTypes.bool,
    currentItem: PropTypes.shape({
      id: PropTypes.number,
    }),
    didDrop: PropTypes.bool,
    isDisabled: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    isOver: PropTypes.bool,
    isOverCurrent: PropTypes.bool,
    onIsOver: PropTypes.func,
    onDrop: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    onDrop: () => {},
    onIsOver: () => {},
    isDisabled: false,
    isOver: false,
    isOverCurrent: false,
    canDrop: true,
    didDrop: false,
    currentItem: null,
  };

  /**
   * @function
   * @param {Object} nextProps given props for next state
   */
  componentWillReceiveProps({
    canDrop, didDrop, isOver, isOverCurrent,
  }) {
    if (!this.props.isOver && isOver) {
      // You can use this as enter handler
      if (this.props.onIsOver) {
        this.props.onIsOver(
          this.props.identifier,
          canDrop,
          this.props.currentItem === this.props.identifier,
        );
      }
    }

    if (this.props.isOver && !isOver) {
      // You can use this as leave handler - includes drop
      if (this.props.onIsOver) this.props.onIsOver(null, false);
    }

    if (this.props.isOver && !isOver && !didDrop) {
      // You can use this as leave handler - without drop
    }

    if (this.props.isOverCurrent && !isOverCurrent) {
      // You can be more specific and track enter/leave shallowly, not including nested targets
    }
  }

  render() {
    return this.props.connectDropTarget(
      <div>
        { this.props.children }
      </div>,
    );
  }
}

export default ReactDndDropTarget(DRAG_AND_DROP_TYPE, dragTargetFunctions, collect)(DragTarget);
