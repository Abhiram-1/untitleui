import React, { useState } from "react";
import { Menu, ChevronDown, Plus, Minus } from "lucide-react";
import "./App.css";

// Import all images
import answersIcon from "./assets/answers-icon.png";
import apiStack from "./assets/api-stack.png";
import badgeGroup from "./assets/Badgegroup.png";
import boltshift from "./assets/Boltshift.png";
import candiceWu from "./assets/candice-wu.png";
import connectCustomerIcon from "./assets/connect-customer-icon.png";
import connectTool from "./assets/connect-tool.png";
import contentiphone from "./assets/Contentiphone.png";
import dashboard from "./assets/dashboard.png";
import demo from "./assets/demo.png";
import featherdev from "./assets/featherdev.png";
import globalIcon from "./assets/global.png";
import iphone from "./assets/iPhone.png";
import lanaSteiner from "./assets/lana-steiner.png";
import lightbox from "./assets/lightbox.png";
import linear from "./assets/linear.png";
import logo from "./assets/Logo.png";
import nietzsche from "./assets/nietzsche.png";
import oliviaRhye from "./assets/olivia-rhye.png";
import ourPeople from "./assets/our-people.png";
import phoenixBaker from "./assets/phoenix-baker.png";
import profile from "./assets/profile.png";
import reportsIcon from "./assets/reports-icon.png";
import shareTeamInbox from "./assets/share_team_inbox.png";
import sisyphusLogo from "./assets/sisyphus.png";
import teamAvatars from "./assets/team-avatars.png";
import teamIcon from "./assets/team-icon.png";
import uxReview from "./assets/ux-review.png";
import plusIcon from "./assets/plus.png";
import minusIcon from "./assets/minus.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);

  const blogPosts = [
    {
      image: uxReview,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        image: oliviaRhye,
        date: "20 Jan 2024",
      },
    },
    {
      image: linear,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: {
        name: "Phoenix Baker",
        image: phoenixBaker,
        date: "19 Jan 2024",
      },
    },
    {
      image: apiStack,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        image: lanaSteiner,
        date: "18 Jan 2024",
      },
    },
  ];

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "" },
    { question: "What is your cancellation policy?", answer: "" },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Untitled UI Logo" className="logo-image" />
            <span className="logo-text"></span>
          </div>
          <nav className="desktop-nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <div className="dropdown">
              <a href="#products" className="nav-link">
                Products <ChevronDown size={16} className="dropdown-icon" />
              </a>
            </div>
            <div className="dropdown">
              <a href="#resources" className="nav-link">
                Resources <ChevronDown size={16} className="dropdown-icon" />
              </a>
            </div>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </nav>
          <div className="header-actions">
            <img src={profile} alt="Profile" className="profile-image" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-menu-link">
            Home
          </a>
          <a href="#products" className="mobile-menu-link">
            Products
          </a>
          <a href="#resources" className="mobile-menu-link">
            Resources
          </a>
          <a href="#pricing" className="mobile-menu-link">
            Pricing
          </a>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge-container">
              <img
                src={badgeGroup}
                alt="New feature: Check out the team dashboard"
                className="badge-image"
              />
            </div>

            <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
            <p className="hero-description">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>

            <div className="hero-buttons">
              <button className="secondary-button">
                <img src={demo} alt="Demo icon" className="button-icon" />
                Demo
              </button>
              <button className="primary-button">Sign up</button>
            </div>

            {/* Dashboard Preview */}
            <div className="dashboard-preview">
              <img
                src={dashboard}
                alt="Dashboard Preview"
                className="dashboard-image"
              />
            </div>

            {/* Companies */}
            <div className="companies-section">
              <p className="companies-text">
                Join 4,000+ companies already growing
              </p>
              <div className="company-logos">
                {[boltshift, lightbox, featherdev, globalIcon, nietzsche].map(
                  (companyLogo, index) => (
                    <div key={index} className="company-logo">
                      <img
                        src={companyLogo}
                        alt={`Company logo ${index + 1}`}
                        className="logo-image"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="product-showcase">
          <div className="section-content">
            <h2 className="section-subtitle">Features</h2>
            <h3 className="section-title">
              Cutting-edge features for advanced analytics
            </h3>
            <p className="section-description">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>

            <div className="showcase-images">
              <img
                src={contentiphone}
                alt="Desktop and mobile interface"
                className="desktop-image"
              />
              <img
                src={iphone}
                alt="Mobile interface"
                className="mobile-image"
              />
            </div>

            <div className="feature-grid">
              {[
                {
                  icon: teamIcon,
                  title: "Share team inboxes",
                  description:
                    "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                },
                {
                  icon: answersIcon,
                  title: "Deliver instant answers",
                  description:
                    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                },
                {
                  icon: reportsIcon,
                  title: "Manage your team with reports",
                  description:
                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                },
              ].map((feature, index) => (
                <div key={index} className="feature-item">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="feature-icon"
                  />
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <a href="#learn-more" className="feature-link">
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-subtitle">Features</h2>
              <h3 className="section-title">
                Analytics that feels like it's from the future
              </h3>
              <p className="section-description">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>

            <div className="features-grid">
              {[
                {
                  icon: shareTeamInbox,
                  title: "Share team inboxes",
                  description:
                    "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                },
                {
                  icon: answersIcon,
                  title: "Deliver instant answers",
                  description:
                    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                },
                {
                  icon: reportsIcon,
                  title: "Manage your team with reports",
                  description:
                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                },
                {
                  icon: connectCustomerIcon,
                  title: "Connect with customers",
                  description:
                    "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
                },
                {
                  icon: connectTool,
                  title: "Connect the tools you already use",
                  description:
                    "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
                },
                {
                  icon: ourPeople,
                  title: "Our people make the difference",
                  description:
                    "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
                },
              ].map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-container">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="feature-icon"
                    />
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
          <div className="testimonial-content">
            <img
              src={sisyphusLogo}
              alt="Sisyphus"
              className="testimonial-logo"
            />
            <h2 className="testimonial-text">
              We've been using Untitled to kick start every new project and
              can't imagine working without it.
            </h2>
            <div className="testimonial-author">
              <img src={candiceWu} alt="Candice Wu" className="author-image" />
              <p className="author-name">Candice Wu</p>
              <p className="author-title">Product Manager, Sisyphus</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-content">
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-description">
              Everything you need to know about the product and billing.
            </p>
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span>{item.question}</span>
                    <img
                      src={openQuestion === index ? minusIcon : plusIcon}
                      alt={openQuestion === index ? "Collapse" : "Expand"}
                      className="faq-icon"
                    />
                  </button>
                  {openQuestion === index && (
                    <p className="faq-answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="faq-cta">
              <div className="team-avatars">
                <img src={teamAvatars} alt="Team" className="avatars-image" />
              </div>
              <h3 className="cta-title">Still have questions?</h3>
              <p className="cta-description">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
              <button className="primary-button">Get in touch</button>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="blog-section">
          <div className="blog-content">
            <div className="blog-header">
              <h2 className="section-title">Latest blog posts</h2>
              <a href="#view-all-posts" className="view-all-link">
                View all posts
              </a>
            </div>
            <p className="section-description">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-post">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image"
                  />
                  <div className="post-content">
                    <p className="post-category">{post.category}</p>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-description">{post.description}</p>
                    <div className="post-author">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="author-image"
                      />
                      <div className="author-info">
                        <p className="author-name">{post.author.name}</p>
                        <p className="author-date">{post.author.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Trial CTA */}
        <section className="free-trial-section">
          <div className="free-trial-content">
            <h2 className="section-title">Start your free trial</h2>
            <p className="section-description">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="cta-buttons">
              <button className="secondary-button">Learn more</button>
              <button className="primary-button">Get started</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-column">
                <h3 className="footer-title">Product</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#solutions" className="new-feature">
                      Solutions
                      <span className="new-badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="#tutorials">Tutorials</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#releases">Releases</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#about-us">About us</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                  <li>
                    <a href="#press">Press</a>
                  </li>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#media-kit">Media kit</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Resources</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#newsletter">Newsletter</a>
                  </li>
                  <li>
                    <a href="#events">Events</a>
                  </li>
                  <li>
                    <a href="#help-centre">Help centre</a>
                  </li>
                  <li>
                    <a href="#tutorials">Tutorials</a>
                  </li>
                  <li>
                    <a href="#support">Support</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Use cases</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#startups">Startups</a>
                  </li>
                  <li>
                    <a href="#enterprise">Enterprise</a>
                  </li>
                  <li>
                    <a href="#government">Government</a>
                  </li>
                  <li>
                    <a href="#saas-centre">SaaS centre</a>
                  </li>
                  <li>
                    <a href="#marketplaces">Marketplaces</a>
                  </li>
                  <li>
                    <a href="#ecommerce">Ecommerce</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Social</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#twitter">Twitter</a>
                  </li>
                  <li>
                    <a href="#linkedin">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#facebook">Facebook</a>
                  </li>
                  <li>
                    <a href="#github">GitHub</a>
                  </li>
                  <li>
                    <a href="#angellist">AngelList</a>
                  </li>
                  <li>
                    <a href="#dribbble">Dribbble</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Legal</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#terms">Terms</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy</a>
                  </li>
                  <li>
                    <a href="#cookies">Cookies</a>
                  </li>
                  <li>
                    <a href="#licenses">Licenses</a>
                  </li>
                  <li>
                    <a href="#settings">Settings</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-logo">
                <img src={logo} alt="Untitled UI Logo" className="logo-image" />
                <span className="logo-text"></span>
              </div>
              <p className="copyright">
                © 2077 Untitled UI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
