import Header from "components/header";
import ColumnGroupingTable from "components/table";

import "pages/styles.css";

const Home = () => {
  return (
    <div className="wrapper">
      <Header text={`Github user's list`} inHomePage />
      <ColumnGroupingTable />
    </div>
  );
};

export default Home;
