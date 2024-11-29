import HomeView from '../views/HomeView';
import RootView from '../views/RootView';
import FinishVoteView from '../views/voting/FinishVoteView';
import GeneralVoteView from '../views/voting/GeneralVoteView';
import ListVoteView from '../views/voting/ListVoteView';
import ResultsView from '../views/voting/ResultsView';
import { BrowserRouter, Route, Routes } from 'react-router';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootView />}>
          <Route path="" element={<HomeView />} />
          <Route path="general" element={<GeneralVoteView />}>
            <Route path="king" element={<ListVoteView type="king" />} />
            <Route path="queen" element={<ListVoteView type="queen" />} />
            <Route path="finish" element={<FinishVoteView />} />
            <Route path="results" element={<ResultsView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
