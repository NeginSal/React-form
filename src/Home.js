import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [firstName, setfirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [Mobile, setMobile ]= useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('1');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const information = { firstName, lastName, Mobile, phone, address, gender };
        
        
        fetch('https://jsonplaceholder.typicode.com/users',{
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(information)
        }).then(() => {
          console.log('new information added');
          navigate("/list");
        })

    }


  return (
    <div className="create">
      <h6>ثبت نام</h6>
      <p>.لطفا اطلاعات خود را وارد کنید</p>
      <form onSubmit={handleSubmit}>
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
