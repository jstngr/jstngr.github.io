import App from 'App';
import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './index.css';
import './i18n';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

root.render(<App />);
