import PropTypes from "prop-types"

const List = ({ dataList, onRemoveList }) => (
  <ul>
    {dataList.map((item, i) => (
      <li key={i}>
        <span>{item}</span>
        <button onClick={onRemoveList(i)}>删除</button>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  dataList: PropTypes.array,
  onRemoveList: PropTypes.func
}

export default List;
