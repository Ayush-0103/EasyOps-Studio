import { MessageSquare, Rocket, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell Us Your Needs",
    description: "Share your requirements through a quick call or message. We'll understand your goals and challenges.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "We Get to Work",
    description: "Our team handles the execution while you focus on what matters most — growing your business.",
  },
  {
    icon: ThumbsUp,
    step: "03",
    title: "Review & Launch",
    description: "Receive polished deliverables, provide feedback, and launch with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple. Fast. Effective.
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is as easy as 1-2-3. No complicated processes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-card border-2 border-border flex items-center justify-center">
                    <item.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
