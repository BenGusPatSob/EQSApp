import React from "react";

function SideBar(props) {

  function actualizaPadre(event) {
    props.onChange(event.target.value);
  }

  return <input type = "text" value = {props.valordesdehijo} onChange = {actualizaPadre} />
}

export default SideBar;