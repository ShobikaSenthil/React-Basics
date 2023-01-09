import { useEffect, useState } from "react";



const DebouncingExample = () => {

  const [searchValue, setSearchValue] = useState("");

  const [products, setProducts] = useState([]);



  useEffect(() => {

    const getApiData = setTimeout(() => {

      fetch(`https://dummyjson.com/products/search?q=${searchValue}`)

        .then((res) => res.json())

        .then((data)=>{setProducts(data.products);console.log(data.products)});

    },2000);

    return () => clearTimeout(getApiData)

  },[searchValue]);




  return (

    <>

      <div style={{ padding: 12 }}>

        <input

          value={searchValue}

          onChange={(e) => setSearchValue(e.target.value)}

          placeholder="Search your Product!"

        ></input>

        {searchValue && <p>Searching for : {searchValue}</p>}

      </div>

      <div>

        <h1>My Required Products</h1>

        <ul>

          {products.map((item) => {

            return (

              <li key={item.id}>

                <p>{item.title}</p>

                <p>{item.description}</p>

              </li>

            );

          })}

        </ul>

      </div>

    </>

  );

};



export default DebouncingExample;