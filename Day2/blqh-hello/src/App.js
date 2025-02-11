import logo from './logo.svg';
import './App.css';
import BlqhComA from './components/BlqhComA';
function App() {
  return (
    <div className="App">
     <h1>Bùi Lê Quốc Hùng-K23CNT3-REACTJS</h1>
     <hr/>
     {/* Su dung component BlqhComplnfor*/}
     <BlqhComA />
     <BlqhComA HoVaTen="Bui Le Quoc Hung" MaSV="2310900042" NgaySinh="14/02/2005" DienThoai="0327048118" TenLop="K23CNT3"/>
    </div>
  );
}

export default App;