import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api'

/* Filter Icon */
import Image from '../../Images/filter3.png';

/* COMPONENTS */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';

function Home() {

  //variável e função responsável por atualizar o valor do filtro
  const [filterActived, functionFilter] = useState('all');

  // a setTasks vai ser a função responsável por armazenar na variável tasks as tarefas retornadas do banco de dados
  const [tasks, setTasks] = useState([]);

  //função responsável por fazer as requisições para o backend
  async function loadTasks(){
    await api.get(`/task//filter/${filterActived}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
    })
  };

  useEffect(() => {
    loadTasks();
  }, [filterActived]);

  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <button type="button" onClick={() => functionFilter('all')}>
          <Filter title="Todos" img={Image} actived={filterActived === 'all'}/>
          </button>
          <button type="button" onClick={() => functionFilter('today')}>
          <Filter title="Hoje" img={Image} actived={filterActived === 'today'}/>
          </button>
          <button type="button" onClick={() => functionFilter('week')}>
          <Filter title="Semana" img={Image} actived={filterActived === 'week'}/>
          </button>
          <button type="button" onClick={() => functionFilter('month')}>
          <Filter title="Mês" img={Image} actived={filterActived === 'month'}/>
          </button>
          <button type="button" onClick={() => functionFilter('year')}>
          <Filter title="Ano" img={Image} actived={filterActived === 'year'}/>
          </button>
        </Styled.ContainerFilter>
        <Styled.ContainerCard>
        {
             tasks.map(
               t => ( 
               <TaskCard type={t.type} title={t.title} when={t.when}/>
               ))
           }
        </Styled.ContainerCard>
      <Footer />
    </Styled.Container>
  )
};

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;
