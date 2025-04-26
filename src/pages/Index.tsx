import React from "react";
import { DesignSystemDemo } from "@/components/DesignSystemDemo";
import { 
  Heading1, 
  Heading2,
  Body, 
  BodySmall,
  HelperText 
} from "@/components/design-system/typography/Typography";
import { TextInput } from "@/components/design-system/input/TextInput";
import { AlertBanner } from "@/components/design-system/alert/AlertBanner";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Code, CheckCircle2, Package, Palette, Zap, Shield, Users } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export default function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <header className="relative bg-primary/5 border-b overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Heading1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Enterprise Design System
            </Heading1>
            <Body className="text-xl mb-8">
              A comprehensive, accessible, and responsive component library 
              built with React, TypeScript, and Tailwind CSS.
              <br />
              <BodySmall className="mt-2 text-muted-foreground">Developed by Rasika Gupta | VIT Chennai</BodySmall>
            </Body>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="https://github.com/rasika-gup/craft-ui-kit" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow hover:scale-105 active:scale-95"
              >
                <GitHubIcon size={18} />
                View on GitHub
              </a>
              <a 
                href="/storybook" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 shadow-sm hover:shadow hover:scale-105 active:scale-95"
              >
                <Code size={18} />
                Explore Storybook
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">40+</p>
                <p className="text-sm text-muted-foreground">Components</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">TypeScript</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">WCAG 2.1</p>
                <p className="text-sm text-muted-foreground">Accessible</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1.2KB</p>
                <p className="text-sm text-muted-foreground">Avg. Bundle Size</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Heading2 className="mb-4 text-center">Component Categories</Heading2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our design system is organized into logical categories to help you find the right component for your needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Typography</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive set of typography components for consistent text styling.
                </p>
                <div className="space-y-2 mt-6">
                  <div className="text-2xl font-bold">Heading</div>
                  <div className="text-base">Body Text</div>
                  <div className="text-sm text-muted-foreground">Caption</div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Entry</h3>
                <p className="text-muted-foreground mb-4">
                  Form components designed for capturing user input efficiently.
                </p>
                <div className="mt-6">
                  <TextInput
                    id="email-demo"
                    label="Email"
                    placeholder="you@example.com"
                    helperText="We'll never share your email"
                  />
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Feedback</h3>
                <p className="text-muted-foreground mb-4">
                  Components for providing feedback and notifications to users.
                </p>
                <div className="mt-6">
                  <AlertBanner variant="success" title="Success">
                    Your changes have been saved.
                  </AlertBanner>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Heading2 className="mb-4">Why Choose Our Design System?</Heading2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with best practices and modern technologies to help you deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Accessibility First</h3>
                <p className="text-muted-foreground">All components follow WCAG 2.1 guidelines for maximum inclusivity.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Performance Optimized</h3>
                <p className="text-muted-foreground">Lightweight components with minimal bundle size impact.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Extensive Testing</h3>
                <p className="text-muted-foreground">Thoroughly tested across browsers and devices for consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component demo section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Heading2 className="mb-4 text-center">Component Showcase</Heading2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore our core components in action and see how they can be used in your applications.
            </p>
            
            <div className="bg-card rounded-lg shadow-md border p-6 md:p-8">
              <DesignSystemDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heading2 className="mb-6">Ready to Get Started?</Heading2>
            <Body className="mb-8">
              Explore the documentation, check out the component library, and build your next project with our enterprise-grade design system.
            </Body>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/rasika-gup/craft-ui-kit" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow hover:scale-105 active:scale-95"
              >
                <GitHubIcon size={18} />
                Clone Repository
              </a>
              <a 
                href="/documentation" 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 shadow-sm hover:shadow hover:scale-105 active:scale-95"
              >
                <ArrowRight size={18} />
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest updates and releases.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <TextInput
                id="newsletter-email"
                placeholder="you@example.com"
                className="flex-1"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Enterprise Design System</h4>
              <p className="text-sm text-muted-foreground">
                A comprehensive component library for building enterprise-grade applications.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/rasika-gup" className="text-muted-foreground hover:text-foreground transition-colors">
                  <GitHubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rasika-gupta-9b8532293/" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.01C21.9 4.3 21.6 4.5 21.2 4.5H19.5C20.2 4.5 20.9 5.2 20.9 6C20.9 7.8 19.4 9.1 16.3 9.1C15.9 9.1 15.6 9.3 15.5 9.6C15.3 9.9 15.4 10.2 15.6 10.4C15.9 10.7 16.5 11 16.9 11.5C17.4 12 17.9 12.8 17.9 14C17.9 16.6 15.8 18 13 18C12.3 18 11.6 17.9 11 17.8C9.9 17.6 8.7 17.3 7.9 16.9C5.3 15.6 4 13.6 4 11C4 7.1 7.6 4 12 4C12.3 4 12.7 4 13 4.1C13.5 4.1 13.9 3.9 14.1 3.5C14.2 3.2 14.2 2.9 14 2.7C13.9 2.5 13.7 2.3 13.3 2.2C11.3 1.7 9.2 1.8 7.3 2.5C3.5 3.8 1 7.2 1 11C1 14.1 2.7 16.9 5.3 18.4C7.1 19.5 9.5 20 12 20C16.4 20 20.9 17.7 20.9 14C20.9 12.7 20.4 11.6 19.5 10.9C21.1 10.9 22.5 9.6 22.5 8C22.5 6.5 21.7 4.4 20.1 4.5C21.1 4.5 21.9 4.3 22 4.01Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/storybook" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Storybook
                  </a>
                </li>
                <li>
                  <a href="/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/license" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Enterprise Design System. All rights reserved.
              <br />
              <span className="text-xs">Developed by Rasika Gupta | VIT Chennai</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
