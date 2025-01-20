import React, { useState } from "react";
import { GraduationCap, Users, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateClassForm from "./CreateClassForm";
const TeacherHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="relative bg-gradient-to-b from-violet-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="space-y-6">
              <span className="inline-block text-indigo-600 font-semibold tracking-wide uppercase">
                TEACHERS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Empower your students
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Help every student confidently learn anything. With free
                flashcard sets, study modes, and in-class games like Quizlet
                Live, you can instantly create a more engaged classroom.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger>
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                      Create a class Room
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <CreateClassForm
                          closeDialog={() => setIsDialogOpen(false)}
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="mt-2 font-medium">Personalized Learning</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="mt-2 font-medium">Interactive Classes</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="mt-2 font-medium">Study Resources</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teacher in classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHero;
