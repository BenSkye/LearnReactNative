
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

import TextBox from '@/components/layout/TextBox';

const LoginPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.textHeader}>Welcome to Ben Page</Text>
                <Text style={styles.textNormal}>Login to continue</Text>
                <TextBox />
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    textHeader: {
        fontSize: 30,
        textAlign: 'center',
    },
    textNormal: {
        fontSize: 20,
        textAlign: 'center',
    },
});