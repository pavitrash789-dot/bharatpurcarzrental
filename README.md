# Kota Carz Self Drive - Modern React Application

High-performance, modern React.js migration for **Kota Carz Self Drive** with enhanced UI, glassmorphism design system, smooth Framer Motion animations, interactive booking calculator, and complete content preservation.

## 🚀 Key Highlights & Enhancements

- **🌗 Seamless Light & Dark Mode Toggle**: Custom `ThemeProvider` with localStorage persistence, smooth transitions, glassmorphism adaptation, and an animated Sun/Moon toggle in the navigation header & mobile drawer.

1. **Complete Content & Asset Preservation**:
   - 100% of all original vehicle technical specifications (Engine CC, Power BHP, Torque, Fuel Tank, Mileage, Dimensions, Boot Space, Ground Clearance).
   - All 9 vehicles: **Swift Dzire, Maruti Baleno, Maruti Ertiga, Vitara Brezza, Hyundai i20, Kia Seltos, Mahindra Thar (4x4), Tata Nexon, Mahindra Scorpio**.
   - Preserved all contact details: Phone: **+91 72969 83702** / **072969 83702**, Email: **info@kotacarzselfdrive.com**, Location: **Unnamed Road, Indraprastha Industrial Area, Kota, Rajasthan 324005**.
   - Full blog guides ("Plan a Safe and Memorable Journey During Monsoon", "How to Choose the Right Car Rental for Your Kota Trip", and recent insights).
   - Complete 8 FAQ questions and answers with categorization.
   - All customer reviews (Harish, Ramkumar, Vishal Bohara, Liam Mendes, Noah Wood, Oliver Queen, Barry Allen).
   - All 9 steps from "How to Book a Self-Drive Car in Kota".
   - Original running taxi track animation in the footer.

2. **UI & Animation Enhancements**:
   - **Framer Motion 13**: Staggered hero typography, 3D tilt hover car cards, springy FAQ accordion, smooth modal transitions, animated step-by-step booking journey.
   - **Modern Automotive Design System**: Deep slate/dark theme with radiant amber gold accents (`#f59e0b`, `#d97706`), frosted glassmorphism (`backdrop-filter: blur`), and crisp typography (Outfit + Plus Jakarta Sans).
   - **Interactive Quick Booking Bar & Modal**: Select car model, pickup/return dates and times, passenger capacity, and generate instant pre-filled WhatsApp booking inquiries.
   - **Real-Time Search Palette (Cmd+K / Ctrl+K)**: Instant search overlay for finding any vehicle, blog post, or FAQ.
   - **Interactive Feedback & 5-Star Rating Widget**: Animated emotion feedback (Poor 🙁, Not bad 😐, Average 🙂, Good 😋, Excellent 🤩) with comment input, mobile validation, modal thank-you confirmation, and confetti celebrations.
   - **Floating WhatsApp Quick Action**: Pulsing wave animation with instant chat trigger.
   - **Responsive Navigation**: Glassmorphic sticky header, search shortcut, and mobile sliding drawer menu.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (Code-split with `React.lazy` & `Suspense`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📂 Project Architecture

```
kotacarz/
├── public/
│   └── assets/
│       ├── img/           # All original car photos, logos, banners, icons
│       └── fonts/         # Web fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Footer.jsx            # Footer with working hours, animated running taxi
│   │   ├── Hero.jsx              # Hero banner with floating badges and stats
│   │   ├── QuickBookingBar.jsx   # Fast WhatsApp booking bar
│   │   ├── BookingModal.jsx      # Interactive modal booking calculator
│   │   ├── CarCard.jsx           # 3D hover car card with specs pills
│   │   ├── CarFleet.jsx          # Filterable vehicle grid with category tabs
│   │   ├── AboutSection.jsx      # Preserved company mission & image collage
│   │   ├── HowItWorks.jsx        # 9-step booking journey with step numbers
│   │   ├── FeaturesSection.jsx   # Safe Guarantee, Fast Pickups, 24/7 Support
│   │   ├── TestimonialsSection.jsx # Passenger reviews carousel
│   │   ├── FaqAccordion.jsx      # Spring-animated FAQ accordion with search
│   │   ├── BlogPreview.jsx       # Blog cards with hover zoom
│   │   ├── ContactSection.jsx    # Interactive contact form & embedded map
│   │   ├── FeedbackModal.jsx     # Star rating & emoji emotion feedback
│   │   ├── SearchPalette.jsx     # Cmd+K command palette search
│   │   ├── FloatingWhatsApp.jsx  # Pulsing floating WhatsApp button
│   │   └── ScrollToTop.jsx       # Smooth scroll to top button
│   ├── data/
│   │   ├── cars.js               # Complete 9-car database with all specs & text
│   │   ├── blogs.js              # Preserved blog posts, tips, and insights
│   │   ├── faqs.js               # All 8 FAQs with category tags
│   │   ├── testimonials.js       # Customer reviews database
│   │   ├── bookingSteps.js       # 9 booking steps from original site
│   │   ├── features.js           # Guarantees & feature highlights
│   │   └── companyInfo.js        # Phone, email, address, working hours, links
│   ├── pages/
│   │   ├── HomePage.jsx          # Main landing page
│   │   ├── CarsPage.jsx          # Full fleet catalog with filtering
│   │   ├── CarDetailPage.jsx     # Detailed car view with specs table & gallery
│   │   ├── AboutPage.jsx         # Full About Us page
│   │   ├── FaqsPage.jsx          # Categorized FAQs page
│   │   ├── BlogsPage.jsx         # Blog articles grid
│   │   ├── BlogDetailPage.jsx    # Complete blog reading view
│   │   ├── ContactPage.jsx       # Contact page with form and Google Map
│   │   ├── ReviewsPage.jsx       # Testimonials page with feedback trigger
│   │   ├── BookRidePage.jsx      # Dedicated booking page
│   │   └── NotFoundPage.jsx      # 404 page
│   ├── utils/
│   │   └── whatsapp.js           # Formatted WhatsApp link generator
│   ├── App.jsx                   # Router setup with lazy loading & modals
│   ├── main.jsx                  # React DOM entrypoint
│   └── index.css                 # Tailwind CSS, custom keyframes & glassmorphism
├── index.html                    # Root HTML with Google Tag & fonts
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build config
```

---

## 💻 How to Run Locally

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```
