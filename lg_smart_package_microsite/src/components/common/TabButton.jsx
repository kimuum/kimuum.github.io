const TabButton = ({ className, tabButtonData, seTabCurrent }) => {
  const tabButtonDatas = tabButtonData || [];
  return tabButtonDatas.map((tab, index) => (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <button
      type="button"
      key={index.toString()}
      className={`${className} ${index === 0 ? "active" : ""}`}
      aria-selected={index === 0 ? true : false}
      onClick={(el) => {
        const buttons = el.target.parentNode.querySelectorAll(`button`);
        if (!tab.initial) {
          buttons.forEach((button) => {
            button.classList.remove("active");
            button.setAttribute("aria-selected", false);
          });
          el.target.classList.add("active");
          el.target.setAttribute("aria-selected", true);
          seTabCurrent(index);
        }
      }}
    >
      {tab.title}
    </button>
  ));
};

export default TabButton;
