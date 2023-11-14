import React, {useState} from "react";
import { StyleSheet, Text, View, Modal} from "react-native";
import { ButtonP } from "./ButtonP";
import { THEME } from "../theme/colors";
import { TodoModal } from "./TodoModal";


export const Todo = ({id, nombre, handleDelete, isComplete, handleComplete, handleUpdate, updated, isUpdating , created}) =>{

    const updateText = (updated) =>{
        if(updated !== ''){
            return(
                <Text style={[styles.subText, isComplete&&styles.completedFormat]}>Last Update: {updated}</Text>
            )
        }
    }

  const [modalVisible, setModalVisible] = useState(false)

  const muestraModal = () =>{
    setModalVisible(true)
  }


    return(
        <View style={[styles.container, isComplete&&styles.completedContainer]}>
            <View>
                <Text style={[styles.tittle, isComplete&&styles.completedFormat]}>{nombre}</Text>
                <Text style={[styles.subText, isComplete&&styles.completedFormat]}>Created: {created}</Text>
                {updateText(updated)}
            </View>
            <View style={styles.buttonContainer}>
                <ButtonP  light  iconName={'trash-2'} color={THEME.COLORS.RED.WARNING} onPress={() => handleDelete(id)}/>
                <ButtonP  light  iconName={isUpdating?'slash':'edit'}  onPress={() => handleUpdate(id)} color={isUpdating&&THEME.COLORS.ORANGE.WARNING} />
                <ButtonP light iconName={ isComplete?'rewind':'check-circle'} onPress={() => handleComplete(id)} color={isComplete?THEME.COLORS.ORANGE.WARNING : THEME.COLORS.BLUE.COMPLETE}/>
                <ButtonP light  iconName={'eye'} onPress={() => muestraModal()}/>
            </View>
            
            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.Modal}>
                    <TodoModal id={id} nombre={nombre} creado={created} updated={updated} isCompleted={isComplete}/>    
                    <ButtonP light  iconName={'eye-off'} onPress={() => setModalVisible(!modalVisible)} color={THEME.COLORS.BLUE.BACKGROUND}/>                
                </View> 
            </Modal>
            
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        borderRadius: 20,
        marginTop: 30,
        width: 400,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        backgroundColor: THEME.COLORS.BLUE.CARDS,
    },
    completedContainer:{
        backgroundColor: THEME.COLORS.GREEN.APPROVED,
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 8,
    }, 
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subText:{
        fontSize: 8,
        color: '#e0e0e0',
    },
    completedFormat:{
        textDecorationLine: 'line-through',
        color: '#c0c0c0'
    },
    Modal:{
        backgroundColor: 'white',
        width: 250,
        justifyContent:'center',
        alignItems: 'center',
        paddingBottom: 10,
        borderRadius: 20,
        gap: 10,
        marginTop: 250,
        marginLeft: '20%',
    },
})