import './style.css';


export default function Home () {
  return (
    <section id="Home">
      <video autoPlay loop muted playsInline>
        <source src="https://watson.cosmos-themes.com/dark/video/wp-content/uploads/2021/12/video1.mp4" type="video/mp4" />
      </video>

      <div className='absolute'>
        <h1>Samuel <span>Carrubba</span></h1>
        <h2>Full Stack <span>Developer</span></h2>
      </div>
    </section>
  );
}
