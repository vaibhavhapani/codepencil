import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const defaultCode = {
  html: `<div class="stack">
  <div class="blobs">
    <span class="blob"></span>
    <span class="blob"></span>
    <span class="blob"></span>
    <span class="blob"></span>
  </div>
</div>`,
  css: `*, *::after, *::before {
    box-sizing: border-box;
  }
  :root {
    --aqua:  #7FDBFF;
    --blue:  #0074D9;
    --navy:  #001F3F;
    --teal:  #39CCCC;
    --green: #2ECC40;
    --olive: #3D9970;
    --lime:  #01FF70;
  
    --yellow:  #FFDC00;
    --orange:  #FF851B;
    --red:     #FF4136;
    --fuchsia: #F012BE;
    --purple:  #B10DC9;
    --maroon:  #85144B;
  
    --white:  #FFFFFF;
    --silver: #DDDDDD;
    --gray:   #AAAAAA;
    --black:  #111111;
  }
  html {
    background: #111;
    height: 100%;
  }
  body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .stack {
    display: grid;
    grid-template-areas: 'stack';
  }
  .blobs {
    display: grid;
    grid-template-areas: 'stack';
    position: relative;
    animation: spin infinite 5s linear;
    grid-area: stack;
  }
  .blob--filtered {
  }
  .blob {
    --border-radius: 115% 140% 145% 110% / 125% 140% 110% 125%;
    --border-width: 5vmin;
    
    aspect-ratio: 1;
    display: block;
    grid-area: stack;
    background-size: calc(100% + var(--border-width) * 2);
    background-repeat: no-repeat;
    background-position: center;
    border: var(--border-width) solid transparent;
    border-radius: var(--border-radius, 50%);
    mask-image:
      linear-gradient(transparent, transparent),
      linear-gradient(black, white)
    ;
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
    mix-blend-mode: screen;
    height: 80vmin;
    filter: blur(1vmin);
    
    &:nth-child(1) {
      background-color: var(--blue);
      background-image: linear-gradient(var(--blue), var(--teal), var(--blue));
      rotate: 30deg;
      scale: 1.03;
    }
    
    &:nth-child(2) {
      background-color: var(--red);
      background-image: linear-gradient(var(--red), var(--orange), var(--red));
      rotate: 60deg;
      scale: 0.95;
    }
    
    &:nth-child(3) {
      background-color: var(--olive);
      background-image: linear-gradient(var(--olive), var(--lime), var(--olive));
      rotate: 90deg;
      scale: 0.97;
    }
    
    &:nth-child(4) {
      background-color: var(--purple);
      background-image: linear-gradient(var(--purple), var(--maroon), var(--purple));
      rotate: 120deg;
      scale: 1.02;
    }
  }
  
  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }`,
  javascript: `console.log("Hello World!")`
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
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCode } = compilerSlice.actions;
