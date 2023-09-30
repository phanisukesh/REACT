import "./App.css";

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQ86upYH83oA5efpMuK3AYNDlKMiewVCYfj0EI2-b9AK_vqa1_MPgEsAiV1r3suSoVmQ&usqp=CAU"
    />
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {
  return <h1>Body is nice</h1>;
};
const Footer = () => {
  return <h1>Footer is nice</h1>;
};

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
export default App;
