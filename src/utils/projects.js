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
  }
];