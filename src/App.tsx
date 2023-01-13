import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoticeList from './pages/noticeList';
import NoticeView from './pages/noticeView';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/" element={<NoticeList />} />
                    <Route path="/:boardID" element={<NoticeView />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;
