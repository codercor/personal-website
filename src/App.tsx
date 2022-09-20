import About from "./components/About";
import MainLayout from "./layouts/MainLayout";
import React, { ReactElement, ReactNode, useLayoutEffect, useState } from "react";
import anime from "animejs";
import Loading from "./components/Loading";
export default function App() {

  let [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <MainLayout>
      <About />
      {isLoading && <Loading />}
    </MainLayout>
  )
}
