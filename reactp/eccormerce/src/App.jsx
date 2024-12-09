import { useEffect, useState } from "react";
import Card from "./card/Card";

function App() {
  let [item, setitem] = useState('null');
console.log(item)
  useEffect(() => {
    let FetchData = async () => {
      let data = await  fetch("https://fakestoreapi.com/products");
      let response = await data.json();
      setitem(response);
      console.log(item);
    };
    FetchData();
  });

  console.log(item);

  return (
    <>
      {item.map((products) => {
        <Card images={products.images[0]} />;
      })}
    </>
  );
}

export default App;
