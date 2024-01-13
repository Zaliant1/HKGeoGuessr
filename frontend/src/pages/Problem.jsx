import React, { useState, useEffect } from "react";
import axios from "axios";

export const Problem = () => {
  const [problem, setProblem] = useState({});

  useEffect(() => {
    if (!problem) {
      axios.get("/problem").then((res) => {
        setProblem(res.data);
      });
    }
  }, [problem]);

  return (
    <div>
      <pre>asdfasdf</pre>
    </div>
  );
};
