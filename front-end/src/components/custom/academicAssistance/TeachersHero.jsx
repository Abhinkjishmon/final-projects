import { Button } from "@/components/ui/button";

export function TeachersHero() {
  return (
    <div className="space-y-6">
      <div className="text-sm uppercase tracking-wider text-muted-foreground">
        TEACHERS
      </div>
      <div>
        <blockquote className="text-4xl md:text-5xl font-serif leading-tight">
          "I'm finally able to truly differentiate my classroom. This has been
          priceless for my students' engagement."
        </blockquote>
        <div className="mt-6 space-y-2">
          <div className="text-lg font-medium">UDAYA LAKSHMI PALAPALA</div>
          <div className="text-muted-foreground">
            Middle school Coordinator / Hyderabad, Telangana
          </div>
        </div>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg">
        We empower teachers to support their entire classroom. 90% of US
        teachers who have used Khan Academy have found us effective.
      </p>
      <Button
        size="lg"
        className="bg-[#1A73E8] hover:bg-[#1557B0] text-white px-8"
      >
        Teachers, start here
      </Button>
    </div>
  );
}
