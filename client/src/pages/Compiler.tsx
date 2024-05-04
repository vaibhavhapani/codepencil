import { CodeEditor } from "@/components/CodeEditor";
import RenderHtmlCssJs from "@/components/RenderHtmlCssJs";
import { SubHeader } from "@/components/SubHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { retrievePrevCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export default function Compiler() {
  const dispatch = useDispatch();
  const {id} = useParams();

  const loadPreviousCode = async () => {
    try {
      const prevCode = await axios.post("http://localhost:8000/compiler/load", {
        id: id
      });
      dispatch(retrievePrevCode(prevCode.data.prevCode));
    } catch (error) {
      if(axios.isAxiosError(error)){
        if(error?.response?.status === 501){
          toast("Inavalid URL")
        }
      }
      handleError(error)
    }
  }

  useEffect(() => {
    if(id) {
      loadPreviousCode();
    }
  }, [id]);

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
