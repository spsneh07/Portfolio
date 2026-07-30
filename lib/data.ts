export const profile = {
  name: "Sneh Prasad",
  title: "AI/ML Engineer & Full-Stack Developer",
  subtitle: "B.Tech CSE (AI & ML) @ SRM Institute of Science and Technology",
  location: "Pune, India",
  email: "snehprasad07@gmail.com",
  phone: "+91 9075341967",
  github: "https://github.com/spsneh07",
  linkedin: "https://www.linkedin.com/in/sneh-prasad",
  leetcode: "https://leetcode.com/u/sp_sneh07/",
  tagline:
    "I build intelligent, scalable software that bridges the gap between complex machine learning and intuitive user experiences. Passionate about solving real-world problems through robust full-stack engineering and applied AI.",
};

export const education = {
  school: "SRM Institute of Science and Technology",
  campus: "Kattankulathur, Chennai, India",
  degree: "B.Tech, Computer Science & Engineering (AI & ML)",
  period: "May 2024 – May 2028",
  cgpa: "8.92",
};

export const experience = [
  {
    role: "AI & Machine Learning Intern",
    org: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Pune, India",
    period: "May 2026 – Jul 2026",
    featured: true,
    points: [
      "Built an end-to-end ML pipeline for time-series forecasting on industrial sensor data using ANN, CNN, and LSTM architectures.",
      "Processed and analysed multivariate sensor datasets with Pandas & NumPy; surfaced patterns via Matplotlib visualisations.",
      "Tuned hyperparameters across classical and deep learning models, improving RMSE and MAE metrics by iterative validation.",
      "Delivered a production-ready regression system benchmarked against multiple model architectures for optimal generalisation.",
    ],
    tags: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    role: "Flutter Developer Intern",
    org: "IEEE Engineering in Medicine & Biology Society (IEEE EMBS)",
    location: "Remote",
    period: "Jun 2026",
    featured: false,
    points: [
      "Developed a cross-platform healthcare app in Flutter integrated with India's ABHA digital health ecosystem.",
      "Implemented ABHA Scan & Share and QR-based patient identification for secure health record exchange.",
      "Connected REST APIs for real-time healthcare data communication with a responsive, accessible mobile UI.",
    ],
    tags: ["Flutter", "Dart", "REST API", "ABHA", "Git", "GitHub"],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Vital Skills · Tech Kriti, IIT Kanpur",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    featured: false,
    points: [
      "Designed and shipped full-stack product features for SynergyHub, directly improving user engagement metrics.",
      "Built scalable REST APIs bridging a React frontend to Node.js/Express backend services with MongoDB persistence.",
      "Owned end-to-end feature delivery: schema design, API contracts, frontend integration, and testing.",
    ],
    tags: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Deep Learning for Remaining Useful Life (RUL) Prediction",
    description: "A robust deep learning pipeline designed to predict equipment failure by forecasting Remaining Useful Life (RUL) using NASA's C-MAPSS turbofan dataset.",
    problemSolved: "Mitigated the risk of catastrophic engine failures by transitioning from rigid schedule-based maintenance to highly accurate, data-driven degradation modeling.",
    features: [
      "Architected multivariate time-series forecasting pipelines",
      "Benchmarked 7 advanced architectures spanning ML and DL (LSTM, GRU, CNN)",
      "Optimized hyperparameters via exhaustive cross-validation techniques"
    ],
    outcome: "Significantly outperformed classical ML baselines in RMSE and MAE metrics, demonstrating the superiority of deep sequence models for complex degradation forecasting.",
    tech: ["TensorFlow", "Keras", "LSTM", "GRU", "CNN"],
    github: "https://github.com/spsneh07/Aircraft-Engine-",
    demo: "",
    featured: true,
    status: "Completed",
    image: "gradient-3",
  },
  {
    title: "Machine Learning Fault Classification",
    description: "A data-driven machine learning pipeline that analyzes multivariate sensor data to detect and categorize mechanical anomalies.",
    problemSolved: "Replaced unreliable manual threshold-based monitoring with an automated system to proactively prevent unexpected equipment failures.",
    features: [
      "Conducted rigorous Exploratory Data Analysis (EDA) and data visualization",
      "Engineered ensemble classification models (Random Forest, Gradient Boosting)",
      "Processed and cleaned time-series sensor datasets for optimal model training"
    ],
    outcome: "Achieved 95%+ classification accuracy on validation datasets, establishing a robust framework for scalable industrial monitoring.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/spsneh07/Fault-Maintenance-System",
    demo: "",
    featured: true,
    status: "Completed",
    image: "gradient-1", // Placeholder for dynamic UI gradients
  },
  {
    title: "Secure Full-Stack Banking Platform",
    description: "A high-performance, server-rendered web application engineered to facilitate secure financial transactions and comprehensive account management.",
    problemSolved: "Addressed latency and UX bottlenecks in legacy financial tools by implementing optimized server-side rendering and strictly typed data flows.",
    features: [
      "Engineered end-to-end secure transaction and transfer workflows",
      "Architected a strictly typed, scalable Next.js & TypeScript frontend",
      "Implemented robust authentication and secure session management",
      "Optimized Server-Side Rendering (SSR) for sub-second page loads"
    ],
    outcome: "Built a fully functional financial dashboard architecture demonstrating best practices in web security, performance optimization, and accessible UI design.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/spsneh07/unifiedbankingsystem",
    demo: "",
    featured: false,
    status: "Active Development",
    image: "gradient-2",
  },
];

