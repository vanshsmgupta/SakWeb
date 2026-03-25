import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Linkedin, ArrowRight, Send, ExternalLink, 
  Menu, X, ChevronDown, MailPlus, RefreshCw, Zap, TestTube, 
  Inbox, Gauge, BarChart3, Code2, TrendingUp, Users, Target,
  Briefcase, Award, GraduationCap, Globe, Palette, PenTool,
  Facebook, Twitter, Instagram, Youtube, ArrowUpRight
} from 'lucide-react'

// Client logos data
const clients = [
  { name: 'FryAway', logo: 'https://fryaway.co/cdn/shop/files/New-fryaway-logo-color.png?v=1711624494', website: 'https://fryaway.co/' },
  { name: 'Shower Toga', logo: 'https://showertoga.com/cdn/shop/files/ST_All_Colors.png?v=1711393232', website: 'https://showertoga.com/' },
  { name: 'ChordBuddy', logo: 'https://thechordbuddy.com/cdn/shop/files/CB_Logo_300x300.png?v=1642987914', website: 'https://www.chordbuddy.com/' },
  { name: 'Summit One Vanderbilt', logo: 'https://summitov.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-21-at-3.26.59-PM.png', website: 'https://summitov.com/' },
  { name: 'FuelMe', logo: 'https://mma.prnewswire.com/media/1431045/Fuel_Me_Logo.jpg', website: 'https://fuel.me/' },
  { name: 'Velocity Logic', logo: 'https://cdn.prod.website-files.com/672a3431e72f675299d0a225/673dd7a6ba0fd51687db84cf_VLG_SecondaryLogo_hires-04.png', website: 'https://www.velocitylogicgroup.com/' },
  { name: 'Visible Genomics', logo: 'https://images.squarespace-cdn.com/content/v1/5f74ef6c7c80946339675b2f/8a1e6627-af8f-48ec-86e0-134e65eee2fc/VisibleGenomics_Primary_FullColor-01.png', website: 'https://www.visiblegenomics.com/' },
  { name: 'Insurance Zebra', logo: 'https://cdn.thezebra.com/zfront/static/cf97887/zfront/img/iz-share-logo.png', website: 'https://www.thezebra.com/' },
  { name: 'BloomNet', logo: 'https://mms.businesswire.com/media/20211117006098/en/792186/5/BLN_LOGO_FNL_RGB.jpg', website: 'https://www.bloomnet.net/' },
  { name: 'Restaurant Furniture Plus', logo: 'https://www.restaurantfurnitureplus.com/cdn/shop/t/74/assets/logo.png', website: 'https://www.restaurantfurnitureplus.com/' },
  { name: 'Big Gorilla Apps', logo: 'https://biggorillaapps.com/wp-content/uploads/2023/01/Group-10011.png', website: 'https://biggorillaapps.com/' },
  { name: 'Ellee Couture', logo: '', website: 'https://www.elleecoutureboutique.com/' },
]

const skills = [
  { name: 'Email Campaign Strategy', icon: MailPlus, color: '#FF3D00' },
  { name: 'Lifecycle Marketing', icon: RefreshCw, color: '#FF6D00' },
  { name: 'Marketing Automation', icon: Zap, color: '#FF9100' },
  { name: 'A/B & Multivariate Testing', icon: TestTube, color: '#FF3D00' },
  { name: 'Email Deliverability', icon: Inbox, color: '#FF6D00' },
  { name: 'HubSpot & Klaviyo', icon: Gauge, color: '#FF9100' },
  { name: 'GA4 & Analytics', icon: BarChart3, color: '#FF3D00' },
  { name: 'HTML Email Coding', icon: Code2, color: '#FF6D00' },
]

