import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CourseCard({
  title,
  coverVideo,
  syllabus,
  participants,
  level,
  rating,
  _id,
}) {
  const [studentCount, setStudentCount] = useState(participants?.length);
  const [lessionCount, setLessionCount] = useState(syllabus?.length);
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={coverVideo}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Lesson {lessionCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{studentCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            <span>{level}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Link to={`/acadamic/class-room/${_id}`}>
          <Button variant="default">View Class</Button>
        </Link>
        <Badge variant="secondary" className="ml-auto">
          ★ {lessionCount}
        </Badge>
      </CardFooter>
    </Card> 
  );
}
export default CourseCard;
