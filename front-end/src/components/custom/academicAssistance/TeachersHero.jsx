import { Button } from "@/components/ui/button";

export function TeachersHero() {
  return (
    <div className="space-y-6">
      <div className="text-sm uppercase tracking-wider text-muted-foreground">
        STUDENTS & EDUCATORS
      </div>
      <div>
        <blockquote className="text-4xl md:text-5xl font-serif leading-tight">
          "With this platform, I can access resources tailored to my needs,
          making learning more engaging and effective."
        </blockquote>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg">
        We provide personalized academic assistance to empower students and
        educators. From interactive resources to expert guidance, our platform
        is designed to enhance learning outcomes for everyone.
      </p>
    </div>
  );
}
