import React, { useEffect } from 'react';

const Dashboard = () => {

  useEffect(() => {
    fetch('http://localhost:5000/news/')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }, [])


  return (
    <div>
      This is Dashboard..
    </div>
  );
};

export default Dashboard;