import React from 'react';
import axios from "axios";

import { withAlert } from "react-alert";

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.cleartextbox = this.cleartextbox.bind(this);
    this.alert = this.props.alert;
  }

  cleartextbox(){
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ sending: true })
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const message = e.target.message.value;

    const data = { name: this.state.name, email: this.state.email, message: this.state.message };

    axios.post('https://raksha-backend.vercel.app/', data).then((response) => {
      if (response.data.m === "success") {
        this.alert.success("Message Sent !");
        this.setState({ sending: false })
        this.cleartextbox();
      } else {
        this.setState({ sending: false })
        this.alert.error("Error : " + response.data.details)
      }
    }).catch((err) => {
      console.log(err);
      this.alert.error("Error : " + err);
    });
  }

  render() {
    return (
      <section className='my-28' id='contact'>
        <header className='px-5 text-2xl font-bold pt-10'>
          <h2>Contact Me</h2>
          <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
        </header>
        <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
          <div className='md:w-6/12 md:px-0 p-5 my-5'>
            <div>
              <p className='font-bold'>Raksha S</p>
              <p className='font-thin'>Bangalore, India</p>
              <a href='mailto: rakshakaranth.s@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
                rakshakaranth.s@gmail.com
              </a>
            </div>
            <a className='border-b-2 mt-3 inline-block border-gray-500' href='./Raksha_S_Resume.pdf' target='_blank' rel='noreferrer'>
              Resume
            </a>
            <div className='flex flex-row flex-wrap mt-7'>
              <div className='mr-4'>
                <a href='https://www.linkedin.com/in/rakshaa' target='_blank' rel='noreferrer'>
                  <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                    <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className='mr-4'>
                <a href='https://www.behance.net/raksha_s' target='_blank' rel='noreferrer'>
                  <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                    <img src='./images/icons/behance.svg' alt='' width='24px' height='24px' className='mr-1' />
                    Behance
                  </span>
                </a>
              </div>

            </div>
          </div>

          <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
            <form className='flex flex-col space-y-3 m-auto w-full' name='contact' method='post' onSubmit={this.onSubmit}>
              <input type='hidden' name='form-name' value='contact' />

              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' className='gradient' required onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name}></input>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' className='gradient' required onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}></input>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' cols='25' rows='5' className='gradient' required onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
              <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md' disabled={this.state.sending}>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
          <picture>
            <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
            <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
            <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
          </picture>
        </div>
      </section>
    );
  }
};

export default withAlert()(Contact);