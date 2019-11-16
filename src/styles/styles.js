import { StyleSheet } from 'react-native';
import { BACKGROUND, H1, H2, COLOR_PRIMARY } from './const'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: BACKGROUND,
        padding: 11,
        minHeight: '100vh',
    },
    containerFull: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: BACKGROUND,
        padding: 11,
        minHeight: '100vh',
    },
    h1: {
        fontSize: H1,
        color: COLOR_PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    h2: {
        fontSize: H2,
        color: COLOR_PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});