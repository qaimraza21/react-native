import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    list: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
   item : {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
   },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    phone: {
        fontSize: 16,
        color: '#666',
    },
    email: {
        fontSize: 16,
        color: '#666',
    }

});