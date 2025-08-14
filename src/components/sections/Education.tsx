import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="border-t">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-primary">Education</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in financial technology and data analytics.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm hover:shadow-elegant transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Virginia Tech — Pamplin College of Business</h3>
                <p className="text-primary font-medium mt-1">B.S. Financial Technology & Big Data Analytics</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>Expected May 2027</span>
                  <span>•</span>
                  <span>Dean's List</span>
                  <span>•</span>
                  <span>Blacksburg, VA</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Comprehensive program combining financial technology, big data analytics, and business strategy. 
                  Developing expertise in data science applications for financial markets, risk management, and business intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;