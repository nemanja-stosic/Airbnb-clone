import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    /*We should always put key = to someID, so we don't get a warning
    /that every prop needs a key 
      Spread operators syntax: {...item}
      We could put that instead of data={item}
      and we would get something like: 
      id={item.id}
      title={item.title}
      description={item.description}
      ...
      It will do that for all our data.
    */
    return (
      <Card
        key={item.id}
        data={item}
      />
    );
  });

  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
