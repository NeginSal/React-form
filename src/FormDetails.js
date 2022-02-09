import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const FormDetails = () => {
  const { id } = useParams();
  const {
    data: form,
    error,
    isPending,
  } = useFetch("http://localhost:8000/forms/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="form-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {form && (
        <div>
          <form>
            <input type="text" required value={form.firstName}></input>
            <input type="text" required value={form.lastName}></input>
            <input type="tel" required value={form.Mobile}></input>
            <input type="tel" required value={form.phone}></input>
            <input type="text" required value={form.address}></input>
            <input type="text" required value={form.gender}></input>
          </form>
        </div>
      )}
      <button onClick={handleClick}>بازگشت به خانه</button>
    </div>
  );
};

export default FormDetails;
