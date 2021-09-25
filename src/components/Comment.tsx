import React, { useEffect, useRef } from 'react';
const Comment:React.FC = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const createUtterancesEl = () => {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'rukeni/fe');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'comment');
      script.setAttribute('theme', 'github-light');
      script.crossOrigin = 'anonymous';
      script.async = true;
      containerRef.current.appendChild(script);
    };
    createUtterancesEl();
  }, []);
  return <div ref={containerRef} />;
}
export default Comment;