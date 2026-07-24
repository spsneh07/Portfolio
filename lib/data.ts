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
    points: [
      "Engineered an end-to-end machine learning pipeline for time-series forecasting and regression on industrial datasets.",
      "Cleaned and processed multivariate sensor data; conducted rigorous Exploratory Data Analysis (EDA) using Pandas and NumPy.",
      "Architected, benchmarked, and optimized both classical ML and deep learning models (ANN, CNN, LSTM).",
      "Iteratively tuned model hyperparameters to maximize evaluation metrics (RMSE, MAE, R²) and improve generalization.",
    ],
    tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "Data Engineering"],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Vital Skills · in collaboration with Tech Kriti, IIT Kanpur",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    points: [
      "Designed and shipped full-stack features for SynergyHub, accelerating user engagement.",
      "Built and integrated scalable REST APIs connecting the React frontend to Node.js backend services.",
      "Ensured robust database operations and seamless data flow using MongoDB.",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Intelligent Fault Classification System",
    description: "An advanced machine learning classification system designed to detect and categorize mechanical anomalies in real-time sensor streams.",
    problemSolved: "Traditional industrial monitoring relies on manual inspections or simple thresholds, leading to unexpected failures.",
    features: [
      "Real-time sensor data processing",
      "Ensemble classification (Random Forest & Gradient Boosting)",
      "Automated feature extraction pipelines"
    ],
    outcome: "Achieved high classification accuracy, demonstrating reliability in complex industrial fault-detection settings.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/spsneh07",
    demo: "",
    featured: true,
    status: "Completed",
    image: "gradient-1", // Placeholder for dynamic UI gradients
  },
  {
    title: "Modern Banking Architecture",
    description: "A secure, server-rendered full-stack banking application handling complex account management and transaction workflows.",
    problemSolved: "Legacy banking apps often suffer from poor UX and slow client-side rendering.",
    features: [
      "End-to-end transaction workflows",
      "Type-safe frontend architecture",
      "Server-side rendering for optimal performance",
      "Secure authentication flows"
    ],
    outcome: "Delivered a highly performant, accessible, and responsive financial dashboard.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/spsneh07",
    demo: "",
    featured: true,
    status: "Active Development",
    image: "gradient-2",
  },
  {
    title: "Predictive Lifecycle Modeling",
    description: "Comprehensive Remaining Useful Life (RUL) prediction pipeline utilizing NASA's C-MAPSS turbofan degradation dataset.",
    problemSolved: "Optimizing maintenance schedules requires accurate forecasting of equipment degradation.",
    features: [
      "Multivariate time-series forecasting",
      "7 benchmarked models spanning ML and DL",
      "Hyperparameter tuning and cross-validation"
    ],
    outcome: "Successfully benchmarked LSTM, GRU, and CNN architectures against classical ML baselines on strict evaluation metrics.",
    tech: ["TensorFlow", "Keras", "LSTM", "GRU", "CNN"],
    github: "https://github.com/spsneh07",
    demo: "",
    featured: false,
    status: "Completed",
    image: "gradient-3",
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
