import FinishVoteView from '../views/FinishVoteView';
import GeneralVoteView from '../views/GeneralVoteView';
import HomeView from '../views/HomeView';
import ListVoteView from '../views/ListVoteView';
import ResultsView from '../views/ResultsView';
import { BrowserRouter, Route, Routes } from 'react-router';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/general" element={<GeneralVoteView />}>
          <Route path="king" element={<ListVoteView type="king" />} />
          <Route path="queen" element={<ListVoteView type="queen" />} />
          <Route path="finish" element={<FinishVoteView />} />
          <Route path="results" element={<ResultsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
