import React, { useState } from "react";

const Home = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    phone: "",
    address: "",
  });
  return (
    <div className="create">
      <h1>this is form page</h1>
      <form>
        <input type="text" required placeholder="نام"></input>
        <input type="text" required placeholder="نام خانوادگی"></input>
        <input type="tel" required placeholder="تلفن همراه"></input>
        <input type="tel" required placeholder="تلفن ثابت"></input>
        <input type="text" required placeholder="آدرس دقیق"></input>
        <select>
          <option value="0" selected="selected">
         جنسیت
          </option>
          <option value="1">خانم</option>
          <option value="2">آقا</option>
        </select>
        <button>مرحله بعد </button>
      </form>
    </div>
  );
};

export default Home;
