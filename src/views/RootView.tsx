import LoadingBackdrop from '@/components/loading/LoadingBackdrop';

import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const RootView = () => {
  return (
    <main className="px-4 py-2 md:px-16">
      <Toaster richColors position="top-center" />
      <LoadingBackdrop />
      <Outlet />
    </main>
  );
};
export default RootView;
