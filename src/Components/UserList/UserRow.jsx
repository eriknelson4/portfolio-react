import { MdOutlineEdit } from 'react-icons/md';

const UserRow = ({ user, editUserData, schema}) => {
  return (
    <tr key={ `row-${user.id}` }>
      {
        schema.map((field) => {
          return (
            <td key={ `cell-${field.field}` }>{ user[field.field] }</td>
          )
        })
      }
      <td>
        <button onClick={ () => { editUserData(user.id) } }><MdOutlineEdit /></button>
      </td>
    </tr>
  )

}

export default UserRow;