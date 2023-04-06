// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import './App.css';
import Productlist from './Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"25000", img:"phone.jpeg"},{no:"2",name:"Car", price:"1500000", img:"Car.png"}]}/>
    </div>
  );
}

export default App;