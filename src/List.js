import React, { useState, useEffect } from "react";

const List = () => {
  const [users, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div className="home">
      {users && (
        <div className="blog-list">
          {users.map((user) => (
            <div className="blog-preview" key={user.id}>
              {/* <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.Mobile}</p>
              <p>{user.phone}</p>
              <p>{user.address}</p>
              <p>{user.gender}</p> */}
              <p>{user.name}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
