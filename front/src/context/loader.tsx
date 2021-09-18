import { createContext, useState } from "react";

import Loader from "../components/loader";

interface ContextType {
  loading: boolean,
  setLoading: Function
}

const LoaderContext = createContext<ContextType | null>(null);

export const LoaderProvider: React.FC = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      <Loader visivel={loading} />
      {children}
    </LoaderContext.Provider>
  );
}

export default LoaderContext;