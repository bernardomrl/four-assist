import React from 'react';
import ReactDOM from 'react-dom/client';

import { RootLayout } from '@/entrypoints/sidepanel/layout';
import { Page } from '@/entrypoints/sidepanel/page';

import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootLayout>
			<Page />
		</RootLayout>
	</React.StrictMode>
);
