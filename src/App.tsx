import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NoticeList from './pages/noticeList'
import NoticeView from './pages/noticeView'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/notice" element={<NoticeList />} />
              <Route path="/notice/:postID" element={<NoticeView />} />
              {/* 404 페이지 */}
              {/*<Route path="/*" element={<NoData />} />*/}
          </Routes>
      </Router>
  );
}

export default App;
