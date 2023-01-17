import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@patternfly/react-core';
import '@testing-library/jest-dom/extend-expect';

const App = () => <Button variant="primary">PF check</Button>;

test('expect button to appear in the screen', () => {
  const { unmount } = render(<App />);

  // ensure the title of the page is presented in the page:
  expect(screen.getByText('PF check')).toBeInTheDocument();

  // unmnount the component from the DOM
  unmount();
});
