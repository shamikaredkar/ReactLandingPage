const reactDescription = ["Fundamental", "Core", "Crucial"];
const random = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  return (
    <>
      <header>
        <img src='src/assets/react-core-concepts.png' alt='Stylized atom' />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[random(1)]} React concepts you will need for almost
          any app you are going to build!
        </p>
      </header>
    </>
  );
};
export default Header;