const projects = [
  {
    title: 'Lifecycle Automation Framework',
    description: 'Designed reusable automation blueprint for eCommerce brands including Welcome, Browse Abandonment, Abandoned Cart, and Post-Purchase flows. Integrated dynamic product feeds and behavioral triggers, increasing customer retention by 28%.',
    impact: '28% retention increase',
    tags: ['Automation', 'eCommerce', 'Personalization']
  },
  {
    title: 'Email Deliverability Optimization Playbook',
    description: 'Created structured authentication setup guide for SPF, DKIM, DMARC, and BIMI implementation. Improved inbox placement rate by 8-12% for implementation partners.',
    impact: '8-12% inbox improvement',
    tags: ['Deliverability', 'Authentication', 'Compliance']
  },
  {
    title: 'Enterprise Email Strategy',
    description: 'Managed full lifecycle email campaigns for 34 enterprise clients simultaneously, handling 500k+ subscriber databases. Improved average open rates by 18%.',
    impact: '$24K+ ROI generated',
    tags: ['Strategy', 'Enterprise', 'ROI']
  },
  {
    title: 'Advanced Segmentation & Personalization',
    description: 'Developed RFM modeling and engagement-based cohort analysis strategies. Created dynamic content personalization that increased click-through rates by 35%.',
    impact: '35% CTR increase',
    tags: ['Segmentation', 'Personalization', 'Data Analysis']
  }
]

