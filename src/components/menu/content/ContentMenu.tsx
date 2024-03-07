import { useState } from "react";
const ContentMenu = (shoes: [string], cloth: [string]) => {
  const [state, setState] = useState<[string]>([""]);
  return (
    <>
      {state.map((e, i) => (
        <div>{e}</div>
      ))}
    </>
  );
};

export default ContentMenu;
