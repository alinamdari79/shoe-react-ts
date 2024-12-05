import { useState } from "react";
import Loading from "../../components/loading/loading";
Loading;

const Onboarding = () => {
  const [page, setPage] = useState(0);

  return <>{page === 0 && <Loading setPage={setPage} />} </>;
};
export default Onboarding;
