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
      "Contributed to an aircraft engine predictive maintenance initiative using the NASA C-MAPSS dataset",
      "Cleaned and processed multivariate sensor data; ran EDA with Pandas, NumPy, and Matplotlib",
      "Built, benchmarked, and reported ML/DL model performance (RMSE, MAE, MSE, R²) for RUL prediction",
      "Iteratively tuned model architectures and hyperparameters across experimental runs to improve accuracy",
    ],
    tags: ["Python", "TensorFlow", "Keras", "Time Series", "Predictive Maintenance"],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Vital Skills · in collaboration with Tech Kriti, IIT Kanpur",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    points: [
      "Shipped full-stack features for SynergyHub using the MERN stack",
      "Built and integrated REST APIs connecting the frontend to backend services",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Aircraft Engine Predictive Maintenance",
    description:
      "End-to-end Remaining Useful Life (RUL) prediction pipeline on the NASA C-MAPSS turbofan degradation dataset — seven models spanning classical ML and deep learning, benchmarked head-to-head.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "LSTM", "GRU", "CNN"],
    highlight:
      "Built 7 models — Linear Regression, Random Forest, ANN, CNN, RNN, LSTM, GRU — benchmarked on RMSE, MAE, MSE, R²",
    github: "https://github.com/spsneh07",
    demo: "",
    featured: true,
  },
  {
    title: "Bearing Fault Classification",
    description:
      "Classification system for detecting bearing faults from sensor data, comparing ensemble methods for reliability in industrial fault-detection settings.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    highlight: "Random Forest & Gradient Boosting classifiers, evaluated and compared",
    github: "https://github.com/spsneh07",
    demo: "",
    featured: false,
  },
  {
    title: "Modern Banking Application",
    description:
      "Full-stack banking application handling account and transaction workflows, built with a type-safe frontend and server-rendered architecture.",
    tech: ["React", "Next.js", "TypeScript"],
    highlight: "End-to-end account & transaction workflows",
    github: "https://github.com/spsneh07",
    demo: "",
    featured: false,
  },
];

export const skills = {
  Languages: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js", "Node.js", "Express.js", "Spring Boot", "Flutter"],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "NumPy",
    "Pandas",
    "Hugging Face",
    "NLP",
  ],
  "Databases & Cloud": ["MySQL", "MongoDB", "Firebase", "Microsoft Azure"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"],
  "Core CS": ["DSA", "OOP", "DBMS", "Operating Systems", "REST APIs"],
};

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
