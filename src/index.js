import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import styled from 'styled-components'

const MainStyleDiv = styled.div `
    



`

ReactDOM.render(<MainStyleDiv><App /></MainStyleDiv>, document.getElementById('root'));
registerServiceWorker();
