import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {HeroUIProvider} from '@heroui/react';
import { Root } from './Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Root />
    </HeroUIProvider>
  </StrictMode>
);
