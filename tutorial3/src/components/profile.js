import { Card } from 'antd';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
const Profile = () => {
  const location = useLocation();

  const [values,setValues] = useState();

  useEffect(() => {
    setValues(location.state)
  })

  return(
    <div className='profilePage'>
       <Card
        title="Profile Details">
        <p>First Name : {values?.firstName}</p>
        <p>Last Name : {values?.lastName}</p>
        <p>Email :{values?.email}</p>
    </Card>
    </div>
  )
}

export default Profile