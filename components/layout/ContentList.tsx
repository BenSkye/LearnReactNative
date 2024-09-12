import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import { menuItemsToDisplay } from '@/app/service/data';
import { menuItemsToDisplay2 } from '@/app/service/dataList';
import TextBox from './TextBox';

type ItemProps = { id: string, name: string, price: string };
type ITemProps2 = { title: string, data: { name: string, price: number }[] };

const Item = ({ id, name, price }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{id}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{price}</Text>
    </View>
);

const Item2 = ({ title, data }: ITemProps2) => (
    <View style={styles.item}>
        <Text style={styles.header}>{title}</Text>
        {data.map((item: { name: string, price: number }, index: number) => (
            <Text key={index} style={styles.subTitle}>{item.name} - {item.price}</Text>
        ))}
    </View>
);

// const ListContent: React.FC = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={menuItemsToDisplay}
//                 renderItem={({ item }) => <Item id={item.id} name={item.name} price={item.price} />}
//                 keyExtractor={item => item.id}
//             />
//         </SafeAreaView>
//     );
// };

const ListContent2: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TextBox />
            <FlatList
                data={menuItemsToDisplay2}
                renderItem={({ item }) => <Item2 title={item.title} data={item.data} />}
                keyExtractor={item => item.title}
            />
        </SafeAreaView>
    );
};



export default ListContent2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'orange',
        padding: 8,
        marginVertical: 1,
        marginHorizontal: 0,
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 15,
    },
    header: {
        backgroundColor: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
});