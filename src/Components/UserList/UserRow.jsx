import { MdOutlineEdit } from 'react-icons/md';

const UserRow = ({ user, editUserData, schema}) => {
  return (
    <tr key={ `row-${user.id}` }>
      {
        schema.map((field) => {

          // Transforms

          let data = user[field.field];

          if (field.field === 'date_created' || field.field === 'last_logged_in') {
            if (typeof data === 'string') { data = Number(data); }
            data = new Date(data).toLocaleTimeString('en-us', {day:'numeric', month:'short', year:'numeric', hour:'numeric', minute:'numeric'})
          }

          // Create Element

          return (
            <td className={ `${field.field}` } key={ `cell-${field.field}` }>{ data }</td>
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