function IconSwitch(props) {
  const { icon, onSwitch } = props;
  console.log('icon' + icon, onSwitch);

  const on = () => {
    onSwitch(icon);
  };
  return (
    <div className="icon-wrap">
      <button className="button-icon" onClick={on}>
        {icon}
      </button>
    </div>
  );
}

export default IconSwitch;