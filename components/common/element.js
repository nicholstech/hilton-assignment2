import React from 'react'

const Element = ({ elementType, type, value, changed, name, options, checked, room }) => {
  let inputElement = null
  switch (elementType) {
    case ('input'):
      inputElement =
        <span>
          <input
            type={type}
            checked={checked}
            value={value}
            onChange={changed}/>
          <style jsx>{`
          input[type='checkbox'] {
          /* Double-sized Checkboxes */
          -ms-transform: scale(1.5); /* IE */
          -moz-transform: scale(1.5); /* FF */
          -webkit-transform: scale(1.5); /* Safari and Chrome */
          -o-transform: scale(1.5); /* Opera */
           position:relative;
           top:-2px;
           padding: 10px;
         }
        `}</style>
        </span>
      break

    case ('select'):
      inputElement = (
        <select
          name={name}
          value={value}
          onChange={changed}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
          <style jsx>{`
          select {
            position: relative;
            top: 10px;
            right: 13px;
            margin: 1px 1px 1px 12px;
             /* make arrow and background */

            background:
              linear-gradient(45deg, transparent 50%, #000 50%),
              linear-gradient(135deg, #000 50%, transparent 50%),
              linear-gradient(to right, silver, silver);
            background-position:
              calc(100% - 21px) calc(1em + 2px),
              calc(100% - 16px) calc(1em + 2px),
              100% 0;
            background-size:
              5px 5px,
              5px 5px,
              2.5em 2.5em;
            background-repeat: no-repeat;

            /* styling and reset */

             font: 300 1em/100% "Helvetica Neue", Arial, sans-serif;
            line-height: 1.5em;
            padding: 0.5em 3.5em 0.5em 1em;

            /* reset */

            border-radius: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance:none;
            -moz-appearance:none;
          }
        `}</style>
        </select>
      )
      break
    default:
      return false
  }

  return (
    <React.Fragment>
      {inputElement}
    </React.Fragment>
  )
}

export default Element
