import React from "react";

export const convertTextLineBreak = (text: string) => {
  return text.split("\n").map((t, i, a) => (
    <React.Fragment key={i}>
      {t}
      {i !== a.length - 1 && <br />}
    </React.Fragment>
  ));
};
