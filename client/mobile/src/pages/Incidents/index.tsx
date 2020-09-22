import React, {useEffect, useState} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import {Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

interface IncidentsProps {
  id: number;
  title: string;
  description: string;
  value: number;
  ong_id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

const Incidents = () => {

  const navigation = useNavigation();

  const [incidents, setIncidents] = useState<IncidentsProps[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident: IncidentsProps){
    navigation.navigate('Detail', { incident });
  }

  async function loadIcidents() {
    if(loading){
      return;
    }

    if (total > 0 && incidents.length === total ) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIcidents();
  }, [])

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
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIcidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incidentList}>
            <View style={styles.incident}>
              <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>
              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>{
                Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL'
                }).format(incident.value)}
              </Text>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(incident)}
              >
                <Text style={styles.detailsButtonText}>
                  Ver mais detalhes
                </Text>
                < Feather name="arrow-right" size={16} color="#E01041" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Incidents;