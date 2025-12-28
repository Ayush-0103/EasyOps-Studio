import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "Your success is our success. We prioritize understanding your unique needs and delivering solutions that truly make a difference.",
  },
  {
    icon: Heart,
    title: "Affordability Without Compromise",
    description: "Quality work shouldn't break the bank. We offer competitive pricing that makes professional support accessible to startups of all sizes.",
  },
  {
    icon: Users,
    title: "Flexibility & Scalability",
    description: "Whether you need one deliverable or ongoing support, we adapt to your needs. Scale up or down without any hassle.",
  },
  {
    icon: Eye,
    title: "Transparency & Trust",
    description: "No hidden fees, no surprises. We communicate clearly and deliver on our promises, every single time.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | EasyOps Studio - Our Mission & Story</title>
        <meta 
          name="description" 
          content="Learn about EasyOps Studio's mission to make operational support affordable and accessible for startups and small businesses everywhere." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Making Operations Easy for Growing Businesses
              </h1>
              <p className="text-lg text-muted-foreground">
                We believe every startup deserves professional support without the enterprise price tag.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Mission */}
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make business operations easy and affordable for startups and small businesses everywhere. We handle the time-consuming tasks that slow you down, so you can focus on what you do best — building and growing your business.
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every entrepreneur has access to the operational support they need to succeed. We envision a future where startups can scale without operational stress, armed with professional materials and streamlined processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Born from Real Experience
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  EasyOps Studio was founded with a simple observation: startups and small businesses often struggle with operational tasks that are essential but time-consuming. Creating pitch decks, building websites, designing marketing materials — these tasks take valuable time away from core business activities.
                </p>
                <p className="mb-6">
                  We've seen talented founders spend weeks on a presentation that could have been done in days. We've watched growing companies delay their launch because they couldn't afford professional help. And we decided to change that.
                </p>
                <p>
                  Today, EasyOps Studio serves businesses of all sizes, providing professional operational and creative support at rates that make sense for growing companies. We're not just a service provider — we're a partner in your growth journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover:shadow-elevated transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow faster with less stress.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
