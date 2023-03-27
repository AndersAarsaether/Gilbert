import React, { FC, useState } from "react";
import AppWrapper from "./components/AppWrapper";

const App: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <AppWrapper darkMode={darkMode}>
      <p>test</p>
    </AppWrapper>
  );
};

export default App;
