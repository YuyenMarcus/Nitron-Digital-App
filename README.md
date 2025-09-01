# Nitron Website

A modern, responsive website for the Nitron business management app. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design that reflects the app's business focus
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Built-in SEO features and metadata
- **Performance**: Fast loading with Next.js optimizations
- **Accessibility**: WCAG compliant design patterns

## 🎨 Design System

### Color Palette
- **Primary**: Professional blue (#007AFF) - Trust and stability
- **Accent**: Vibrant orange (#FF9500) - Energy and action
- **Neutrals**: Range of grays for clean, professional appearance

### Typography
- **Font**: Inter - Highly readable and modern
- **Hierarchy**: Clear typography scale for easy scanning

## 📱 Sections

1. **Hero Section**: Compelling headline with clear value proposition
2. **Features**: Key app features with icons and descriptions
3. **How It Works**: Simple 3-step process explanation
4. **Testimonials**: Social proof from satisfied users
5. **Pricing**: Transparent pricing with free-to-start model
6. **CTA**: Strong call-to-action for app downloads
7. **Footer**: Comprehensive navigation and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nitron-website
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

## 📁 Project Structure

```
nitron-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/             # Reusable components
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── HowItWorks.tsx     # Process explanation
│   ├── Testimonials.tsx   # User testimonials
│   ├── Pricing.tsx        # Pricing plans
│   ├── CTA.tsx            # Call-to-action
│   └── Footer.tsx         # Footer component
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎯 Customization

### Content Updates
- Edit component files in the `components/` directory
- Update text, images, and links as needed
- Modify colors in `tailwind.config.js`

### Styling Changes
- Custom CSS classes in `app/globals.css`
- Tailwind utilities in component files
- Responsive breakpoints in component classes

### Adding New Sections
1. Create new component in `components/` directory
2. Import and add to `app/page.tsx`
3. Follow existing component patterns

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Build command: `npm run build`
- **Manual**: Run `npm run build` and serve the `.next` directory

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized for mobile performance
- Progressive Web App ready

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Support

For questions or support:
- Email: hello@nitronapp.com
- Documentation: [docs.nitronapp.com](https://docs.nitronapp.com)
- GitHub Issues: [Create an issue](https://github.com/nitronapp/website/issues)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ by the Nitron Team 