import { useSelector } from "react-redux";

import { useFirestoreConnect } from "react-redux-firebase";

import Header from "components/header";
import DataTable from "components/checkboxTable";

import "pages/styles.css";

const Community = () => {
  useFirestoreConnect([{ collection: "community" }]);

  const communityUsers = useSelector(
    (state) => state.firestore.ordered.community
  );

  return (
    <div className="wrapper">
      <Header text={"Users Community Page"} />
      <DataTable data={communityUsers} />
    </div>
  );
};

export default Community;
