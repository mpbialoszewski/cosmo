import React from 'react';
import { createRoot } from 'react-dom/client';

const Start = () => {
  return( <h1>Hello from React!</h1>);
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('hello-react-app');
  if (container) {
    const root = createRoot(container);
    root.render(<HelloComponent />);
  }
});

export default Start;