const blogPosts = [
  {
    id: 1,
    title: 'The Bullet Journal Method: 10 Years of Analog Planning',
    category: 'Personal Development',
    excerpt: 'Discover the philosophy behind organized planning and how it can transform your productivity. A deep dive into the art of mindful journaling.',
    date: '2024',
    content: `The Bullet Journal Method has transformed how millions approach productivity and self-reflection. Developed by Ryder Carroll, this analog system combines elements of a planner, journal, and notebook into one powerful tool.

## The Core Philosophy

At its heart, the Bullet Journal is about intentional living. It's not just about organizing tasks—it's about understanding why you do what you do.

### Key Principles

1. **Rapid Logging** - Using bullet points to capture information quickly
2. **Signifiers** - Adding meaning to your entries
3. **Collections** - Grouping related information
4. **Migration** - Moving unfinished tasks forward

## My 10-Year Journey

After a decade of using this method, I've found that the act of physically writing things down creates a deeper connection to our goals and aspirations. The ritual of daily journaling provides a moment of mindfulness in an increasingly digital world.

The迁移 (migration) process—reviewing and moving incomplete tasks—forces us to consciously decide what's truly important. This intentionality is what separates effective productivity from mere busyness.`
  },
  {
    id: 2,
    title: 'Pantone Color of the Year 2026: Marketing Trends',
    category: 'Digital Strategy',
    excerpt: 'When marketing becomes the new black - understanding color psychology in brand messaging and visual communication.',
    date: '2024',
    content: `Color has always been a powerful tool in marketing, but 2026 brings new dynamics to how we use color in brand strategy.

## The Psychology of Color

Colors evoke emotions and drive behavior. Understanding this connection is crucial for effective marketing.

### Key Color Trends

- **Warm Oranges** - Energy, enthusiasm, and action
- **Soft Neutrals** - Calm, reliability, and sophistication
- **Vibrant Accents** - Drawing attention and creating memorable experiences

## Implementation Tips

1. **Consistency** - Maintain color coherence across all platforms
2. **Accessibility** - Ensure sufficient contrast for all users
3. **Cultural Awareness** - Consider color meanings in different markets

The future of color in marketing lies in finding the balance between standing out and fitting in.`
  },
  {
    id: 3,
    title: '7 Women Marketers I Want to Be Like',
    category: 'Personal Development',
    excerpt: 'Inspiring women in marketing who are reshaping the industry with their innovative approaches and leadership.',
    date: '2024',
    content: `The marketing industry is full of incredible women who are breaking barriers and setting new standards. Here are seven marketers who inspire me:

## Industry Leaders

### 1. Ann Handley
Known as the "Most Influential Content Marketer," Ann has written extensively about content marketing and has helped thousands of businesses tell their stories more effectively.

### 2. Rand Fishkin
While technically in SEO, Rand's approach to transparent marketing and "Wizard of Oz" philosophy has influenced countless marketers.

### 3. Marie Forleo
Her combination of marketing expertise and personal development has created a movement in entrepreneurship.

## What We Can Learn

These leaders share common traits:
- Authenticity in communication
- Generous knowledge sharing
- Focus on long-term relationship building
- Data-informed decision making

The future of marketing is brighter with these women leading the way.`
  },
  {
    id: 4,
    title: 'Remarkable Content Angles: Standing Out Uniquely',
    category: 'Content Marketing',
    excerpt: 'How to create content that is uniquely yours and captures attention in a crowded digital space.',
    date: '2024',
    content: `In a world drowning in content, standing out requires more than just good writing—it requires a unique perspective.

## Finding Your Angle

Your content angle is the unique lens through which you view and present information. It's what makes your voice distinctly yours.

### Steps to Develop Your Angle

1. **Self-Reflection** - What unique experiences shape your perspective?
2. **Audience Understanding** - What problems can only you solve?
3. **Competitive Analysis** - What's missing in current content?
4. **Voice Development** - How do you want to sound?

## Practical Applications

The best content angles often come from:
- Personal failures and lessons learned
- Counter-intuitive insights
- Cross-industry connections
- Deep expertise in niche topics

Remember: authenticity beats perfection every time.`
  },
  {
    id: 5,
    title: 'Building a Distinctive Brand: Brand Strategy Guide',
    category: 'Brand Messaging',
    excerpt: 'Creating a brand that stands out and resonates with your target audience in meaningful ways.',
    date: '2024',
    content: `Brand differentiation is more important than ever. Here's how to build a brand that truly stands out.

## The Brand Gap

As Marty Neumeier describes, the brand gap is the difference between how you see your brand and how customers see it.

### Key Strategies

1. **Simplify** - Make your message clear and memorable
2. **Differentiate** - Find what makes you unique
3. **Collaborate** - Work with partners who complement your brand

## Zag: The Strategy of Being Different

Following the "Zag" methodology means being different when everyone else is going in the same direction.

- When others go fast, you go slow and thoughtful
- When others go broad, you go deep
- When others generalize, you specialize

Your brand is your promise to your customers. Make it memorable.`
  },
  {
    id: 6,
    title: 'Top Marketing Newsletters for Professionals',
    category: 'Digital Strategy',
    excerpt: 'A curated list of marketing newsletters that will keep you ahead of industry trends.',
    date: '2024',
    content: `Staying informed is crucial in marketing. Here are the newsletters that top professionals swear by.

## Must-Read Newsletters

### Daily Updates
- **Marketing Brew** - Daily marketing news in an accessible format
- **The Hustle** - Business and tech news that matters

### Weekly Insights
- **Neil Patel** - SEO and content marketing tips
- **Social Media Examiner** - Social media strategies

### Thought Leadership
- **Milk Road** - Tech and startup marketing
- **Daring Fireball** - Tech industry analysis

## How to Maximize Value

1. Create a dedicated reading time
2. Take notes on actionable insights
3. Implement one thing per week
4. Share relevant content with your network

Knowledge is power, but only when applied.`
  }
]

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Navbar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary-500">
          Sakshi<span className="text-gray-900">Bagora</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary-500 font-medium">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <motion.div style={{ y: y2 }} className="absolute top-40 -left-40 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary-400 rounded-full opacity-20"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-primary-500 font-semibold mb-4 tracking-wider uppercase text-sm">
              Email Marketing Specialist
            </motion.p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-500 to-orange-400 bg-clip-text text-transparent">
                Sakshi Bagora
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Results-driven Email Marketing & Lifecycle Campaign Specialist with 3+ years driving revenue growth through automation, segmentation, and deliverability optimization.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200">
                Get In Touch <ArrowRight size={20} />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300">
                View Work
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div><p className="text-4xl font-bold text-primary-500">3+</p><p className="text-gray-500">Years Experience</p></div>
              <div><p className="text-4xl font-bold text-primary-500">34+</p><p className="text-gray-500">Enterprise Clients</p></div>
              <div><p className="text-4xl font-bold text-primary-500">500K+</p><p className="text-gray-500">Subscribers Managed</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-primary-100 rounded-3xl transform rotate-2" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://s3.us-west-2.amazonaws.com/yourware-assets/user_assets/NEkZVn1bxKNxZDkwljAzlyG8oWK2/8c4c0d9e-6b2a-4621-83fb-dd5129501ea7/6ylfcmwo3o.png" 
                  alt="Sakshi Bagora - Email Marketing Specialist working on laptop" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium text-gray-700">HubSpot Certified</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium text-gray-700">Klaviyo Expert</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-primary-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-400 mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-primary-100 rounded-3xl transform -rotate-2" />
              <div className="relative bg-gradient-to-br from-primary-500 to-orange-500 rounded-3xl p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  With over 3 years of experience in email marketing and lifecycle campaigns, I specialize in helping brands build meaningful relationships with their customers through strategic email automation.
                </p>
                <p className="text-white/90 leading-relaxed mb-6">
                  Currently working at Uplers (Inbox Army / Mavlers), I manage full lifecycle email campaigns for 34 enterprise clients simultaneously, handling 500k+ subscriber databases.
                </p>
                <p className="text-white/90 leading-relaxed">
                  My expertise spans across HubSpot, Klaviyo, and various email marketing platforms, with a strong focus on deliverability optimization and ROI-driven campaigns.
                </p>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div><p className="text-3xl font-bold">18%</p><p className="text-white/70 text-sm">Avg. Open Rate Increase</p></div>
                    <div><p className="text-3xl font-bold">35%</p><p className="text-white/70 text-sm">CTR Improvement</p></div>
                    <div><p className="text-3xl font-bold">99%</p><p className="text-white/70 text-sm">Inbox Placement</p></div>
                    <div><p className="text-3xl font-bold">$24K+</p><p className="text-white/70 text-sm">ROI Generated</p></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <a href="tel:+918959399054" className="flex items-center gap-4 text-gray-600 hover:text-primary-500 transition-colors">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"><Phone size={20} className="text-primary-500" /></div>
                    <span>+91 8959399054</span>
                  </a>
                  <a href="mailto:sakshibagora9@gmail.com" className="flex items-center gap-4 text-gray-600 hover:text-primary-500 transition-colors">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"><Mail size={20} className="text-primary-500" /></div>
                    <span>sakshibagora9@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"><MapPin size={20} className="text-primary-500" /></div>
                    <span>Indore, India</span>
                  </div>
                  <a href="https://linkedin.com/in/sakshi-bagora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-primary-500 transition-colors">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"><Linkedin size={20} className="text-primary-500" /></div>
                    <span>linkedin.com/in/sakshi-bagora</span>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Education</h4>
                <div className="border-l-2 border-primary-500 pl-4">
                  <p className="font-semibold text-gray-900">Bachelor of Technology (B.Tech)</p>
                  <p className="text-primary-500">Computer Science</p>
                  <p className="text-gray-500 text-sm">Sushila Devi Bansal College, Indore</p>
                  <p className="text-gray-400 text-sm">2019 - 2023</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {['HubSpot Email Marketing', 'Klaviyo Core & Deliverability', 'Microsoft Dynamics 365', 'DMARC Deployment', 'Mailchimp', 'Iterable Foundation', 'SMS Foundation', 'Shopify'].map((cert) => (
                    <span key={cert} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Skills & <span className="text-primary-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized skills in email marketing automation, deliverability optimization, and data-driven campaign management
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-400 mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default h-full"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: `${skill.color}20` }}>
                  <skill.icon size={28} style={{ color: skill.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.name}</h3>
                <div className="w-12 h-1 rounded-full transition-all duration-300 group-hover:w-full" style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}80)` }} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platform Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Email Platforms', items: ['HubSpot', 'Klaviyo', 'ActiveCampaign', 'Mailchimp', 'Brevo', 'GetResponse', 'Campaign Monitor', 'Omnisend'] },
                { title: 'Analytics Tools', items: ['Google Analytics 4', 'Looker Studio', 'ROI Analysis', 'UTM Tracking', 'A/B Testing', 'Cohort Analysis'] },
                { title: 'Technical Skills', items: ['HTML Email', 'Liquid', 'API Integrations', 'Zapier', 'Shopify', 'WooCommerce'] }
              ].map((category, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-6 h-full">
                  <h4 className="font-semibold text-primary-500 mb-4 flex items-center gap-2">
                    <Gauge size={18} /> {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-primary-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic initiatives that delivered measurable results and drove significant ROI
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-400 mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {project.impact}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Clients Marquee Section
function Clients() {
  return (
    <section id="clients" className="py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-orange-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Brands I've <span className="text-white/80">Worked With</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Trusted by leading brands across diverse industries
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto mt-6" />
          </div>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-600 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-600 to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex items-center justify-center h-20">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto max-w-40 object-contain filter brightness-0 invert"
                  />
                ) : (
                  <span className="text-white/70 text-sm font-medium px-4 py-2 border border-white/30 rounded-full">
                    {client.name}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Blog Page Component
function BlogPost({ post, onBack }: { post: typeof blogPosts[0]; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <button onClick={onBack} className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
            <ArrowRight className="rotate-180" size={20} /> Back to Blog
          </button>
          
          <div className="mb-8">
            <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">{post.category}</span>
            <p className="text-gray-500 mt-2">{post.date}</p>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
              }
              if (paragraph.startsWith('- ') || paragraph.match(/^\d+\./)) {
                return <li key={idx} className="text-gray-600 ml-4 mb-2">{paragraph.replace(/^[-\d.]\s*/, '')}</li>
              }
              return <p key={idx} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
            })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

// Blog Section
function Blog({ onPostClick }: { onPostClick: (post: typeof blogPosts[0]) => void }) {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-primary-500">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing knowledge and perspectives on marketing, strategy, and personal development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-400 mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 6).map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                onClick={() => onPostClick(post)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-primary-500/20 to-orange-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-orange-500/10" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-500">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary-500 font-medium text-sm group-hover:gap-4 transition-all mt-auto">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's <span className="text-primary-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to achieve your email marketing goals.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-400 mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 8959399054', href: 'tel:+918959399054' },
                  { icon: Mail, label: 'Email', value: 'sakshibagora9@gmail.com', href: 'mailto:sakshibagora9@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Indore, India', href: null },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/sakshi-bagora' }
                ].map((item, idx) => (
                  item.href ? (
                    <a key={idx} href={item.href} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <item.icon size={24} className="text-primary-500 group-hover:text-white" />
                      </div>
                      <div><p className="text-sm text-gray-500">{item.label}</p><p className="font-semibold text-gray-900">{item.value}</p></div>
                    </a>
                  ) : (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                        <item.icon size={24} className="text-primary-500" />
                      </div>
                      <div><p className="text-sm text-gray-500">{item.label}</p><p className="font-semibold text-gray-900">{item.value}</p></div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 lg:p-12 rounded-3xl shadow-lg">
              <div className="space-y-6">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field === 'name' ? 'Your Name' : 'Email Address'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      value={formState[field as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field]: e.target.value })}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-orange-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (<>Send Message <Send size={20} /></>)}
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const footerLinks = {
    'Quick Links': ['About', 'Skills', 'Projects', 'Clients', 'Blog', 'Contact'],
    'Services': ['Email Marketing', 'Marketing Automation', 'Deliverability', 'Strategy Consulting', 'Team Training', 'Campaign Management'],
    'Blog Categories': ['Personal Development', 'Digital Strategy', 'Content Marketing', 'Brand Messaging']
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-bold mb-4">Sakshi<span className="text-primary-500">Bagora</span></h4>
            <p className="text-gray-400 mb-6 max-w-sm">
              Email Marketing & Lifecycle Campaign Specialist helping brands build meaningful customer relationships through strategic automation.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Mail, MapPin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-semibold mb-4 text-primary-500">{title}</h5>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sakshi Bagora. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = 'auto' }
  }, [])

  if (selectedPost) {
    return (
      <div>
        <Navbar />
        <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Clients />
      <Blog onPostClick={setSelectedPost} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
