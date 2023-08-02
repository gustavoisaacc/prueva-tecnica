export function InputSerch(props) {
  return <input type="text" className="filter--serch" />;
}

export function InputRanger(props) {
  return <input type="range" className="filter--ranger" />;
}

export function InputSelect(props) {
  return (
    <select name="" id="" className="filter--select">
      <option value="">Seleccione un genero</option>
    </select>
  );
}
