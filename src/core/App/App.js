import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Layout } from "./Layout";
import { Article, Articles, Home, SearchHistory } from "pages";

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
            path="article/:title"
            element={<Article />}
          />

          <Route
            path="articles/:query"
            element={<Articles />}
          />

          <Route
            path="history"
            element={<SearchHistory />}
          />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
