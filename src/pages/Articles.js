import React from 'react';
import '../styles/Home.css';
import '../styles/Articles.css';

function Articles() {
  return (
    <div className='p'>
      Test lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sed nibh auctor malesuada ut et turpis. Vestibulum ante ipsum
      <h1>Blog Posts</h1>
      <hr />
      <article id="a1">
        <h2>My First Blog Post - Hello World!</h2>
        <p>This is my first blog post where I introduce myself and talk about how to get started with web development.</p>
        <p>This is my first blog post where I introduce myself to the world of programming.</p>
        <button onClick={() => alert('Clicked Article 1')}>Read More</button>
      </article>

      <article id="a2" className="hidden">
        <h2>My Second Blog Post - A Little Bit About Me</h2>
        <p>In this second blog post, I will share a little bit about who I am and what I do when I’m not coding.</p>
        <p>In this blog post, I share a little bit about who I am and what makes me tick.</p>
        <button onClick={() => document.getElementById("a1").classList.remove("hidden")}>Previous</button>
        &nbsp;
        <button onClick={() => document.getElementById("a3").classList.add("hidden")}>Next</button>
      </article>

      <article id="a3">
        <h2>My Third Blog Post - Contact Information</h2>
        <p>Here you can find contact information for me such as email address and social media profiles.</p>
        <button onClick={() => {
          let name = prompt("What's your name?");
          if (name != null) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(name)}`);
          }
        }}>Search My Name</button>
        <br /><br />
        <button onClick={() => document.getElementById("a2").classList.add("hidden")}>Previous</button>&emsp;&emsp;
        <button onClick={() => {
          let email = prompt("What's your email address?");
          if (email != null) {
            window.location.href = `mailto:${email}?subject=Contacting%20You%20From%20The%20Website`;
          }
        }}>Email Me</button>
        <br /><br />
        Click on the "Previous" button to go back to the second blog post or the "Next" button to proceed to the fourth one.
        <br /><br />
        <button onClick={() => document.getElementById("a2").classList.add("hidden")}>Go Back</button>
      </article>
    </div>
  );
}

export default Articles;
