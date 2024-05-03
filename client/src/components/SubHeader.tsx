import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";

export const SubHeader = () => {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector((state:RootState) => state.compilerSlice.languages);

  const handleSaveCode = async () => {
    try {
      const res = await axios.post("http://localhost:8000/compiler/save", {
        fullCode: fullCode
      })
      console.log(res.data);
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <div className="sub-header h-[45px] bg-black text-white p-2 flex justify-between items-center">
      <div className="lang-selector">
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[120px] border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="btn-container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
          onClick={handleSaveCode}
        >
          <Save size={16} />
          Save
        </Button>
        <Button variant="outline">
          {" "}
          <Share2 size={16} />
        </Button>
      </div>
    </div>
  );
};
