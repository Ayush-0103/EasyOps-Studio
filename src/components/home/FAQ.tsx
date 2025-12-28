import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does EasyOps Studio offer?",
    answer: "We offer a comprehensive range of services including pitch deck creation, marketing creatives, website development, sales support materials, automation setup, and content writing. All designed specifically for startups and growing businesses.",
  },
  {
    question: "How quickly can you deliver projects?",
    answer: "Our turnaround time depends on the project scope. Simple tasks can be completed in 24-48 hours, while larger projects typically take 3-7 business days. We always communicate timelines upfront and respect your deadlines.",
  },
  {
    question: "What makes EasyOps Studio different from hiring freelancers?",
    answer: "Unlike freelancers, we offer consistent quality, reliable availability, and a team approach. You get dedicated support, faster turnarounds, and the peace of mind that comes with working with a professional studio.",
  },
  {
    question: "Do you offer monthly retainer packages?",
    answer: "Yes! We offer flexible monthly packages that give you a set number of hours or tasks each month. This is perfect for businesses that need ongoing support without the commitment of full-time hires.",
  },
  {
    question: "Can I request revisions on completed work?",
    answer: "Absolutely. We include revision rounds in all our packages to ensure you're completely satisfied with the final deliverable. Your feedback is essential to our process.",
  },
  {
    question: "How do I get started with EasyOps Studio?",
    answer: "Simply book a free consultation call through our contact page. We'll discuss your needs, recommend the best approach, and get started right away. No lengthy contracts or complicated processes.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
