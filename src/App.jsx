import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import Counter from "./components/Counter";

// Sample data from the assignment
const postsData = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut\nreiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

function App() {
  const [userData] = useState({
    name: "John Doe",
    menuItems: ["Home", "Profile", "About", "Contact"]
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar name={userData.name} menuItems={userData.menuItems} />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Card Grid Component</h2>
          <CardGrid posts={postsData.results} />
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Counter Demo</h2>
          <Counter />
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 React Challenge Demo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;