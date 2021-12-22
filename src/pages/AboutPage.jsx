import myPicture from './miPicture.png';
import NavBar from '../components/NavBar';
import '../styles/pages/aboutPage.scss';

const AboutPage = () => (
  <>
    <NavBar />
    <div className="aboutme">
      <h1>Mariana Usuga Montoya</h1>
      <p>
        Vivo en la ciudad de medellin en el barrio manrique oriental, tengo 21 años de edad,
        vivo con mis padres, me gusta bailar y pasar tiempo con mi familia y amigos
      </p>
      <img className="aboutme__img" src={myPicture} alt="" />
      <ul>
        <li>He aprendido herramientas para ser una desarrolladora Full-Stack</li>
        <li>He aprendido a trabajar en equipo</li>
        <li>He aprendido a Ser constante y no rendirme</li>
      </ul>
      <p>marianausugamontoya12344@gmail.com</p>
      <a href="https://github.com/Mariana-Usuga">Mi GitHub</a>
    </div>
  </>
);

export default AboutPage;
