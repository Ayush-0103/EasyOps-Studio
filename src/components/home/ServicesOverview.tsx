import { 
  Presentation, 
  Palette, 
  Globe, 
  FileText
} from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Pitch Decks",
    description: "Compelling presentations that win investors and close deals.",
  },
  {
    icon: Palette,
    title: "Marketing Creatives",
    description: "Brochures, social media graphics, and stunning visuals.",
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    description: "Fast, beautiful websites that convert visitors to customers.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Clear, engaging copy for all your business needs.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Operate Smoothly
          </h2>
          <p className="text-muted-foreground text-lg">
            From creative assets to operational support, we've got you covered.
          </p>
        </div>

        {/* Services Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
