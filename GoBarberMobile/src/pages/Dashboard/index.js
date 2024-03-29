import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const isFocused = useIsFocused();

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    try {
      const response = await api.delete(`appointments/${id}`);

      setAppointments(
        appointments.map((appointment) =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: response.data.canceled_at,
              }
            : appointment
        )
      );
    } catch (err) {
      await Alert.alert(
        'Falha no cancelamento',
        'O agendamento não pôde ser cancelado, verifique se está no periodo cancelavel'
      );
    }
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
