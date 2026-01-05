export default function About() {
  return (
    <section id="about" className="space-y-4 px-4 pt-8">
      <h2 className='text-3xl border-b-2 border-gray-200 pb-2'>About Me</h2>
      <p>
        Hi everyone! I'm Hisham, a Master's Student in Computer Science at the University of Washington, advised by&nbsp;
        <a href="https://homes.cs.washington.edu/~zzhihan/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition duration-100">
          Zhihan Zhang
        </a> and&nbsp;
         <a href="https://homes.cs.washington.edu/~vsiyer/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition duration-100">
          Vikram Iyer
        </a>. I recently graduated with dual degrees in Mathematics and Computer Science at UW (with a minor in Physics).
      </p>
      <p>
        My research focuses on applied AI for science, particularly for health and sustainability. I like problems using data of many forms (bio, geospatial, motion) to solve problems in the natural world. I'm also interested in data visualization, specifically how we can leverage simulations to further education in math and science.
      </p>
      {/* <p>
        My interests are broad: theory and applications, science and engineering. I have a deep appreciation for the mathematical foundations of computer science, such as deep learning, algorithms, statistics, and convex optimization. These days, my work focuses on applying these models to tackle real-world problems.
      </p> */}
      <p>
        Outside of science, I enjoy reading, <a href="https://www.strava.com/athletes/87374664" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition duration-100">
          triathlon-ing
        </a>, gaming, and scouring Google Maps to find obscure parks, roads, and trails. I love meeting new people – feel free to reach out to me if you wanna chat career, hobbies, or anything!
      </p>
    </section>
  )
}
