import React, { useState } from "react";

const Home = () => {
    const [firstName, setfirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [Mobile, setMobile ]= useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('1');


  return (
    <div className="create">
      <h1>this is form page</h1>
      <form>
        <input type="text" required value={firstName} onChange={(e) => setfirstName(e.target.value)}  placeholder="نام"></input>
        <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="نام خانوادگی"></input>
        <input type="tel" required value={Mobile} onChange={(e) => setMobile (e.target.value)} placeholder="تلفن همراه"></input>
        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="تلفن ثابت"></input>
        <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="آدرس دقیق"></input>
        <select value={gender} onChange={(e) => setGender(e.target.value)} >
          <option value="1">خانم</option>
          <option value="2">آقا</option>
        </select>
        <button>مرحله بعد </button>
      </form>
    </div>
  );
};

export default Home;
