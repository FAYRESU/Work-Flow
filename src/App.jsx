import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card.jsx"; // ชื่อตรงกับ Component แล้ว

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("โหลดข้อมูลไม่สำเร็จ:", err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
