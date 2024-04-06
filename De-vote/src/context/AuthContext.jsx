import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  // Context or wherever you handle login
const login = ({ token, userType }) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userType', userType);
  // Update context state with both token and userType
  dispatch({ type: 'LOGIN', payload: { token, userType } });
};

  

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userType')
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    
    if (jwt) {
      // Here, you might want to verify the JWT or fetch user details
      const userData = { token: jwt }; // Simplified, ideally fetch user data
      dispatch({ type: 'LOGIN', payload: userData });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
