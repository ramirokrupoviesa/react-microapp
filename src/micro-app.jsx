import { useEffect } from "react";
import { registerMicroApps, start } from "qiankun";

export default function MicroApp(props) {
  useEffect(() => {
    registerMicroApps([
      {
        name: "email",
        entry: "http://localhost:3000",
        container: "#container",
        activeRule: "/",
        props: { ...props },
      },
    ]);
    start();
  }, [props]);

  return <div id="container" />;
}
