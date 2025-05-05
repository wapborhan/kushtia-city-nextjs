const Select = ({ name, setData, disableCon, data }) => {
  return (
    <select
      name={name}
      className="p-2 rounded-md border-2 w-full"
      onChange={(e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        const id = selectedOption.getAttribute("id");
        const name = e.target.value;
        setData({ id, name });
      }}
      defaultValue={name}
      disabled={!disableCon}
    >
      {data &&
        data.map(({ id, name }) => {
          return (
            <option value={name} id={id} key={id}>
              {name}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
