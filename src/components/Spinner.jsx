import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={400}
      speedMultiplier={0.5}
    />
  );
};

export default Spinner;
