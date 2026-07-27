<div align="center">
  <h1>Sneh Prasad · AI/ML & Full-Stack Portfolio</h1>
  <p>
    <strong>Building intelligent, scalable software and robust machine learning pipelines.</strong>
  </p>
  <p>
    <a href="https://snehprasad.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
    <a href="https://github.com/spsneh07/Portfolio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" /></a>
    <img src="https://img.shields.io/github/stars/spsneh07/Portfolio?style=for-the-badge&color=yellow" alt="Stars" />
    <img src="https://img.shields.io/github/last-commit/spsneh07/Portfolio?style=for-the-badge&color=success" alt="Last Commit" />
  </p>
</div>

<br />

Welcome to the source code for my personal portfolio. Designed to be blazing fast, highly accessible, and visually stunning, this project serves as both a showcase of my work and a testament to my engineering standards.

## ✨ Features

- **Next.js 15 App Router:** Leveraging React Server Components (RSC) for optimal performance.
- **Native GitHub Dashboard:** Real-time GitHub statistics fetched securely via the GitHub REST API and cached server-side (Zero third-party SVG dependencies).
- **Framer Motion Animations:** Smooth, elegant, and staggered micro-interactions that elevate the UX without compromising performance.
- **Tailwind CSS & Glassmorphism:** A custom, unified design system featuring dynamic glow effects and unified typography (Space Grotesk, Inter, JetBrains Mono).
- **SEO & Accessibility:** Fully optimized with OpenGraph tags, JSON-LD structured data, ARIA labels, and Semantic HTML.
- **100% Responsive:** Flawless layouts across Mobile, Tablet, Desktop, and Ultrawide monitors.

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | Core Framework & Routing |
| **React 18** | UI Library |
| **TypeScript** | Type Safety & DX |
| **Tailwind CSS** | Styling & Utility Classes |
| **Framer Motion** | Complex Animations |
| **Lucide React** | Consistent Iconography |
| **Vercel** | Edge Deployment & Hosting |

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/spsneh07/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables (Optional)**
   Create a `.env.local` file in the root directory. To enable higher rate limits for the native GitHub dashboard, add a Personal Access Token:
   ```env
   GITHUB_TOKEN=your_github_pat_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (layout, page, SEO metadata)
├── components/           # Reusable UI components (Hero, Projects, Timeline, etc.)
├── lib/                  # Utility functions and centralized data (data.ts)
├── public/               # Static assets (fonts, images, resume, robots.txt)
└── tailwind.config.ts    # Tailwind theme configuration and design tokens
```

## 📈 Performance & Accessibility

This portfolio was built with a "Production First" mindset:
- **Image Optimization:** Uses `next/image` to prevent layout shifts and reduce payload size.
- **Font Optimization:** `next/font` removes external network requests for Google Fonts.
- **Color Contrast:** The dark theme is meticulously calibrated to ensure text remains highly legible against glass panels.
- **Server Caching:** GitHub API data is cached securely on the server with `revalidate: 3600`, preventing rate limits and guaranteeing instant load times.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Feel free to use this as inspiration for your own portfolio, but please do not copy it directly without attribution!

## 📬 Contact

I'm currently seeking roles in **Full-Stack Software Engineering** and **AI/ML**. Let's connect!
- **LinkedIn:** [linkedin.com/in/sneh-prasad](https://www.linkedin.com/in/sneh-prasad)
- **GitHub:** [@spsneh07](https://github.com/spsneh07)
- **Email:** snehprasad07@gmail.com
