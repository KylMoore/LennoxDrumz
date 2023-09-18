import lennoxLogo from "../assets/Lennox-Logo.jpg"

const HomePage = () => {
  return (
    <section className="homePage">
      <div className="homePageHeader wrapper">
        {/* <h1>Lennox Drum Ltd.</h1> */}
        <img
          src={lennoxLogo}
          alt="Lennox Drum ltd. logo"
        />
      </div>
    </section>
  );
};

export default HomePage;
