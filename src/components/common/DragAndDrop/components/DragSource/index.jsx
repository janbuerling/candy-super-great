import PropTypes from 'prop-types';
import React from 'react';
import { DragSource as ReactDndDragSource } from 'react-dnd';
import { DRAG_AND_DROP_TYPE } from '../../index';

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const dragSourceFunctions = {
  canDrag(props) {
    // You can disallow drag based on props
    return !props.isDisabled;
  },

  isDragging(props, monitor) {
    /*
     * If your component gets unmounted while dragged (like a card in Kanban board dragged between lists)
     * you can implement something like this to keep its appearance dragged:
     */
    return monitor.getItem().id === props.id;
  },

  beginDrag(props) {
    // Return the data describing the dragged item
    return props.item;
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something. Read the original dragged item from getItem():
    const item = monitor.getItem();

    if (props.onDrop) props.onDrop(item);

    /*
     * You may also read the drop result from the drop target that handled the drop, if it returned an object from
     * its drop() method.
     *
     * const dropResult = monitor.getDropResult();
     *
     * This is a good place to call some Flux action.
     */
  },
};

/**
 * @function
 * @param {Object} connect is an object passed to a collecting function of the DragSource.
 * Its methods return functions that let you assign the roles to your component's DOM nodes.
 * @param {Object} monitor is an object passed to a collecting function of the DragSource.
 * Its methods let you get information about the drag state of a specific drag source.
 * The specific drag source bound to that monitor is called the monitor's owner below.
 * @return {Object}
 */
const collect = (connect, monitor) => ({
  // Call this function inside render() to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),

  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging(),
});

/**
 * @description DragSource component for the dnd module.
 */
class DragSource extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    isDisabled: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    onDrop: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    isDisabled: false,
    onDrop: () => {},
  };

  render() {
    return this.props.connectDragSource(
      <div>
        { this.props.children }
      </div>,
    );
  }
}

export default ReactDndDragSource(DRAG_AND_DROP_TYPE, dragSourceFunctions, collect)(DragSource);
