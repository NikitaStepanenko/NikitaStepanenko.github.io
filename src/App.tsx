import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { MainContainer } from './App.styles';
import PokeList from './pages/Pokemons/Pokemons';

const App = () => (
  <Router>
    <MainContainer maxWidth="xl">
      <Routes>
        <Route
          path="/pokemons"
          element={(
            <PokeList />
          )}
        />
        <Route
          path="*"
          element={<Navigate to="/pokemons" />}
        />
      </Routes>
    </MainContainer>
  </Router>
);

export default App;
