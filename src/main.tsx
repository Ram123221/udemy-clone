import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import WidthHeightProvider from './Components/Responsiveness/WidthHeightProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
  <WidthHeightProvider>
      <App />
  </WidthHeightProvider>
    // </React.StrictMode>,
)
