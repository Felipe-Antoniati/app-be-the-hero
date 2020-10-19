import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import logoImg from "../images/logo.png";

import styles from "../styles/s_incidents";

// É preciso fazer a conexão com a API para finalizar este Projeto! 

const Incidents = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 Casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo !</Text>
      <Text style={styles.description}>
        Escolha um dos Casos abaixo e Salve o Dia:
      </Text>

      <FlatList
        data={[1,2,3,4]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>Ong amor em Test</Text>
          
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cesta Básica</Text>
          
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(120)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => {}}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E01041" />
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
};

export default Incidents;
