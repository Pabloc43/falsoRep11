import { Button } from 'react-bootstrap';
import './App.css';
import data from "./components/data"
import List from "./components/lista"

function App() {
  return (
    <main>
      <section className="container text-center">
        <div className="row g-4 d-flex justify-content-center">
          <h3 className="col-12">Tienes {data.length} peliculas: </h3>
          <List props={data} />
        </div>
      </section>
    </main>
  );
}

export default App;
