/* In this component, data from the User Random API is fetch and passed to InfoCard component */

import { View } from 'react-native';
import { useState, useEffect } from 'react';

import InfoCard from './InfoCard';

const FetchApi = ({mode}) => {
    
  const [users, setUsers ] = useState([]);
  useEffect (() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        userData = (await response.json()).results;
      } catch(error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData);

    })();
  }, []); 

    return(
        <View>
            {users.map((user) => (
                <View>
                  <InfoCard userData={user} key={user.id} mode={mode} />
                </View>
              ))  
            }
        </View>
    )
};

export default FetchApi;