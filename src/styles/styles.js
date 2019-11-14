import { StyleSheet } from 'react-native';
import { BACKGROUND, H1, COLOR_PRIMARY } from './const'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: BACKGROUND,
        padding: 11
    },
    containerFull: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: BACKGROUND,
        padding: 11
    },
    h1: {
        fontSize: H1,
        color: COLOR_PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});