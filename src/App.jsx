import img from './assets/R.png'
const App = () => {
  return (
    <div>
      <img className='mx-auto' src={img} alt="" />
      <progress className="progress w-56 flex mx-auto"></progress>
    </div>
  );
};

export default App;