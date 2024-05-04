import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Code, Copy, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import { toast } from "sonner";

export const Share = () => {
    const handleClick = () => {
        window.navigator.clipboard.writeText(window.location.href);
        toast(<b className="flex gap-1 items-center" style={{color:"green"}}><Check size={17} />Copied to clipboard!</b>)
    }
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
        <Share2 size={16} />
        Share
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-1 items-center">           <Code />Share your code</DialogTitle>
          <DialogDescription className="flex gap-1">
          <Input className="" value={window.location.href}/>
          <Button variant="outline" onClick={handleClick}><Copy size={16}/></Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
