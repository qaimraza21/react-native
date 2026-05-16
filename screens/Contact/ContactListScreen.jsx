import { FlatList, Text } from 'react-native'
import ContactItem from '../../src/components/ContactItem'
import { users } from './userContactInfo'
import { styles } from './Style'
const ContactListScreen = () => {
    const renderItem = ({item}) => {
        return (
            <ContactItem 
                name={item.name}
                phone={item.phone}
                email={item.email}
            />
        )
    }
  return (
      <FlatList 
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.heading}>Contact List</Text>}
        contentContainerStyle={styles.list}
      />   
    )
}

export default ContactListScreen