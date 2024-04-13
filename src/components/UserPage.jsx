import { useEffect, useState } from "react";

const UserPage = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState(null);

  //id her değiştiğinde o id'li kullanıcıyı al (jsonplaceholder'dan apideki user kısmından)
  useEffect(() => {
    // api'a kullanıcı için istek at
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      //gelen veriyi işle
      .then((res) => res.json())
      //işlenen veriyi state'e aktar
      .then((data) => setUser(data));
  }, [id]);

  //user.name yazdığımız zaman api'den cevap gelene kadar veri undefined kaldığı için
  //undefined.name yapıyoruz. Bu noktada react hata veriyor. Bu hatanın önüne
  //koşulla birlikte geçebiliriz. {user !== undefined && user.name} > user undefined değilse
  //user'ın name'ine eriş. Bu kodu yazmanın kısa yolu: {user?.name}
  return (
    <div>
      <br />
      <br />
      {/* <div>{user !== undefined && user.name}</div> */}
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
      <br />
      <br />

      {/* 0'dan aşağı inmemeli 
        10'dan yukarı çıkmamalı */}

      <button onClick={() => setId(id - 1)}>Önceki</button>
      <span>{id}</span>
      <button onClick={() => setId(id + 1)}>Sonraki</button>
    </div>
  );
};

export default UserPage;
