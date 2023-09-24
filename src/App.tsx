import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as constants from './constants/constants';

const Home = lazy(() => import('./pages/Home'));

const browserRouter = [
  {
    path: constants.HOME,
    element: (
      <>
        <Suspense fallback={constants.FALLBACK_MESSAGE}>
          <Home />
        </Suspense>
      </>
    ),
  },
];

const router = createBrowserRouter(browserRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
