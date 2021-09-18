export const TOKEN_KEY = "@base/token";
export const EMAIL_KEY = "@base/email";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const login = (token: string, email: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(EMAIL_KEY, email);
};

export const logout = (history: any) => {
  localStorage.clear();
  history.push({pathname: "/"})
};