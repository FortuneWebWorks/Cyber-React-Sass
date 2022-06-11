import '../styles/home/home.scss';
import { ReactComponent as VideoIcon } from '../assets/images/video.svg';
import HomeCard from '../components/home/HomeCard';
import HomeTestimonial from '../components/home/HomeTestimonial';

const Home = () => {
  return (
    <main className="home">
      <div className="section__1">
        <h1>Follow the</h1>
        <h1>Smart Money</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quibusdam dolor repellendus ut at beatae quasi, magnam neque
        </p>

        <button>Mint (Comming Soon)</button>

        <VideoIcon />
      </div>

      <section className="section__2">
        <h2>FEATURES</h2>

        <div className="section__2__cards">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </section>

      <section className="section__3">
        <h2>TESTIMONIAL</h2>

        <div className="section__3__testimonial">
          <HomeTestimonial />
        </div>
      </section>
    </main>
  );
};

export default Home;
