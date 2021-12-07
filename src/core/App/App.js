import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Layout } from "./Layout";
import { Article, Articles, Home, SearchHistory } from "pages";
import { toArticle, toArticles, toHistory, toHome } from "core";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route
            path={toHome()}
            element={<Home />}
          />

          <Route
            path={toArticle(":title")}
            element={<Article />}
          />

          <Route
            path={toArticles(":query")}
            element={<Articles />}
          />

          <Route
            path={toHistory()}
            element={<SearchHistory />}
          />

          <Route
            path="*"
            element={<Navigate to={toHome()} />}
          />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
