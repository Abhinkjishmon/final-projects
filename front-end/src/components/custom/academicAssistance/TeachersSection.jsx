import { TeachersHero } from "./TeachersHero";
// import { TeachersTestimonial } from "./TeachersTestimonial";
import { TeachersDecorative } from "./TeachersDecorative";

function TeachersSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <TeachersDecorative />
        <TeachersHero />
      </div>
    </section>
  );
}

export default TeachersSection;
