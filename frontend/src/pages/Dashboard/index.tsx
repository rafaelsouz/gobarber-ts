import React from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://cdn.discordapp.com/avatars/114926824047247368/172fe8424c6c2ebd29a28db5437a6cae.png?size=512"
                alt="Rafael"
              />

              <strong>Rafael Souza</strong>
              <span>
                <FiClock />
                8:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
