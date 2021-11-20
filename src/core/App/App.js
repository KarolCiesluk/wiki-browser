import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Article, ArticleList, Home, SearchHistory } from "features";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="article"
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

        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
