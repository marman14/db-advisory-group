# DB ADVISORY GROUP — Healthcare & NPI Consulting Landing Page

A premium, modern, and breathable single-page landing page designed for **DB ADVISORY GROUP**, a healthcare compliance and NPI (National Provider Identifier) consulting firm based in Columbus, GA, founded by **Deion Broadnax**.

---

## 🌟 Key Features

1. **Interactive 3D Motion Hero Background (Three.js)**
   - Custom WebGL particle and constellation network representing national healthcare provider connectivity and clinical data nodes.
   - Real-time mouse and touch parallax response with smooth lerping.
   - Multi-layer dark medical overlay (`#060F1E` to `#0A192F`) guaranteeing 100% legibility of the crisp white typography.

2. **Minimalist & "Breathable" Design Architecture**
   - Generous whitespace and padding to eliminate clutter and provide an executive medical aesthetic.
   - Trustworthy palette: Deep Navy Blue, Medical Teal/Cyan, Crisp White, and soft slate background tones.
   - Legible typography using Inter and Roboto.

3. **Neat Sticky Header**
   - Business branding on the left ("DB ADVISORY GROUP").
   - Pure, uncluttered navigation links on the right (Home, About, Services, Contact) with active section detection and zero button clutter.
   - Responsive mobile navigation drawer.

4. **Dedicated Sections**
   - **Hero**: Headline *"Navigating Healthcare Compliance with Confidence"*, CTA *"Get Free Consultation"*, and trust badges.
   - **About Us**: Focus on Founder & Managing Principal **Deion Broadnax**, Columbus, GA roots, and deep NPI credentialing track record.
   - **Services**: Healthcare Compliance Consulting, NPI Registration & Enumeration (Type 1 & Type 2), and Practice Management & Operations.
   - **Interactive NPI Structure Guide**: Live toggle between Type 1 (Individual Practitioners) and Type 2 (Group Practices/Facilities) requirements and checklists.
   - **Contact & Footer**: Prominent phone line (**+1 706-887-1295**), Columbus, GA office details, and interactive consultation request form with validation and celebration feedback.

---

## 🚀 Running the Project

The application is built with **React 18**, **Vite**, and **Tailwind CSS**.

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 File Structure
```
d:/DB ADVISORY GROUP/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx                # Sticky minimalist navigation
        ├── Hero3DBackground.jsx      # Live Three.js 3D constellation & particles
        ├── Hero.jsx                  # Main headline & primary CTA
        ├── About.jsx                 # Deion Broadnax & Columbus, GA background
        ├── Services.jsx              # 3 Core practice areas + callouts
        ├── InteractiveNpiGuide.jsx   # Type 1 vs Type 2 comparative tool
        ├── Contact.jsx               # Phone (+1 706-887-1295), form, location
        └── Footer.jsx                # Clean medical footer & quick links
```
