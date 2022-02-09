import FormList from "./FormList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: forms,
  } = useFetch("http://localhost:8000/forms");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {forms && <FormList forms={forms} />}
    </div>
  );
};

export default Home;
