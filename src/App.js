// import Stars from "./Drawings/Stars";
const cubed = (x) => {return x*x*x;}

const App = () => {
  return (
    <div className='tc'>
      <h1>Hello World</h1>
      <p>What're you doing?</p>
      <p>This actually worked!</p>
      <p>How about this? {cubed(20)}</p>
    </div>
  );
}

export default App;
