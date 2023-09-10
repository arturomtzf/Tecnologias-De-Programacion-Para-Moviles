import React from "react";
import { StyleSheet, Text } from "react-native";
import { View, Image } from "react-native";

function Header() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
                }}
            ></Image>
            <Text>Morning, </Text>
            <Text>John</Text>
            <Image
                style={styles.image}
                source={{
                    uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADy8vKOjo6ZmZm1tbXp6en29vaSkpLj4+PNzc3Dw8PX19ezs7NkZGSfn583NzcTExPb29tTU1NNTU0mJiZpaWkeHh6qqqotLS17e3uGhoZbW1ucnJxERES8vLwRERE6OjoyMjJcesGXAAACyklEQVR4nO3ai3aqMBCFYYOgqHirWu+29f0f8sCxywuFmQnSVUr/7wH2ykCYJECnAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2ixINnHcjaejXv+JlP4gCtOUMBo8k9LpjaZpSrxJgmdS7g3Chbva7obVUoJoMr/FTKKKwxvuZreUZTiolvIgmbic88Y/Jei+51Lm+wo1js/5wRwS/5THkb3mIzMr3/s4LUpxR8+U4aoo5fWpyToqHFlq55PSO5WknLwm2b5sMG9+Rd0LyzLTwdmv3LA8xdknQ7AsTwmrFJcpvWiZrbXE0nnw38ha4FZK2VcrsCsOzc1tLV+6gxnbXeyv5ZRKJY6VobmFJWWgpTjTs7jQUsb+BepDc7EhpqzJ3JwMKUJD8LpQD4QH++pFTSleJh5N1RTD1XZL3wLVOZpR52lgSXFqz1LnaCbyrHCmR6a0DYXYja+0NpGYUj78CpRb/NVBTgnyW7Vic+UmHmyDsS48F182oyXksUXGFHmC2aZ6upv3qtAYqjRp63WSx2ZqCRmfAo2TNN32Sil92yTVNg+Fm/8iPueBozX0LKVYmvyFuJh9OTGV8TmrWKeXcz0hxfoYyg9iz5zi8yDa1oqMtOgbdiKfpMPBizll5lFh4VGzkLQixuYUaf9nWw0zK48KlZ28sULlcHKnW0uFa48K238P2/8cmnvp+2/tpe1fD9u/p2n/vvQPnC1qOh/O9Qj3Q+fDzocptJ4zvrTeZ77ljG+bYL/6PY3pXZv+Bq/B79osqZbPBQ1+X1rTO299RyLtiq6+4523ejRYN+m7hdasSrT+25M4/Zet+H74B74BN+07fuFMfe47fqfwX4wKfSvo5jdwTfkXI1Pb/zR3/bCm/2mOdfxPcxlesgkb9k9UWOM/UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoJH+AYVsI9XeCP5DAAAAAElFTkSuQmCC",
                }}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});

export default Header;
