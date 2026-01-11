import { DollarSign, Clock, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Get professional support at a fraction of the cost of hiring full-time staff.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality. We respect your deadlines.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "Consistent, dependable service you can count on every time.",
  },
  {
    icon: Users,
    title: "Flexible",
    description: "Scale up or down based on your needs. No long-term commitments.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Startups.
              <br />
              Designed for Growth.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We understand the challenges of running a growing business. That's why we offer solutions that are flexible, affordable, and tailored to your unique needs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-card rounded-3xl border border-border/50 p-8 shadow-elevated">
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mb-6 animate-float">
                  <span className="text-4xl font-bold text-primary-foreground">95%</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Client Satisfaction
                </h3>
                <p className="text-muted-foreground">
                  Our clients love working with us, and it shows in our results.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
