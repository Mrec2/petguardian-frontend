import { useEffect } from "react";

export function useTokenLogger() {
  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("authToken"); 
      console.log("Token actual:", token);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);
}
