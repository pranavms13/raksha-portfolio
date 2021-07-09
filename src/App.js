import React, { lazy, Suspense } from 'react';

const Chooser = lazy(() => import('./components/Chooser'));
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Project = lazy(() => import('./components/Project'));
const Skill = lazy(() => import('./components/Skill'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      choosen : false,
      muted : true
    }
    this.chooseranswer = this.chooseranswer.bind(this);
  }
  componentDidMount(){
    // let audio = document.getElementById("bgaudio");
    // audio.load();
    // // audio.play();
    // audio.addEventListener('ended', () => {
    //   audio.play();
    // });
  }
  chooseranswer(option){
    this.setState({choosen: true, muted: option});
    if(!option){
      let audio = document.getElementById("bgaudio");
      audio.load();
      audio.play();
      audio.addEventListener('ended', () => {
        audio.play();
      });
    }
  }
  render(){
    return (
      <Suspense
        fallback={
          <div className='sk-folding-cube'>
            <div className='sk-cube1 sk-cube'></div>
            <div className='sk-cube2 sk-cube'></div>
            <div className='sk-cube4 sk-cube'></div>
            <div className='sk-cube3 sk-cube'></div>
          </div>
        }
      >
        {this.state.choosen &&
          <>
          <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
            <Header />
            <main>
              <Hero />
              <Project />
              <Skill />
              <Contact />
            </main>
          </div>
          <Footer/>
          </>
        }
        {!this.state.choosen && <Chooser chooseranswer={this.chooseranswer}/>}
      </Suspense>
    );
  }
}

export default App;
