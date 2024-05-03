import { CodeEditor } from "@/components/CodeEditor";
import RenderHtmlCssJs from "@/components/RenderHtmlCssJs";
import { SubHeader } from "@/components/SubHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <SubHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderHtmlCssJs/>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
