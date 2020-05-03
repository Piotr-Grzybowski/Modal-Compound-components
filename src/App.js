import React from 'react';
import Modal from './Modal/Modal';

function App() {
  return (
    <Modal>
      <Modal.Header title={'Tytuł modala'} />
      <Modal.Content>
        <h1>to powinno tak działać</h1>
      </Modal.Content>
      <Modal.Footer callToActionLabel={'Udało się'} />
    </Modal>
  );
}

export default App;