export const skillsData = [
  {
    category: "Programming",
    iconName: "Code2",
    items: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "AI & Machine Learning",
    iconName: "BrainCircuit",
    items: ["Deep Learning", "TensorFlow", "Keras", "Scikit-learn", "NLP", "Hugging Face"],
  },
  {
    category: "Data Science",
    iconName: "Database",
    items: ["Pandas", "NumPy", "Matplotlib", "Time Series Analysis", "Data Engineering"],
  },
  {
    category: "Web Development",
    iconName: "Globe",
    items: ["React", "Next.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    category: "Cloud & Infrastructure",
    iconName: "Cloud",
    items: ["MySQL", "MongoDB", "Firebase", "Microsoft Azure"],
  },
  {
    category: "Core & Tools",
    iconName: "Wrench",
    items: ["Git/GitHub", "REST APIs", "DSA", "System Design", "VS Code"],
  }
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/SnehPrasad-6265/4170079B5B48D79C?sharingId=959D37FCF549BBDD",
  },
  { name: "Full-Stack Web Development Bootcamp", issuer: "Udemy", url: "" },
  { name: "Generative AI Foundations", issuer: "upGrad", url: "" },
  { name: "Java, OOP, DBMS", issuer: "NPTEL", url: "" },
];

export const publications = [
  {
    title: "Phishing Website Detection Using Attention-Based Deep Neural Networks",
    venue: "Springer Nature Conference Proceedings",
    role: "Co-author & Presenter",
    year: "2025",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-24929-6_41",
  },
  {
    title: "AI in Social Media Marketing: Analyzing Trends and Predicting Consumer Sentiment",
    venue: "IEEE Xplore",
    role: "Co-author",
    year: "2025",
    url: "https://ieeexplore.ieee.org/document/10940649",
  },
  {
    title: "Big Data in Healthcare: Predictive Modeling for Patient Outcomes",
    venue: "IEEE Xplore",
    role: "Co-author",
    year: "2026",
    url: "https://ieeexplore.ieee.org/document/11545343",
  },
  {
    title: "AI-Driven Hiring Practices: Perceptions, Ethics, and Workforce Implications",
    venue: "Taylor & Francis",
    role: "Co-author",
    year: "2026",
    url: "https://doi.org/10.1201/9781003610861-8",
  },
];

export const patents = [
  {
    title: "Smart Imaging Device for Crop Yield Estimation",
    app: "456355-001",
    year: "2025",
    url: "https://search.ipindia.gov.in/DesignQRStatus/PDF_Viewer.aspx?AppNo=NDU2MzU1LTAwMQ==&CNo=MjA1NDEy",
  },
  {
    title: "Agricultural Farm Automation Device",
    app: "432501-001",
    year: "2024",
    url: "https://search.ipindia.gov.in/DesignQRStatus/PDF_Viewer.aspx?AppNo=NDMyNTAxLTAwMQ==&CNo=MTg5MzMw",
  },
];

export const memberships = ["ACM", "IAENG", "IEEE"];
