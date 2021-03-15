import './App.css';
import Review from './Component/Review'


function App() {
  return (
    <main>
      <section className= "container">
        <div className="title">
          <h1>Our review</h1>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default App;
