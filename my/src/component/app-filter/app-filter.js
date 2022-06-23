import './app-filter.css';


const AppFilter = (props) => {
  const buttonsData = [
    { name: 'All', label: 'Все сотрудники' },
    { name: 'rise', label: 'Сотрудники на повышение' },
    { name: 'moreThen1000', label: 'З/п больше 1000$' },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? ' btn-light' : 'btn-outline-light';
    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  });

  return (
    <div className="btn-group">
      {buttons}
      
    </div>
  );
}

export default AppFilter;