import React from 'react';
import '../styles/Cards.css';
import atomicHabits from "../assets/atomichabits.jpg";
import ikigai from "../assets/ikigai.jpeg";
import rich from "../assets/rich.jpg";
import money from "../assets/money.webp";
import rework from "../assets/rework.jpeg";
import million from "../assets/million.jpg";
import hooked from "../assets/hooked.webp";
import friends from "../assets/friends.jpg";

function Cards() {
  return (
     <section id='cards'>
    <div className='book-section'>
      <div className='box box1'>
        <div className='box-content'>
        <h2>Atomic Habits</h2>
        <div className='box-img' style={{ backgroundImage: `url(${atomicHabits})` }}></div>
        <p>It is a practical guide to creating positive habits and breaking bad ones, focusing on small changes that compound over time for significant results.</p>
        </div>
      </div>
      <div className='box box2'>
      <div className='box-content'>
        <h2>Ikigai</h2>
        <div className='box-img' style={{ backgroundImage: `url(${ikigai})` }}></div>
        <p>It explores the Japanese concept of finding purpose and fulfillment in life by discovering one's passion, mission, vocation, and profession.</p>
        </div>
      </div>
      <div className='box box3'>
      <div className='box-content'>
        <h2>Rich Dad Poor Dad</h2>
        <div className='box-img' style={{ backgroundImage: `url(${rich})` }}></div>
        <p>It contrasts the money mindsets of two father figures, offering insights into financial literacy, investing, and wealth-building.</p>
        </div>
      </div>
      <div className='box box4'>
      <div className='box-content'>
        <h2>The Millionaire Fastlane</h2>
        <div className='box-img' style={{ backgroundImage: `url(${million})` }}></div>
        <p>It proposes unconventional strategies to accelerate wealth-building by focusing on entrepreneurial mindset and creating systems for financial success.</p>
        </div>
      </div>
      <div className='box box1'>
        <div className='box-content'>
        <h2>How to win friends and influence people</h2>
        <div className='box-img' style={{ backgroundImage: `url(${friends})` }}></div>
        <p>It provides timeless principles for effective communication, building relationships, and influencing others positively.</p>
        </div>
      </div>
      <div className='box box2'>
      <div className='box-content'>
        <h2>Rework</h2>
        <div className='box-img' style={{ backgroundImage: `url(${rework})` }}></div>
        <p>It challenges conventional business wisdom, advocating for a more pragmatic and efficient approach to entrepreneurship and productivity.</p>
        </div>
      </div>
      <div className='box box3'>
      <div className='box-content'>
        <h2>Hooked</h2>
        <div className='box-img' style={{ backgroundImage: `url(${hooked})` }}></div>
        <p>It explores the psychology behind habit-forming products and the techniques used to create products that captivate and retain users.</p>
        </div>
      </div>
      <div className='box box4'>
      <div className='box-content'>
        <h2>The Psychology of Money</h2>
        <div className='box-img' style={{ backgroundImage: `url(${money})` }}></div>
        <p>It delves into the behavioral aspects of personal finance, exploring the psychology behind our financial decisions and behaviors.</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Cards;
