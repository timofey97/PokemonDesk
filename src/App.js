import React from 'react'

import cn from 'classnames';

import s from './App.modules.scss';
 import './custom.css';

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            Yes, This is App Component!
        </div>
    )
}

export default App;