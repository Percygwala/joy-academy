# Joy Football Academy

A modern, responsive website for Joy Football Academy built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏆 About

Joy Football Academy is committed to touching lives through football, preparing young players for elite football and life beyond the game. This website showcases our programs, coaching staff, and provides an easy enrolment process.

## ✨ Features

- **Modern Design**: FC Barcelona-inspired UI with beautiful gradients and animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive metadata, OpenGraph, and Twitter cards
- **Fast Performance**: Built with Next.js 14 App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth Framer Motion animations for enhanced UX
- **Contact Forms**: Interactive enrolment form with validation
- **Professional Navigation**: Active link highlighting and mobile menu

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Montserrat, Inter)
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
joy-football-academy/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── programs/          # Programs & pricing page
│   ├── coaches/           # Coaches & contact page
│   ├── enrol/             # Enrolment page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── site/             # Site-wide components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── ui/               # UI components
│   │   ├── Button.tsx    # Reusable button component
│   │   ├── AnimatedSection.tsx # Animation wrapper
│   │   ├── ProgramCard.tsx     # Program display card
│   │   └── CoachCard.tsx       # Coach profile card
│   └── forms/            # Form components
│       └── EnrolForm.tsx # Enrolment form
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── favicon.ico       # Site favicon
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary Red**: `#D7263D` (Academy Red)
- **Primary Yellow**: `#FFD23F` (Academy Yellow)
- **Light Blue**: `#A7D8F5` (Background)
- **Navy**: `#0B2239` (Text)

### Typography
- **Headings**: Montserrat (Bold)
- **Body**: Inter (Regular)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/joy-football-academy.git
   cd joy-football-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

### Home Page (`/`)
- Hero section with academy introduction
- About section with mission and vision
- 5 pillars of the academy
- Call-to-action sections

### Programs (`/programs`)
- Comprehensive program listings
- Pricing information for all age groups
- Two categories: Twice a Week & Up to 3x a Week
- Interactive program cards

### Coaches (`/coaches`)
- Coach profiles and bios
- Contact information
- Location details
- Professional coaching team showcase

### Enrol (`/enrol`)
- Interactive enrolment form
- Parent and child information collection
- Program selection
- Form validation and submission

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://joyfootballacademy.co.za
```

### Tailwind Configuration
Custom colors and fonts are configured in `tailwind.config.ts`.

## 📄 License

This project is private and proprietary to Joy Football Academy.

## 📞 Contact

- **Phone**: 065 974 2376
- **Email**: shange.kzn@gmail.com
- **Location**: Treverton, KwaZulu-Natal, South Africa

## 🙏 Acknowledgments

- Design inspiration from FC Barcelona's website
- Built with modern web technologies for optimal performance
- Focused on accessibility and user experience

---

**Joy Football Academy** — Touching lives through Football ⚽
