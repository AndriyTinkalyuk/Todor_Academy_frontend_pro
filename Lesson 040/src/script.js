import React, { Suspense } from 'react';
import {createRoot} from 'react-dom/client';
import "./styles.scss"

const App = () => 
    ( <>
    <h1>Hello world</h1>
    <Suspense fallback={<div>Завантаження...</div>}>
    <LazyComponent />
    </Suspense>
    </>);

const LazyComponent = React.lazy( () => import('./lazyComponent.js'))

const root = createRoot(document.getElementById('root'));
root.render(<App />);