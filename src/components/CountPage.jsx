import { useEffect, useState } from "react";

const CountPage = () => {
  const [number, setNumber] = useState(10);
  useEffect(() => {
    // her saniye bir fonksiyon çalıştırmak istiyoruz
    const count = setInterval(() => {
      setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
      //   console.log("merhaba");
    }, 1000);

    //bileşen ekrandan gidince sayacı temizle
    return () => clearInterval(count);
  }, []);

  const handleClick = () => {
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);
    //state kullanımında state'in son değerine erişmek istiyorsak, setMethod'una
    //argüman olarak bir fonksiyon veririz. Verdiğimiz bu fonksiyon parametre
    //olarak state'in son değerini alır. Yani aşağıdaki gibi önceki değeri bir artırıyor.
    //state'i değiştirirken en son değerine erişmek istiyorsak yukarıdaki number+1 metodunu değil,
    //aşağıdaki prevNumber+1 metodunu kullanıyoruz.
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };
  return (
    <h1>
      <button onClick={handleClick}>Artır</button>
      {number}
    </h1>
  );
};

export default CountPage;
