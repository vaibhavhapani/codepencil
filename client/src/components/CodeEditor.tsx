import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCode } from "@/redux/slices/compilerSlice";

export const CodeEditor = () => {
  const dispatch = useDispatch();

  const languages = useSelector(
    (state:RootState) => state.compilerSlice.languages
  )

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const onChange = React.useCallback((value: any) => {
    dispatch(updateCode(value));
  }, []);

  return (
    <CodeMirror
      value={languages[currentLanguage]}
      height="calc(100vh - 60px - 45px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
};
