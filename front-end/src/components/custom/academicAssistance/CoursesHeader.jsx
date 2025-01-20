import { Button } from "@/components/ui/button";

const categories = [
  "All Course",
  "Design",
  "Development",
  "Photography",
  "Music",
];

export function   CoursesHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
      <h1 className="text-2xl font-bold">New Class Rooms</h1>
    </div>
  );
}
