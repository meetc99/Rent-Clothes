// import { connect } from 'react-redux'
import React, { Component } from 'react';
import Header from './containers/HeaderConnected';
import MainSection from './containers/MainSectionConnected'
import './App.css';
// import { increment, decrement } from './store/index'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainSection />
      </>
    )
  }
}





// class App extends Component {

//   render() {
//     const { increment, decrement, counter} = this.props
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Count: {counter}
//           </p>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </header>
//       </div>
//     );
//   }
// }


// const mapStateToProps = (state, ownProps) => {
//   return {
//     counter: state.counter.value
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increment: () => {dispatch(increment())},
//     decrement: () => {dispatch(decrement())}
//   }
// }
// const AppContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default App;
