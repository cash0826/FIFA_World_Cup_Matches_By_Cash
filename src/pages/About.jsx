import '../styles/About.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FIFA from '../assets/FIFA_World_Cup_img.jpg';
import FIFA_2022 from "../assets/WC_2022.avif";

function About() {
  return(
    <>
      <NavBar/>
      <main>
        <div className="about-div">
          <div className="about-heading">
            <img src={FIFA} id="FIFA" alt="FIFA 2026" title="FIFA 2026"/>
            <h3>This 39-day event will start June 11th and last through July 19th. Which country will raise the coveted trophy?</h3>
          </div>

          <div className="about-description">
            <p>North America officially got the ball rolling on the world's biggest sporting event on June 11th, with matches spreading across the United States, Canada and Mexico. 
              The tournament features a newly expanded pool of 48 teams, becoming the largest in history. 
              The quadrennial tournament kicked off at the historic Estadio Azteca before Mexico's opening match against South Africa.</p>
          </div>

          <div className="about-title">
            <img src={FIFA_2022} id="FIFA" alt="FIFA 2026" title="FIFA 2026"/>
          </div>          
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default About;