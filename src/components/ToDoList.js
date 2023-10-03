import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  margin: 20px auto;
  padding: 0px;

  & > li {
    width: 35%;
    margin: auto;
    margin-bottom: 20px;
    background-color: rgb(128, 0, 81);
    padding: 10px;
    padding-left: 30px;
    color: white;
  }
`;

export default function ToDoList(props) {
  return (
    <List>
      {props.itemsList.map((item) => (
        <li key={item.index}>
          {item.text}
        </li>
      ))}
    </List>
  );
}
