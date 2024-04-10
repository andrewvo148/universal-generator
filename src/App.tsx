
import * as React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from './layouts/Dashboard'
import Entity from './pages/Entity';

function App() {

  return (
    <>
  <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Entity />} />
          <Route
            path="entity"
            element={
              <React.Suspense fallback={<>...</>}>
                <Entity />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App


