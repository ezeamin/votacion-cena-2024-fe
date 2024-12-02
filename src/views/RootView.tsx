import useGPS from '@/hooks/useGPS';

import GPSModal from '@/components/GPSModal';
import LoadingBackdrop from '@/components/loading/LoadingBackdrop';

import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const RootView = () => {
  const { hasAccepted, hasRejected, isNear } = useGPS(true);

  return (
    <main className="px-6 py-4 md:px-16">
      <Toaster richColors position="top-center" />
      <LoadingBackdrop />
      <GPSModal
        hasAccepted={hasAccepted}
        hasRejected={hasRejected}
        isNear={isNear}
      />
      {hasAccepted && isNear && <Outlet />}
    </main>
  );
};
export default RootView;
