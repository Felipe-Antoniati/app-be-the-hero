import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation} from "@react-navigation/native";
import * as MailCompose from "expo-mail-composer";

import { Feather } from "@expo/vector-icons";
import logoImg from "../images/logo.png";

import styles from "../styles/s_details";


// É preciso fazer a conexão com a API para finalizar este Projeto! 


const Detail = () => {

  const navigation = useNavigation();

  const message = `Olá, $OngName ! Gostaria de ajudar no caso $IncidentTitle com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(120)}`;
  function sendMail() {
    MailCompose.composeAsync({
      subject: `Herói do caso: $IcidentTitle`,
      recipients: ["IcidentEmail"],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=$IcidentWhatsapp&text=${message}`
    );
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>
          IncidentName de IcidentCity / IncidentUF
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>IncidentTitle</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {" "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(120)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse Caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;
