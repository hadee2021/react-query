import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SuperHeroesPage from './pages/SuperHeroesPage'
import RQSuperHeroesPage from './pages/RQSuperHeroesPage'
import RQSuperHeroPage from './pages/RQSuperHeroPage'
import ParallelQueriesPage from './pages/ParallelQueriesPage'
import DynamicParallelPage from './pages/DynamicParallelPage'
import DependentQueriesPage from './pages/DependentQueriesPage'
import PaginatedQuery from './pages/PaginatedQuery'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/super-heroes" element={<SuperHeroesPage />}/>
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />}/>
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />}/>
          <Route path="/rq-parallel" element={<ParallelQueriesPage />}/>
          <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroIds={[1, 3]}/>}/>
          <Route path="/rq-dependent" element={<DependentQueriesPage email={'vishwas@naver.com'}/>}/>
          <Route path="/rq-paginated" element={<PaginatedQuery />}/>
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
