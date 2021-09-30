import React, {useState} from 'react';
import * as Styled from './styles';

/* IMAGES */
import Image from '../../Images/filter3.png';
import Futebol from '../../Images/futebol.png';
import Viagem from '../../Images/viagem.png';
import Cinema from '../../Images/cinema.png';
import Lanche from '../../Images/lanche.png';
import Prova from '../../Images/prova.png';
import Academia from '../../Images/academia.png';
import Compra from '../../Images/compra.png';
import Trabalho from '../../Images/trabalho.png';


/* COMPONENTS */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';

function Home() {

  const [filterActived, functionFilter] = useState();

  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <button type="button" onClick={() => functionFilter('todos')}>
          <Filter title="Todos" img={Image} actived={filterActived === 'todos'}/>
          </button>
          <button type="button" onClick={() => functionFilter('hoje')}>
          <Filter title="Hoje" img={Image} actived={filterActived === 'hoje'}/>
          </button>
          <button type="button" onClick={() => functionFilter('semana')}>
          <Filter title="Semana" img={Image} actived={filterActived === 'semana'}/>
          </button>
          <button type="button" onClick={() => functionFilter('mes')}>
          <Filter title="Mês" img={Image} actived={filterActived === 'mes'}/>
          </button>
        </Styled.ContainerFilter>
        <Styled.ContainerCard>
          <TaskCard img={Futebol} title="Futebol"/>
          <TaskCard img={Viagem} title="Viagem"/>
          <TaskCard img={Cinema} title="Cinema"/>
          <TaskCard img={Lanche} title="Lanche"/>
          <TaskCard img={Prova} title="Prova"/>
          <TaskCard img={Academia} title="Academia"/>
          <TaskCard img={Compra} title="Compra"/>
          <TaskCard img={Trabalho} title="Trabalho"/>
        </Styled.ContainerCard>
      <Footer />
    </Styled.Container>
  )
}

export default Home;
