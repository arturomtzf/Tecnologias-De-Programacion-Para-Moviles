import React from "react"
import { View, Text, StyleSheet} from "react-native"
import { THEME } from "../theme/colors"

export const TodoModal = ({id, nombre, creado, updated, isCompleted}) =>{
    const actualizado = (updated) =>{
        if(updated !== '') return(
        <View style={styles.parrafos}>
            <Text style={styles.lableText}>Last update</Text>
            <Text>{updated}</Text>
        </View>
        )
    }

    return(
        <View style={{marginBottom: 5}}>
            <View style={styles.header}>
                <Text style={styles.tittleText}>{nombre}</Text>
            </View>
            <View>
                <View style={[styles.parrafos, {marginBottom: 10, marginTop: 2}]}>
                    <Text style={[styles.lableText, styles.idText]}>ID</Text>
                    <Text style={styles.idText}>{id}</Text>
                </View>
                <View style={styles.parrafos}>
                    <Text style={styles.lableText}>Created at</Text>
                    <Text>{creado}</Text>
                </View>
                {actualizado(updated)}
                <View style={styles.parrafos}>
                    <Text style={styles.lableText}>Status</Text>
                    <Text style={[styles.lableText, isCompleted&&{color:THEME.COLORS.GREEN.APPROVED}]}>{isCompleted? 'Completed': 'Pending'}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: THEME.COLORS.BLUE.LABELS,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 250,
        paddingVertical: 5,
    },
    parrafos:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    tittleText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    lableText:{
        fontWeight: 'bold',
        color: THEME.COLORS.BLUE.BACKGROUND
    },
    idText:{
        fontSize: 12,
    },
})