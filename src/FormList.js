import { Link } from "react-router-dom";

const FormList = ({ forms }) => {
  return (
    <div>
      {forms.map((form) => (
        <div className="form-preview" key={form.id}>
          <Link to={`/forms/${form.id}`}>
            <p>{form.firstName} :نام </p>
            <p>{form.lastName} :نام خانوادگی</p>
            <p>{form.address} :آدرس</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FormList;
