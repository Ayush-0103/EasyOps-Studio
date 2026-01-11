import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Presentation,
  Palette,
  Globe,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Presentations & Pitch Decks",
    description: "Win investors and close deals with compelling presentations that tell your story.",
    benefits: [
      "Investor-ready pitch decks",
      "Sales presentations",
      "Company overviews",
      "Product demos",
      "Conference slides",
    ],
  },
  {
    icon: Palette,
    title: "Marketing Creatives",
    description: "Stand out with professional marketing materials that capture attention and drive action.",
    benefits: [
      "Brochures & flyers",
      "Social media graphics",
      "Infographics",
      "Banner ads",
      "Email templates",
    ],
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    description: "Beautiful, fast-loading websites that convert visitors into customers.",
    benefits: [
      "Landing pages",
      "Company websites",
      "Product pages",
      "Portfolio sites",
      "Coming soon pages",
    ],
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Clear, engaging content that communicates your value and builds trust.",
    benefits: [
      "Website copy",
      "Blog posts",
      "Email sequences",
      "Product descriptions",
      "Social media content",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | EasyOps Studio - Startup Support Services</title>
        <meta 
          name="description" 
          content="Explore our comprehensive startup support services: pitch decks, marketing creatives, websites, sales materials, automation, and content writing." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Everything Your Business Needs to Thrive
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From pitch decks to automation, we handle the work so you can focus on growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] bg-gradient-card rounded-3xl border border-border/50 shadow-elevated flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and find the perfect solution for your business.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
