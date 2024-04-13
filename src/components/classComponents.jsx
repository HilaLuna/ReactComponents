import { Component } from "react";

export default class Counter extends Component {
  //kurucu metod > bununla gönderilen propları alırız.
  constructor(props) {
    super(props);

    // class component'ta state aşağıdaki şekilde tanımlanıyor.
    this.state = {
      count: 0,
      theme: "dark",
    };
  }

  //sayıyı bir artıran fonksiyon
  handleClick = () => {
    // class component'larda state değiştirmek yöntemi:
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  // bileşen ekrana basıldığında fonksiyon çalıştır
  componentDidMount() {
    console.log("Bileşen ekrana basıldı");
  }

  //bileşenin ekrandan gitme olayını izler
  componentWillUnmount() {
    console.log("Bileşen ekrandan gitti");
  }

  //bileşenin güncellenme olayını izleme
  componentDidUpdate() {
    console.log("api'den" + this.state.count + "sayfasının verileri alındı");
  }

  //ekrana basılacak ara yüzü belirleme
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              count: this.state.count - 1,
            });
          }}
        >
          Azalt
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>Artır</button>
      </div>
    );
  }
}
