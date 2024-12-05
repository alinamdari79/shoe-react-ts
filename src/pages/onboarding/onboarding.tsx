import { useState } from "react";
import Loading from "../../components/loadingPage/loading";
import WelcomePage from "../../components/welcomePage/welcome";

const Onboarding = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <Loading setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
    </>
  );
};
export default Onboarding;
