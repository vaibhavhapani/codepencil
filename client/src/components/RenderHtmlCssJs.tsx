import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export default function RenderHtmlCssJs() {
    const code = useSelector(
        (state:RootState) => state.compilerSlice.languages
    );

    const execute = `<html><style>${code.css}</style><body>${code.html}</body><script>${code.javascript}</script></html`

    const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
        execute
    )}`;

  return (
    <div className="bg-white border-2 h-full">
        <iframe className="w-full h-full" src={iframeCode}></iframe>
    </div>
  )
}
