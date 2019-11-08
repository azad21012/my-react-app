import jwtDecode from 'jwt-decode';

export default function(token){
    const decoded = jwtDecode(token); 
    return decoded;
}