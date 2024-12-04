import { useEffect } from 'react';

import { useNavigate } from 'react-router';

const RedirectGeneralView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/general');
  }, [navigate]);

  return null;
};
export default RedirectGeneralView;
