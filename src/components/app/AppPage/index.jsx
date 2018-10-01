import React from 'react';
import DragAndDrop from '../../common/DragAndDrop';
import DragSource from '../../common/DragAndDrop/components/DragSource';
import DragTarget from '../../common/DragAndDrop/components/DragTarget';
import { sweets } from '../../../mock/sweets';

class AppPage extends React.Component {
  render() {
    return (
      <div className='app-page'>
        Page

        {/*
        <DragAndDrop>
          <div style={{ margin: '25px 0' }}>
            {sweets.map(sweet => (
              <DragSource item={sweet} key={sweet.id}>
                <div style={{ border: '1px solid black', padding: '10px' }}>
                  { sweet.name }
                </div>
              </DragSource>
            ))}
          </div>

          <DragTarget
            identifier='candy-bag1'
            onIsOver={(identifier, canDrop) => {
              console.info(
                `[DragTarget] DragSource is over ${identifier} and ${canDrop ? 'can drop' : 'can not drop'}.`,
              );
            }}
            onDrop={(identifier, item) => {
              console.info(
                `[DragTarget] DragSource ${item.id} is dropped into DragTarget ${identifier}.`,
              );
            }}
          >
            <div style={{ width: '400px', height: '400px', border: '2px solid black' }}>
              DragTarget
            </div>
          </DragTarget>
        </DragAndDrop>
        */}
      </div>
    );
  }
}

export default AppPage;
