import RedirectGeneralView from '../views/RedirectGeneralView';
import RootView from '../views/RootView';
import FinishVoteView from '../views/voting/FinishVoteView';
import GeneralVoteView from '../views/voting/GeneralVoteView';
import ListVoteView from '../views/voting/ListVoteView';
import ResultsView from '../views/voting/ResultsView';
import AdminView from '@/views/AdminView';
import GeneralLayout from '@/views/voting/GeneralLayout';
import TimeoutView from '@/views/voting/TimeoutView';
import { BrowserRouter, Route, Routes } from 'react-router';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootView />}>
          <Route path="" element={<RedirectGeneralView />} />
          <Route path="general" element={<GeneralLayout />}>
            <Route path="" element={<GeneralVoteView />} />
            <Route path="king" element={<ListVoteView type="king" />} />
            <Route path="queen" element={<ListVoteView type="queen" />} />
            <Route path="finish" element={<FinishVoteView />} />
            <Route path="results" element={<ResultsView />} />
            <Route path="timeout" element={<TimeoutView />} />
            <Route path="*" element={<RedirectGeneralView />} />
          </Route>
          <Route path="/admin/super/secure/route" element={<AdminView />} />
          <Route path="*" element={<RedirectGeneralView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
