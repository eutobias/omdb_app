import * as React from "react";

import { Route, Routes } from "react-router-dom";
import { Search } from "./pages/Search/Search";
import { MovieDetailsSkeleton } from "./pages/MovieDetails/MovieDetailsSkeleton";
import { PageContainer } from "./components/molecules/PageContainer";

const MovieDetails = React.lazy(() =>
  import("./pages/MovieDetails").then((module) => ({
    default: module.MovieDetails,
  }))
);
const Error404 = React.lazy(() =>
  import("./pages/Error404").then((module) => ({
    default: module.Error404,
  }))
);

function App() {
  return (
    <PageContainer>
      <Routes>
        <Route index element={<Search />} />
        <Route
          path="movie/*"
          element={
            <React.Suspense>
              <MovieDetails />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense>
              <Error404 />
            </React.Suspense>
          }
        />
      </Routes>
    </PageContainer>
  );
}

export default App;
