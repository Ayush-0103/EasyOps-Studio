import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Mail, Phone, MessageCircle } from "lucide-react";

import dsaGuideImage from "@/assets/dsa-guide.jpeg";
import internshipsImage from "@/assets/government-internships.jpg";

const products = [
  {
    title: "DSA Complete Guide - Basic to Advanced",
    description: "Master Data Structures & Algorithms with this comprehensive guide. From scratch to advanced concepts, perfect for interview preparation and competitive programming.",
    image: dsaGuideImage,
    buyLink: "https://ayushsaxena7.gumroad.com/l/wqlrk",
  },
  {
    title: "List of Government Internships 2026",
    description: "Comprehensive list of government internship opportunities in 2026. Get ahead in your career with curated opportunities across various government departments.",
    image: internshipsImage,
    buyLink: "https://ayushsaxena7.gumroad.com/l/astdzq",
  },
];

const DigitalProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/50 opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-8 border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              Digital Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              EasyOps Studio
              <span className="block text-gradient mt-2">Digital Products</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Curated resources to accelerate your learning and career growth. 
              Quality content crafted with care.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gradient-primary text-primary-foreground rounded-xl h-12">
                      Buy Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Custom Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Need a <span className="text-gradient">Customized Product?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We create tailored digital resources for your specific needs. Whether it's study guides, 
              career resources, or educational content — let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:easyopsstudio@gmail.com"
              className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
              <p className="text-sm text-muted-foreground text-center">easyopsstudio@gmail.com</p>
            </a>

            <a
              href="https://wa.me/917379282042"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground text-center">+91 73792 82042</p>
            </a>

            <a
              href="tel:+917379282042"
              className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
              <p className="text-sm text-muted-foreground text-center">+91 73792 82042</p>
            </a>
          </div>

          <div className="text-center mt-10">
            <a href="mailto:easyopsstudio@gmail.com?subject=Custom Digital Product Request">
              <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8 h-12">
                Request Custom Product
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalProducts;
