import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from './features/auth/routes/AuthPage';
import HomePage from './features/home/routes/HomePage';
import User from './features/users/routers/User';
import RootLayout from './shared/layouts/RootLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
