import { useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

const tokenInLS = localStorage.getItem('token');

const useToken = () => {
  const [token, setToken] = useState<string | null>(tokenInLS);

  useEffect(() => {
    if (!token) {
      const newToken = uuid();
      localStorage.setItem('token', newToken);
      setToken(newToken);
    }
  }, [token]);

  return token;
};
export default useToken;
