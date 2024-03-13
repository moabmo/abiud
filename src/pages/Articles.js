import React, { useState } from 'react';
import '../styles/Articles.css';

function Articles() {
  const [expandedArticles, setExpandedArticles] = useState([]);

  const handleToggleArticle = (id) => {
    if (expandedArticles.includes(id)) {
      setExpandedArticles(expandedArticles.filter((articleId) => articleId !== id));
    } else {
      setExpandedArticles([...expandedArticles, id]);
    }
  };

  return (
    <div className='blog-container'>
      <h1>My Blogs</h1>
      <hr />
      <section className="article-section">
        <article>
          <h2>Exploring the Mystique of the Number 13 - Published on March 13, 2024</h2>
          <p>Have you ever wondered why some buildings skip the 13th floor or why Friday the 13th is considered unlucky? In this blog post, we delve into the mysterious history and cultural significance of the number 13.</p>
          <button onClick={() => handleToggleArticle('article1')}>
            {expandedArticles.includes('article1') ? 'Read Less' : 'Read More'}
          </button>
          {expandedArticles.includes('article1') && (
            <>
              <p>The fear of the number 13, known as triskaidekaphobia, has been around for centuries. It's believed to have originated from various cultural and religious beliefs, including the Last Supper where Judas Iscariot, the betrayer of Jesus, was the 13th guest.</p>
              <p>Despite its negative connotations, the number 13 has also been associated with luck and prosperity in some cultures. In ancient Egypt, for example, the number 13 was considered sacred and represented the afterlife.</p>
              <p>From numerology to superstitions, the number 13 continues to intrigue and fascinate people around the world. Whether you're a skeptic or a believer, exploring the mysteries of the number 13 is sure to be an enlightening journey.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nunc sed mi varius suscipit. Nullam viverra, nulla non efficitur pulvinar, tortor arcu volutpat lorem, sed eleifend lacus sem nec ligula. Integer in lectus nec libero consequat eleifend a nec leo. Sed eu sapien at metus laoreet hendrerit. Sed feugiat felis nec ultricies finibus. Maecenas hendrerit, purus nec euismod mattis, justo nisi laoreet elit, at convallis purus nulla nec purus. Maecenas hendrerit augue sit amet odio consequat ultrices. Nam sodales justo id arcu tincidunt, at placerat tortor volutpat. Duis ultricies fringilla ligula, at eleifend tortor ultricies et.</p>
              <p>Fusce ac placerat metus. Mauris in enim vel purus tincidunt interdum. Vestibulum non hendrerit nisi. In lacinia mi vel vehicula rhoncus. Curabitur et eros id odio dictum tempor. Pellentesque interdum bibendum libero. Maecenas dapibus nisl sit amet justo ultricies, a congue quam rhoncus. Suspendisse vitae elit mi. Duis at justo vitae est hendrerit tristique. Donec vestibulum nisi nec justo lacinia, eu viverra felis accumsan. Donec iaculis nisl nec interdum consectetur. Suspendisse ornare, elit sit amet lacinia euismod, turpis nunc auctor turpis, eu ultricies est sem ut sapien. Morbi sit amet lacus eu odio vehicula varius ut et nisl. In hac habitasse platea dictumst. Aliquam erat volutpat. In quis nibh urna. Vivamus euismod, felis nec bibendum feugiat, arcu sapien bibendum sapien, id feugiat dui turpis id sapien.</p>
            </>
          )}
        </article>

        <article>
          <h2>The Art of Mindfulness: Finding Peace in a Busy World - Published on March 14, 2024</h2>
          <p>In today's fast-paced world, finding moments of peace and tranquility can be challenging. In this blog post, we explore the concept of mindfulness and its benefits for mental well-being.</p>
          <button onClick={() => handleToggleArticle('article2')}>
            {expandedArticles.includes('article2') ? 'Read Less' : 'Read More'}
          </button>
          {expandedArticles.includes('article2') && (
            <>
              <p>Mindfulness involves being fully present in the moment and accepting it without judgment. Through practices such as meditation, deep breathing, and mindful movement, individuals can cultivate greater awareness and reduce stress.</p>
              <p>Studies have shown that regular mindfulness practice can lead to improvements in mood, concentration, and overall quality of life. By incorporating mindfulness into your daily routine, you can cultivate a greater sense of peace and harmony amidst the chaos of modern life.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nunc sed mi varius suscipit. Nullam viverra, nulla non efficitur pulvinar, tortor arcu volutpat lorem, sed eleifend lacus sem nec ligula. Integer in lectus nec libero consequat eleifend a nec leo. Sed eu sapien at metus laoreet hendrerit. Sed feugiat felis nec ultricies finibus. Maecenas hendrerit, purus nec euismod mattis, justo nisi laoreet elit, at convallis purus nulla nec purus. Maecenas hendrerit augue sit amet odio consequat ultrices. Nam sodales justo id arcu tincidunt, at placerat tortor volutpat. Duis ultricies fringilla ligula, at eleifend tortor ultricies et.</p>
              <p>Fusce ac placerat metus. Mauris in enim vel purus tincidunt interdum. Vestibulum non hendrerit nisi. In lacinia mi vel vehicula rhoncus. Curabitur et eros id odio dictum tempor. Pellentesque interdum bibendum libero. Maecenas dapibus nisl sit amet justo ultricies, a congue quam rhoncus. Suspendisse vitae elit mi. Duis at justo vitae est hendrerit tristique. Donec vestibulum nisi nec justo lacinia, eu viverra felis accumsan. Donec iaculis nisl nec interdum consectetur. Suspendisse ornare, elit sit amet lacinia euismod, turpis nunc auctor turpis, eu ultricies est sem ut sapien. Morbi sit amet lacus eu odio vehicula varius ut et nisl. In hac habitasse platea dictumst. Aliquam erat volutpat. In quis nibh urna. Vivamus euismod, felis nec bibendum feugiat, arcu sapien bibendum sapien, id feugiat dui turpis id sapien.</p>
            </>
          )}
        </article>

        <article>
          <h2>Unleashing Creativity: Tips for Overcoming Creative Blocks - Published on March 15, 2024</h2>
          <p>Every artist, writer, and creator has experienced moments of creative blockage. In this blog post, we share practical tips and strategies for overcoming creative blocks and unlocking your full creative potential.</p>
          <button onClick={() => handleToggleArticle('article3')}>
            {expandedArticles.includes('article3') ? 'Read Less' : 'Read More'}
          </button>
          {expandedArticles.includes('article3') && (
            <>
              <p>One effective strategy for overcoming creative blocks is to change your environment. Take a walk in nature, visit an art gallery, or simply rearrange your workspace to stimulate new ideas and inspiration.</p>
              <p>Another helpful technique is to establish a regular creative routine. Set aside dedicated time each day for creative pursuits, whether it's writing, painting, or brainstorming new ideas. Consistency is key to nurturing your creativity.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nunc sed mi varius suscipit. Nullam viverra, nulla non efficitur pulvinar, tortor arcu volutpat lorem, sed eleifend lacus sem nec ligula. Integer in lectus nec libero consequat eleifend a nec leo. Sed eu sapien at metus laoreet hendrerit. Sed feugiat felis nec ultricies finibus. Maecenas hendrerit, purus nec euismod mattis, justo nisi laoreet elit, at convallis purus nulla nec purus. Maecenas hendrerit augue sit amet odio consequat ultrices. Nam sodales justo id arcu tincidunt, at placerat tortor volutpat. Duis ultricies fringilla ligula, at eleifend tortor ultricies et.</p>
              <p>Fusce ac placerat metus. Mauris in enim vel purus tincidunt interdum. Vestibulum non hendrerit nisi. In lacinia mi vel vehicula rhoncus. Curabitur et eros id odio dictum tempor. Pellentesque interdum bibendum libero. Maecenas dapibus nisl sit amet justo ultricies, a congue quam rhoncus. Suspendisse vitae elit mi. Duis at justo vitae est hendrerit tristique. Donec vestibulum nisi nec justo lacinia, eu viverra felis accumsan. Donec iaculis nisl nec interdum consectetur. Suspendisse ornare, elit sit amet lacinia euismod, turpis nunc auctor turpis, eu ultricies est sem ut sapien. Morbi sit amet lacus eu odio vehicula varius ut et nisl. In hac habitasse platea dictumst. Aliquam erat volutpat. In quis nibh urna. Vivamus euismod, felis nec bibendum feugiat, arcu sapien bibendum sapien, id feugiat dui turpis id sapien.</p>
            </>
          )}
        </article>
      </section>

      <hr />

      <section className="related-blogs">
        <h2>Related Blogs</h2>
        <ul>
          <li><a href="#">10 Tips for Improving Productivity</a></li>
          <li><a href="#">The Power of Positive Thinking: Cultivating a Positive Mindset</a></li>
          <li><a href="#">Exploring the Benefits of Exercise for Mental Health</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Articles;
