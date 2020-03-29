import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>


            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={i => String(i)}
                style={styles.incidentList}
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>
                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>
                        <TouchableOpacity style={styles.detailsButton} onPress={() => { navigateToDetail() }}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" color="#e02041" size={16} />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}