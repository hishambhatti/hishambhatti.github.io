export const projects = [
  {
    title: "Meme Generator",
    short: "An application using deep learning and computer vision to generate meme captions.",
    long: "We train a transformer-based model to extract humorous context from images and craft an amusing caption. Users can upload their own image and explore the quality of generated captions.",
    image: "project_pics/meme-generator.png",
    tools: ["PyTorch", "Flask", "React", "Tailwind CSS", "GCP", "Deep Learning"],
    demo: "https://hishambhatti.com/meme-generator/",
    github: "https://github.com/hishambhatti/meme-generator"
  },
  {
    title: "Human Health Sounds",
    short: "An interactive visualization to organize thousands of human health sounds via t-SNE.",
    long: "We organize thousands of health sounds among six classes from the open-source VocalSound dataset, using machine learning (t-SNE) to cluster these sounds purely through their acoustic properties.",
    image: "project_pics/health-sounds.png",
    tools: ["Python", "Hugging Face", "React", "Unsupervised Learning", "Health"],
    demo: "https://hishambhatti.com/human-health-sounds/",
    github: "https://github.com/ubicomplab/human-health-sounds"
  },
  {
    title: "Mini Google",
    short: "A multithreaded file search engine with a POSIX-compliant web server.",
    long: "A multithreaded file search engine built in C/C++ to handle concurrent users using a custom doubly-linked list and hash table for document indexing. Uses HTML rendering and input sanitization.",
    image: "project_pics/mini-google.png",
    tools: ["C", "C++", "POSIX", "Networking"],
    demo: null,
    github: "https://github.com/hishambhatti/mini-google"
  },
  {
    title: "SVD Image Compression",
    short: "A tool to simulate image compression using singular value decomposition.",
    long: "Uses singular value decomposition, a method of unsupervised learning, to approximate images. Users see a dashboard with insightful statistics to visualize how the quality changes with k.",
    image: "project_pics/image-compression-svd.png",
    tools: ["Python", "React", "Javascript", "Tailwind CSS", "Linear Algebra"],
    demo: "https://hishambhatti.com/image-compression-svd/",
    github: "https://github.com/hishambhatti/image-compression-svd"
  },
  {
    title: "Periodic Pairs",
    short: "A simple matching game for science-type icons, where you design your own gameboard!",
    long: "This is a simple matching game for science-type icons! The twist is that YOU design your own gameboard! Everything in this game is raw frontend (HTML, CSS, Javascript). No frameworks, no libraries.",
    image: "project_pics/periodic-pairs.jpeg",
    tools: ["HTML", "CSS", "Javascript"],
    demo: "https://hishambhatti.com/periodic-pairs/",
    github: "https://github.com/hishambhatti/periodic-pairs"
  },
  {
    title: "CLT Statistics",
    short: "An interactive visualization of the Central Limit Theorem using the Javascript D3 library.",
    long: "Interactivity and simulation are effective educational tools, and our project provides interactive visualizations to teach the Central Limit Theorem (CLT) to students.",
    image: "project_pics/clt-statistics.png",
    tools: ["D3.js", "Javascript", "Statistics", "Education"],
    demo: "https://clt-statistics-a5e31b.pages.cs.washington.edu",
    github: "https://github.com/hishambhatti/clt-statistics"
  },
  {
    title: "DS-labs",
    short: "A sharded, linearizable, available KV store, with dynamic load balancing and atomic multi-key transactions.",
    long: "A sharded, linearizable, available key-value store, with dynamic load balancing and atomic multi-key transactions. Includes exactly-one RPC, primary backup, paxos, and multipaxos.",
    image: "project_pics/ds-labs.png",
    tools: ["Java", "Distributed Systems", "Paxos"],
    demo: null,
    github: "https://github.com/hishambhatti/ds-labs"
  },
  {
    title: "Personal Website",
    short: "My personal website sharing information about my interests, projects, and experience.",
    long:  "My personal website sharing information about my interests, projects, and experience. Built with React and Tailwind CSS and hosted on a custom domain.",
    image: "project_pics/personal-website.png",
    tools: ["React", "Tailwind CSS", "GoDaddy", "Design"],
    demo: "https://hishambhatti.com",
    github: "https://github.com/hishambhatti/hishambhatti.github.io"
  },
  {
    title: "Simple DB",
    short: "A DBMS for concurrent transactions, and handles recovery via a write-ahead log.",
    long:  "A DBMS implementation to run SQL queries. Supports conversion of logical to physical query plan, query optimization, concurrency with Strict 2PL locking, and recovery via a write-ahead log.",
    image: "project_pics/simple-db.png",
    tools: ["Java", "SQL", "Databases", "Concurrency"],
    demo: null,
    github: "https://github.com/hishambhatti/simple-db"
  },
  {
    title: "Clinical Trials",
    short: "An investigation of the statistics behind clinical trial design, with an analysis of the Beta-Blocker Heart Attack Trial.",
    long:  "An investigation of the statistics behind clinical trial design, such as early stopping criteria and group sequential methods. Applied these tools to study the Beta-Blocker Heart Attack Trials in the 70s.",
    image: "project_pics/clinical-trials.png",
    tools: ["R", "Statistics", "Healthcare", "Clinical Trials"],
    demo: null,
    github: "https://github.com/hishambhatti/clinical-trials-drp"
  },
  {
    title: "Campus Map",
    short: "Applying Dijkstra's Algorithm to find the shortest path between points on UW campus.",
    long:  "A full-stack web application implementing Dijkstra's Algorithm to find the shortest path between points on UW campus. Backend built with Spark server and frontend in React.",
    image: "project_pics/campus-map.png",
    tools: ["Java", "Spark", "React", "Algorithms"],
    demo: null,
    github: "https://github.com/hishambhatti/campus-map"
  },
  {
    title: "Monte Carlo Metropolis-Hastings",
    short: "A proof of the MCMH algorithm and an example computing the expectation of a distribution.",
    long:  "A proof that the average error of Monte Carlo Integration converges to 0, and an example using the Metropolis-Hastings algorithm to compute the expectation of an unknown distribution. Submitted for Math 336: Honors Advanced Calculus in Spring 2023.",
    image: "project_pics/mcmh.png",
    tools: ["Jupyter Notebook", "LaTeX", "Statistics", "Algorithms"],
    demo: null,
    github: "https://github.com/hishambhatti/MC-Metropolis-Hastings"
  },
  {
    title: "Persona Pathogen",
    short: "A puzzle game where you play as a single germ trying to hop from host to host!",
    long:  "This game is about steering a disease across the map, infecting all people along the way. Each character has unique movement, which creates a puzzle about transmitting the disease in varied environments.",
    image: "project_pics/persona-pathogen.png",
    tools: ["Unity", "C#", "Game Design"],
    demo: "https://devpost.com/software/melon-jam-submission",
    github: "https://github.com/rishitkhare/Melon-Jam-Submission"
  },
  {
    title: "Kinematic Schematic",
    short: "An algebra solver designed to help students apply various kinematic equations.",
    long:  "Kinematic equations are fundamental to understand Newtonian mechanics. This project allows students to input various physical quantities, and see algebraic steps to obtain the rest.",
    image: "project_pics/kinematic-schematic.png",
    tools: ["Unity", "Simulation", "Physics", "Education"],
    demo: "https://devpost.com/software/kinematic-schematic",
    github: "https://github.com/rishitkhare/kinematic-schematic"
  },
];