import React from 'react';
import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import { Button } from '@patternfly/react-core';


function App() {
    return (
        <div>
             <Button variant="primary">PF check</Button>
        </div>
       
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);