import React from "react";
import { AppBar, IconButton, Avatar } from "@react-native-material/core";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

type HeaderTitle = {
    title: string
}

export function Header( {title} : HeaderTitle) {
    return (
        <View>
            <AppBar
                style={styles.header}
                title={title}
                tintColor="#000"
                centerTitle={true}
                leading={props => (
                    <IconButton icon={props => <Icon name="menu" {...props} size={30} />} {...props}  />
                )}
                trailing={props => (
                    <Avatar icon={props => <Icon name="account"  {...props} size={25}  />} size={35} autoColor />
                )}
            />

        </View>
    )
};
