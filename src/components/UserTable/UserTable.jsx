import React from "react";
function UserTable({ users, handleButton}) {
    return <div><table>
    <thead>
        <tr>
            <th>Name:</th>
            <th>Email:</th>
            <th>Birthday:</th>
            <th>Course:</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user) => {
            return <tr>
                <td>{user.name }</td>
                <td>{ user.email}</td>
                <td>{user.brthDay }</td>
                <td>{user.course }</td>
            </tr>
        })}
    </tbody>
</table>
    <button onClick={handleButton}>Go to Form</button>
</div>
}












export default UserTable