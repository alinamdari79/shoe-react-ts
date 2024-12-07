import { useState } from "react";
import Loading from "../../components/loading/loading";
import WelcomePage from "../../components/welcome/welcome";
import BoardingPages from "../../components/boarding/boarding";

const Onboarding = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <Loading setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
      {page === 2 && <BoardingPages />}
    </>
  );
};
export default Onboarding;
