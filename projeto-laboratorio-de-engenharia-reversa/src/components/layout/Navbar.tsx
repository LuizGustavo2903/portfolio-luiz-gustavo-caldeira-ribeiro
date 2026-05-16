import { Folder, RotateCcw, RotateCw, Bold, Italic, List, ListOrdered, Quote, Code, Image, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[44px] bg-black/75 backdrop-blur-sm z-50 flex items-center px-4 text-white">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
          <Folder className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 bg-white/20 mx-1" />
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6 bg-white/20 mx-1" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <Italic className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6 bg-white/20 mx-1" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <Quote className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <Code className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <Link className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <Image className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6 bg-white/20 mx-1" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
            <ListOrdered className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
