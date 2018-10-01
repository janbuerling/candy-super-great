import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
export const DRAG_AND_DROP_TYPE = 'DRAG_AND_DROP';

const DragAndDrop = ({ children }) => (
  <DragDropContextProvider backend={HTML5Backend}>
    { children }
  </DragDropContextProvider>
);

DragAndDrop.propType = {
  children: PropTypes.node.isRequired,
};

export default DragAndDrop;
