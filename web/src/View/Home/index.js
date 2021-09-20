import React, {useState} from 'react';
import * as Styled from './styles';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import Image from '../../Images/filter3.png';

function Home() {

  const [filterActived, functionFilter] = useState();

  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <button type="button" onClick={() => functionFilter('todos')}>
          <Filter title="Todos" img={Image} actived={filterActived == 'todos'}/>
          </button>
          <button type="button" onClick={() => functionFilter('hoje')}>
          <Filter title="Hoje" img={Image} actived={filterActived == 'hoje'}/>
          </button>
          <button type="button" onClick={() => functionFilter('semana')}>
          <Filter title="Semana" img={Image} actived={filterActived == 'semana'}/>
          </button>
          <button type="button" onClick={() => functionFilter('mes')}>
          <Filter title="Mês" img={Image} actived={filterActived == 'mes'}/>
          </button>
        </Styled.ContainerFilter>
      <Footer />
    </Styled.Container>
  )
}

export default Home;
