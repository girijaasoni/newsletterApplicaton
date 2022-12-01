import React from 'react';
import ReactDOM from 'react-dom';
import '@patternfly/react-core/dist/styles/base.css';
import { Button } from '@patternfly/react-core';

const App = () => <Button variant="primary">PF check</Button>;

ReactDOM.render(<App />, document.getElementById('root'));
