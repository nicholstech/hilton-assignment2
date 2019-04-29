import React from 'react';
const Button = ({ label, onClick }) => {
  return (
    <button onClick={e => onClick(e.currentTarget.value)}>
      {label}
      <style jsx>{`
          button {
             margin: 20px;
             padding: 10px;
             font-size: 1em;
             background-color:#ccc;
             box-shadow: 2px 2px 1px 0px #6a6767;
          }
        `}</style>
    </button>

  )
}

export default Button
