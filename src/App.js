import './App.css';
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Resume from "./components/Resume";
import Port from './components/Port';
import Why from './components/Why';
import Hire from './components/Hire';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Sidebar />
      <Router>
      <Routes>
          <Route exact path="/resume" element={< Resume/>}></Route>
          <Route exact path="/portfoli" element={< Port  />}></Route>
          <Route exact path="/whyme" element={< Why/>}></Route>
          <Route exact path="/hireme" element={< Hire/>}></Route>
          <Route exact path="/" element={< MainContent/>}></Route>
      </Routes>
      </Router>
    </Container>
    
  );
}

const Container = styled.div`
display: flex ;
height: 97vh;
background: linear-gradient(to bottom right, white 0%, #c4c4ff 70%);
border-radius: 2rem;
`;

export default App;
