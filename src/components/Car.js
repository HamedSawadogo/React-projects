import React from 'react';

const Car = ({ url, name, date }) => {
  return (
    <div style={
      {
        width: 200,
        height: 300,
        margin: 10
      }}>
      <img style={{ width: 200, height: 150 }}
        src={url} alt="" />
      <h4>{name}</h4>
      <p>sorti en <strong>{date}</strong></p>
    </div>
  );
};

export default Car;