import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Article, ArticleList, Home, SearchHistory } from "features";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="article/:id"
            element={<Article />}
          />

          <Route
            path="articles"
            element={<ArticleList />}
          />

          <Route
            path="history"
            element={<SearchHistory />}
          />

          <Route path="*" element={<div>Not Found</div>} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
