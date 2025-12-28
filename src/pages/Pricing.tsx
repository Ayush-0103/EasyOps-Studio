import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small tasks and one-time projects",
    price: "$299",
    period: "per project",
    features: [
      "Single deliverable",
      "2 revision rounds",
      "3-5 day turnaround",
      "Email support",
      "Standard formats",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "Best for ongoing operational support",
    price: "$799",
    period: "per month",
    features: [
      "10 hours of work/month",
      "Unlimited revisions",
      "48-hour priority turnaround",
      "Dedicated support",
      "All service categories",
      "Monthly strategy call",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Pro",
    description: "For teams needing comprehensive support",
    price: "$1,499",
    period: "per month",
    features: [
      "25 hours of work/month",
      "Unlimited revisions",
      "24-hour turnaround",
      "Priority support",
      "All service categories",
      "Weekly strategy calls",
      "Dedicated project manager",
      "Custom workflows",
    ],
    cta: "Go Pro",
    popular: false,
  },
];

const oneTimeServices = [
  { service: "Pitch Deck (10-15 slides)", price: "$399" },
  { service: "Landing Page Design", price: "$499" },
  { service: "Marketing Brochure", price: "$199" },
  { service: "Social Media Pack (10 posts)", price: "$249" },
  { service: "Sales Proposal Template", price: "$299" },
  { service: "Automation Setup", price: "$399+" },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | EasyOps Studio - Affordable Startup Support</title>
        <meta 
          name="description" 
          content="Affordable pricing plans for startup support services. Choose from Starter, Growth, or Pro plans, or get one-time services at competitive rates." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Pricing
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Affordable plans designed for growing businesses. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Monthly Plans */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative rounded-3xl p-8 border transition-all duration-300",
                    plan.popular
                      ? "bg-gradient-card border-primary shadow-glow scale-105"
                      : "bg-card border-border/50 hover:border-primary/30 hover:shadow-elevated"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One-Time Services */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  One-Time Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Need Just One Thing?
                </h2>
                <p className="text-muted-foreground text-lg">
                  No commitment required. Pay per project.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft">
                {oneTimeServices.map((item, index) => (
                  <div
                    key={item.service}
                    className={cn(
                      "flex justify-between items-center p-6",
                      index !== oneTimeServices.length - 1 && "border-b border-border/50"
                    )}
                  >
                    <span className="text-foreground font-medium">{item.service}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Which Plan Is Right?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation and we'll help you find the perfect solution.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
