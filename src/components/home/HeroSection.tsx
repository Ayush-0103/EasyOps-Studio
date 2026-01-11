import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle min-h-[90vh] flex items-center">
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Rocket className="w-8 h-8 text-primary/20" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: "2s" }}>
          <Zap className="w-10 h-10 text-accent/20" />
        </div>
        <div className="absolute top-40 right-1/4 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-6 h-6 text-primary/15" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up shadow-glow border border-primary/20">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Your Startup Support Partner
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We Handle the Work.
            <br />
            <span className="text-gradient-primary relative">
              You Focus on Growth.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            EasyOps Studio helps startups and small businesses save time by managing their day-to-day operational and creative tasks — affordably and reliably.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild className="shadow-glow hover:shadow-accent-glow transition-shadow duration-300 group">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="hover:shadow-soft transition-shadow">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
