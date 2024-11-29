import { useEffect, useState } from 'react';

import Spinner from './Spinner';
import { useLoading } from '@/stores/useLoading';

const LoadingBackdrop = () => {
  const { isLoading: open } = useLoading();

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    if (!open) {
      setShowMessage(false);
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
      setShowMessage(false);
    };
  }, [open]);

  return (
    <div
      className={`h-screen w-screen ${
        open ? 'block' : 'hidden'
      } items-center fixed left-0 top-0 z-[99999999] flex justify-center bg-black bg-opacity-60`}
    >
      <div className="flex flex-col items-center justify-center">
        <Spinner />
        <p
          className="text-center text-white"
          style={{
            transition: 'all 1s',
            marginTop: '-5rem',
            opacity: showMessage ? 1 : 0,
          }}
        >
          Por favor espere...
        </p>
      </div>
    </div>
  );
};
export default LoadingBackdrop;
