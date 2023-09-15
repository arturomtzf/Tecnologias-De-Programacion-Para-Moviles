import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import StoryComponent from "../StoryComponent/StoryComponent";

const STORIES = [
    {
        id: 1,
        image: "https://picsum.photos/200/300",
        name: "Amin",
    },
    {
        id: 2,
        image: "https://picsum.photos/300/400",
        name: "Ali",
    },
    {
        id: 3,
        image: "https://picsum.photos/400/500",
        name: "Reza",
    },
    {
        id: 4,
        image: "https://picsum.photos/500/600",
        name: "Mohammad",
    },
    {
        id: 5,
        image: "https://picsum.photos/600/700",
        name: "Sara",
    },
    {
        id: 6,
        image: "https://picsum.photos/700/800",
        name: "Narges",
    },
    {
        id: 7,
        image: "https://picsum.photos/800/900",
        name: "Mina",
    },
];

export default function StoryFriends() {
    return (
        <View>
            <Text style={styles.title}>Stories</Text>
            <View style={styles.stories}>
                <StoryComponent addStory={true}/>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {STORIES.map((story) => {
                        return <StoryComponent key={story.id} name={story.name} image={story.image} />;
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    stories: {
        flexDirection: "row",
        alignItems: "center",
    }
});
