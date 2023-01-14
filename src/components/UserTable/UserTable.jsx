import React from "react";
function UserTable({ users, handleButton}) {
    return <div><table>
    <thead>
        <tr>
            <th>Name:</th>
            <th>task:</th>
            <th>description:</th>
            <th>department:</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user) => {
            return <tr>
                <td>{user.name }</td>
                <td>{ user.task}</td>
                <td>{user.description }</td>
                <td>{user.department }</td>
            </tr>
        })}
    </tbody>
</table>
    <button onClick={handleButton}>Go to Form</button>
</div>
}












export default UserTable