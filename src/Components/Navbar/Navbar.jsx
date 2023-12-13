import React, { useState } from 'react';

import Paginations from '../Pagination/Pagination';
import Paginationa from '../Pagination/Paginationa';
import ImageLoader from '../ImageLoader/ImageLoader';
import './Navbar.css'
import School from '../Assets/School.webp'
import logo from '../Assets/logo.png'
import men from '../Assets/men.png'
import graph from '../Assets/graph.png'
import circle from '../Assets/circle.png'
import kids from '../Assets/kids.png'
import { AiOutlineRight } from "react-icons/ai";
import youtube from '../Assets/youtube.png'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kumar+One+Outline&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
</style>
const Navbar = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Set the total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const [currentPage1, setCurrentPage1] = useState(1);
  const totalPages1 = 2; // Set the total number of pages

  const handlePageChanges = (newPage) => {
    setCurrentPage1(newPage);
  };
  const [currentPage2, setCurrentPage2] = useState(1);
  const totalPages2 = 2; // Set the total number of pages

  const handlePageChanges1 = (newPage) => {
    setCurrentPage2(newPage);
  };
  return (
    <div className='Homepage'>
    <div className='Navbar'>
       
    <div className='Navbar1'>
        <p><b> SCISM GROUP OF SCHOOLS</b></p>

    </div>
    <div className='Navbar2'>
 
        <ul><li><h3>Home</h3></li></ul>
       
        <ul><li><h3>Our Schools</h3></li></ul>
        <ul><li><h3>Blogs</h3></li></ul>
        <ul><li className='contact'><h3>Contact us</h3></li></ul>
        
    </div>
    
   
    </div>
    <div className="image-container">
    <ImageLoader
        blurredSrc={kids}
        
        alt="Your Alt Text"
      />
    <img className='schoolimg' src={School} alt='school'/>
    <img src={logo} alt='schoologo' className="logo" />

<h1 className='quote'> Building a Better World <br />One Student at a Time.</h1>
<button className="action-button">Virtual tour of Scism <AiOutlineRight className='arrow'/></button>
    </div>
    <div className='HM'>
<div className='HMNote'>
    <h1>Welcome from the Head Master</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Adipisci nostrum ut dicta possimus ratione ipsa sed ipsum? 
         Laudantium ad voluptas provident optio amet ducimus excepturi quaerat? 
         Deserunt modi dolorem odio!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Adipisci nostrum ut dicta possimus ratione ipsa sed ipsum? 
         Laudantium ad voluptas provident optio amet ducimus excepturi quaerat? 
         Deserunt modi dolorem odio!</p>
<button className='read'><p>Read more <AiOutlineRight className='arrow'/></p></button>
</div>
<div className='HMPhoto'>
    <img src={men} alt='men'/>
</div>
    </div>
    <div className='about'>
        <div className='aboutpara'><h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id quo inventore dolore nostrum. Neque et quidem ea quia minus facilis laboriosam. 
            Id quo inventore dolore nostrum. Neque et quidem ea sit amet consectetur adipisicing elit. quia minus facilis laboriosam. 
            Aliquam voluptatem officia excepturi eligendi sequi aut, similique vero.</p>
        <button className='readabout'><p>Read more <AiOutlineRight className='arrow'/></p></button>
        </div>
        <div className='aboutgraph'>
            <img src={graph} alt='graph'/>
        </div>
        
    </div>
    <div className='whyscism'>
            <p>Why <br />SCISM</p>
           
              <Swiper
        slidesPerView={1}
        effect={'fade'}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 3,
          },
        }}
       
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
          >
 
        <SwiperSlide>
        <Paginations currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} />
      <div className='videopage' >
        {/* Content for Slide 1 */}
        {currentPage === 1 && <img className='youtube' src={youtube} alt='youtube'/>}
        {currentPage === 1 && <img className='youtube' src={youtube} alt='youtube'/>}
        {currentPage === 1 && <img className='youtube' src={youtube} alt='youtube'/>}
        {currentPage === 1 && <img className='youtube' src={youtube} alt='youtube'/>}
        {currentPage === 1 && <img className='youtube' src={youtube} alt='youtube'/>}
        
        {/* Content for Slide 2 */}
        {currentPage === 2 && <img className='youtube' src={youtube} alt='youtube'/>}
        {currentPage === 2 && <img className='youtube' src={youtube} alt='youtube'/>}
      </div>
        </SwiperSlide>
       
       
        </Swiper>
           
        </div>
    <div className='ourschools'>
            <h2>Our <br />Schools</h2>
           
              <Swiper
        slidesPerView={1}
        effect={'fade'}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 3,
          },
        }}
       
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
          >
 
        <SwiperSlide>
        <Paginationa currentPage1={currentPage1} onPageChange={handlePageChanges} totalPages={totalPages1} />
        <div className='wholecard'>
             <div className='card'>
              <img src={kids} alt="kids" />
              <p>Kids School</p>
              <button className='schoolview'>View</button>
              </div>
             <div className='card'>
              <img src={kids} alt="kids" />
              <p>Kids School</p>
              <button className='schoolview'>View</button>
              </div>
            
              <div className='card'>
              <img src={kids} alt="kids" />
              <p>Kids School</p>
              <button className='schoolview'>View</button>
              </div>
              </div>

        </SwiperSlide>
      
        </Swiper>
           
        </div>
        <div className='applicationenrollment'>
         <div className='application'>
         <h1> Applications and  <br />Enrollment</h1> 
         </div>
         <div className='enrollment'>
          <input className='input1' type="text" />
          <input className='input' type="text" />
          <input className='inputbutton' type="text" />
         </div>
        </div>
        <div className='ourschools'>
            <h2>NEWS and <br />Events</h2>
           
            <Swiper
        slidesPerView={1}
        effect={'fade'}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 3,
          },
        }}
       
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
          >
 
        <SwiperSlide>
        <Paginationa currentPage1={currentPage2} onPageChange={handlePageChanges1} totalPages={totalPages2} />
      <div className='newspage' >
        {/* Content for Slide 1 */}
        {currentPage === 1 && <div className='newscard'>
              
              </div>}
        {currentPage === 1 && <div className='newscard'>
             
              </div>}
        {currentPage === 1 && <div className='newscard'>
             
              </div>}
        {currentPage === 1 && <div className='newscard'>
              
              </div>}
        {currentPage === 1 && <div className='newscard'>
            
              </div>}
              
       
        
        {/* Content for Slide 2 */}
        {currentPage === 2 && <div className='newscard'>
            
            </div>}
        {currentPage === 2 && <div className='newscard'>
            
            </div>}
      </div>
        </SwiperSlide>
       
       
        </Swiper>
        </div>
        <div className='alumini'>
            <h1>Alumini</h1>
           
              <Swiper
        slidesPerView={1}
        effect={'fade'}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 3,
          },
        }}
       
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
          >
 
        <SwiperSlide>
         <div className='aluminipage' >
        {/* Content for Slide 1 */}
        {currentPage === 1 && <div className='aluminicard'>
        <img src={circle} alt="kids" />
             <h3> Name</h3>
             <p>Batch</p>
             <p>Job</p>
              </div>}
        {currentPage === 1 && <div className='aluminicard'>
        <img src={circle} alt="kids" />
        <h3> Name</h3>
             <p>Batch</p>
             <p>Job</p>
              </div>}
        {currentPage === 1 && <div className='aluminicard'>
        <img src={circle} alt="kids" />
        <h3> Name</h3>
             <p>Batch</p>
             <p>Job</p>
              </div>}
        {currentPage === 1 && <div className='aluminicard'>
        <img src={circle} alt="kids" />
        <h3> Name</h3>
             <p>Batch</p>
             <p>Job</p>
              </div>}
        {currentPage === 1 && <div className='aluminicard'>
        <img src={circle} alt="kids" />
             
              </div>}
      
      </div>
        </SwiperSlide>
       
       
        </Swiper>
           
        </div>

    </div>
  )
}

export default Navbar
