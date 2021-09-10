import React, { useState } from 'react';
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'Adipisicing',
        description: 'Lorem ipsum dolor sit adipisicing.',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'Consectetur',
        description: 'Lorem ipsum dolor sit adipisicing.',
        image: require('../assets/mosh.jpg'),
    },
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = (message) => {
        // Delete the message from messages
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <Screen>
            <FlatList data={messages}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'Adipisicing',
                            description: 'Lorem ipsum dolor sit adipisicing.',
                            image: require('../assets/mosh.jpg'),
                        },
                        {
                            id: 2,
                            title: 'Consectetur',
                            description: 'Lorem ipsum dolor sit adipisicing.',
                            image: require('../assets/mosh.jpg'),
                        },
                        {
                            id: 3,
                            title: 'Lorem ipsum',
                            description: 'Lorem ipsum dolor sit adipisicing.',
                            image: require('../assets/mosh.jpg'),
                        },
                    ])
                }}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected")}
                    renderRightActions={() =>
                        <ListItemDeleteAction
                            onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

export default MessagesScreen;
