import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const defaultCode = {
  html: `<h1>Hello</h1>`,
  css: ``,
  javascript: `console.log("Hello!")`
}

export interface CompilerSliceStateType {
  languages: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
  languages: {
    html: defaultCode.html,
    css: defaultCode.css,
    javascript: defaultCode.javascript,
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCode: (state, action: PayloadAction<string>) => {
      state.languages[state.currentLanguage] = action.payload;
    },
    retrievePrevCode: (state, action: PayloadAction<CompilerSliceStateType["languages"]>) => {
      state.languages = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCode, retrievePrevCode } = compilerSlice.actions;
