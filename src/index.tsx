import App from 'App';
import React from 'react';
import { createRoot } from 'react-dom/client';

import './i18n';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
