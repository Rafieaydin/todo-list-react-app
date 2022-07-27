import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo'

// class Header extends React.Component { // untuk mengambil component
//   render() {
//     return (
//       <div className='App'>
//       Hello world
//      </div>
//     )
//   }
// }

// function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
//   // return React.createElement('h1',{class:"header"},'hello world') // tag prop and value

//   // harus make tanda kurung untuk menyimpan banyak element

//   return (
//     <Header /> // cara memanggil component
//   )
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//           <header className="App-header">
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//     )
//   }
// }

const Apps = () => { // react component funtion
  return (
    <Todo />
  )
}
export default Apps;
