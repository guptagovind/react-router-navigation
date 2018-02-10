import React from 'react';

const PortFolioId =(props) => {
  console.log('props ',props);
  return (
    <div>
      I have completed task id: {props.match.params.id}
    </div>
  );
};

export default PortFolioId;