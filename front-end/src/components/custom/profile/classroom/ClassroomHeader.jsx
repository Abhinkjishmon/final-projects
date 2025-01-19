import React, { useState } from "react";
import { GraduationCap, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateClassForm from "../../academicAssistance/CreateClassForm";
function ClassroomHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Classroom</h1>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            <span>Create Class</span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <CreateClassForm closeDialog={() => setIsDialogOpen(false)} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default ClassroomHeader;
