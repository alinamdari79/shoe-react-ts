import { useState } from "react";
import ProvidePage from "./page1/provide-page";
import SatisfyPage from "./page2/satisfy-page";
import FullFillPage from "./page3/fullfill-page";

const BoardingPages = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {page === 0 && <ProvidePage setPage={setPage} />}
      {page === 1 && <SatisfyPage setPage={setPage} />}
      {page === 2 && <FullFillPage setPage={setPage} />}
    </div>
  );
};

export default BoardingPages;
