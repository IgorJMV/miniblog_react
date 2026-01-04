//CSS Modules
import styles from './About.module.css';

import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span> </h2>
      <p>Este projeto consiste em um blog simples desenvolvido com React no front-end e Firebase no back-end.
      </p>
      <p>O Mini Blog foi desenvolvido com o objetivo de colocar em prática os conhecimentos adquiridos ao longo do curso de React do instrutor Matheus Battisti.
      Com ele, é possível criar uma conta, fazer login, criar posts, editar e excluir posts, além de visualizar os posts criados por outros usuários.
      Este projeto é uma ótima maneira de aprender sobre autenticação de usuários, manipulação de dados em tempo real e integração com serviços de back-end utilizando o Firebase.</p>
      <Link to='/posts/create' className='btn'>Criar post</Link>
    </div>
  )
}

export default About
