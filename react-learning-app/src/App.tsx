import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Scrooge McDuck",
    "Count Duckula",
    "Donald Duck",
    "Darkwing Duck",
    "Daffy Duck",
    "Heuy",
    "Dewey",
    "Louie",
    "Daisy Duck",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Ducks"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
