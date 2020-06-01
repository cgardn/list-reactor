import React from 'react';
import './Navbar.css';

const SettingsMenu = (props) => {

  const [isExportShowing, setIsExportShowing] = React.useState(false);

  const showExportBox = (isShowing) => {
    return "";
  };

  const showImportBox = () => {
    console.log("display modal import box");
  };

  return (
    <div
      className="settings-menu-overlay"
      onClick={event => {
        console.log("Clicked outside menu")
        props.setSettingsMenuProps([0,0,false])
      }}
    >
    <ul
      className="settings-menu"
      onClick={event => event.stopPropagation()}
      style={{ top: props.posY, left: props.posX }}
    >
      <li 
        className="settings-menu-item"
        onClick={event => setIsExportShowing(true)}
      >Export</li>
      <li 
        className="settings-menu-item"
        onClick={event => showImportBox()}
      >Import</li>
    </ul>
      {isExportShowing &&
        <ExportDisplay content={props.todoState}/>
      }
    </div>
  );
}

const ExportDisplay = (props) => {
  // box showing JSON.stringify(props.todoState)
  return (
    <textarea 
      className="export-display"
      onClick={event => event.stopPropagation()}
    >
      {JSON.stringify(props.content)}
    </textarea>
  );
}

const Navbar = (props) => {
  const [settingsMenuProps, setSettingsMenuProps] = React.useState([0,0,false]);

  return(
    <div className="navbar">
      <span
        className="navbar-title navbar-item"
      >List Reactor</span>
      <span
        className="navbar-settings navbar-item"
        onClick={event => setSettingsMenuProps([event.pageX, event.pageY, !settingsMenuProps[2]])}
      >Settings</span>
      {settingsMenuProps[2] &&
        <SettingsMenu
          posX={settingsMenuProps[0]-90}
          posY={settingsMenuProps[1]+10}
          todoState={props.todoState}
          setSettingsMenuProps={setSettingsMenuProps}
        />
      }

    </div>
  );
}

export default Navbar;