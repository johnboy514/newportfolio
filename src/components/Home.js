import {React} from "react";
import DeskBackground from '../images/DeskBackground.jpg';
import Photo_for_react from '../images/Photo_for_react.jpg';

function Home() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }  
  window.addEventListener("scroll", reveal);


  return (
    <div>
<section class="text-center" id="home">
<div
    style={{backgroundImage:
    'url(' + DeskBackground + ')',
    backgroundSize: 'cover',
    filter: 'brightness(30%)',
    height: '900px'}}>
</div>
  <div class="d-flex justify-content-center">
    <div class="card slideInLeft" style={{
        marginTop: "-800px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '800px',
        color: 'black',
        boxShadow: 'none'
    }}>
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-7">
            <h2 class="fw-bold mb-3" style={{textAlign: 'left', fontSize: '50px', color: 'white'}}>Welcome to my <br /> Portfolio website.</h2>
            <h4 class="fw-bold mb-3" style={{textAlign: 'left', color: '#62b6cb'}}>Check out some of my previous works and some of the templates I've made for freelance site building!</h4>
            <button style={{marginTop:100, backgroundColor: 'lightblue', borderRadius: '15%'}}>Contact me today!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card slideInRight" style={{
        marginTop: "-800px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '800px',
        color: 'black',
        boxShadow: 'none'
    }}>
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
          <img src={Photo_for_react} alt="Developer" style={{ width: '100%', height: 'auto', borderRadius: '50%'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  );
}

export default Home;