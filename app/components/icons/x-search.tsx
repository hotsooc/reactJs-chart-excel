import * as React from "react";

function XSearch(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 1L15 15M1.00003 15L8.00003 8L15 1" stroke="#909090" stroke-width="1.8" stroke-linecap="round"/>
        </svg>

  );
}

export default XSearch;
