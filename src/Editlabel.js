import React from 'react';

const Editlabel = (props) => {
  // Editable label, a span that replaces itself with an Input box+form on click
  // props:
  //  id: integer, unique to the app state for manipulating 
  //      the label inside state object
  //  content: string, displayed text on the label
  //  class: for setting className (CSS styles)
  //  isEdit: bool, true if in editable input state, false if
  //          plain text span
  //  setIsEdit: function ref for setting isEdit on parent
  //  onChange: function ref for controlling input on parent
  //            state

  const preventDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
    {props.isEdit === true
      ? <form 
          onSubmit={event => {
            event.preventDefault()
            props.setIsEdit(false)}
          }
          onDragStart={event => {
            return false
          }}
          draggable={false}
        >
          <input
            draggable={false}
            className={props.className}
            value={props.content}
            autoFocus={true}
            onFocus={event => event.target.select()}
            onChange={event => props.onChange(props.id, event.target.value)}
            onBlur={event => props.setIsEdit(false)}
            onDragStart={preventDrag}
          >
          </input>
        </form>
      : <span 
          className={props.className}
          onClick={event => props.setIsEdit(true)}
        >{props.content}</span>
    }
    </>
  );
};

export default Editlabel;
