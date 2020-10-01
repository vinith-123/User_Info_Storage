import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const Userlist = ({users})=>{
    if(users.length === 0)
        return (<div></div>);
    return (
         <div>
             <TableContainer>
             <Table>
                 <TableHead>
                     <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Favorite Sport</TableCell>
                    </TableRow>
                 </TableHead>
                 <TableBody>
                     {users.map((user)=>(
                            <TableRow>
                                <TableCell>{user.Name}</TableCell>
                                <TableCell>{user.Age}</TableCell>
                                <TableCell>{user.Sport}</TableCell>
                            </TableRow>
                         )
                     )}
                 </TableBody>
             </Table>
             </TableContainer>
        </div>
    );
}
export default Userlist;