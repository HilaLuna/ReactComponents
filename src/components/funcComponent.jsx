import { useState, useEffect } from "react";

const Paper = (prop) => {
  const [page, setPage] = useState(prop.number);
  const [name, setName] = useState("");

  // bileşenin ekrana basılma olayını izlemek istiyorsak
  useEffect(() => {
    console.log("Bileşen ekrana basıldı");

    // bileşenin ekrandan gitme olayını izlemek istiyorsak
    return () => {
      console.log("Bileşen ekrandan gitti");
    }; //yani bu aslında classComponent'taki componentWillUnmount'a denk geliyor.
  }, []);

  //bileşenin güncellenme olayını izlemek istiyorsak
  useEffect(() => {
    // console.log("Bileşen güncellendi");
  });

  //belirli bir state'in değişimini izleme
  useEffect(() => {}, [page]);

  return (
    <div>
      <p>Sayfa: {page}</p>
      <button onClick={() => setPage(page + 1)}>Sayfa Değiş</button>
      <br />
      <input onChange={(e) => setName(e.target.value)} />
      <div>{name}</div>
    </div>
  );
};

export default Paper;
