import { useState } from "react";
import Gallery from "./gallery";
import { MicroApp } from "@qiankunjs/react";
import OtherComponent from "./other-component";
import { useCallback } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [templateData, setTemplateData] = useState("");
  const [mediaBrowser, setMediaBrowser] = useState();

  const mediaRef = useCallback((node) => {
    if (node !== null) {
      setMediaBrowser(node);
    }
  }, []);

  return (
    <div>
      <OtherComponent />
      {mediaBrowser && (
        <MicroApp
          name="emailEditor"
          entry="http://localhost:3000"
          height="89vh"
          locale="es-ES"
          variables={{ contact: ["firstName", "address"] }}
          templateData={templateData}
          onChange={(values) => {
            setTemplateData(values.fields.content);
          }}
          mediaLibraryRef={mediaBrowser}
        />
      )}
      <Gallery ref={mediaRef} setOpen={setOpen} open={open} />
    </div>
  );
}

export default App;
