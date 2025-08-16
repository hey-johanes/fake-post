import { useContext, createContext, useState } from 'react';
import ModalsError from '../component/modals/ModalsError';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (err) {
      console.warn('❗ user data in localStorage is not valid JSON:', err);
      setShow(true);
      <ModalsError
        messageError="User invalid !"
        show={show}
        setShow={setShow}
      />;
      localStorage.removeItem('user');
      return null;
    }
  });

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
