import React from 'react'
import './AboutMe.scss';
import Main from '../../containers/main/Main'


const AboutMe = () => {

  return (
    <Main mainTitle="Sobre">
      <>
        <div>
          <h2>Profissional</h2>
          <p>
            Possuo mais de 5 anos de experiência profissional em desenvolvimento de software focados em Backend com Java, dentre os setores de e-commerce, turismo, frete, financeiro e de cartões de benefícios.
          </p>
          <p>
            Perfil colaborativo, dedicado, ágil, conciliador e comprometido com as entregas de valor.
          </p>

          <h3>Zup/Itaú</h3>
          <span className='job-tittle'>Desenvolvedor Java Pleno</span>
          <p>
            Atuei na adição de features, ajustes bugs, refinamentos e escrita de demandas, apoio para ambiente de produção, esclarecimento de dúvidas técnicas e/ou de domínio da Esteira de Contratação Agro Itaú. Também mentoria para colegas das squads no entorno da Esteira Agro.
          </p>
          <p>
            Dentre as principais stacks utilizadas estão Java 8, Java 11, Spring Boot, MySQL, AWS, ECS, Docker, EC2, AWS Lambda, SQS, Kafka, SNS, AWS GTW, GitLab, GitHub, jUnit, assertJ, Hibernate, Arquitetura Hexagonal, DDD, TDD, BDD, Microservices, BFFs e Power Designer. Stacks complementares tambem envolvem Python, NodeJs, Kotlin e Angular.
          </p>
          
          <h3>CI&T/Alelo</h3>
          <span className='job-tittle'>Desenvolvedor Java Pleno</span>
          <p>
            Participei das implementações dos novos produtos Alelo POD e Alelo Tudo + no e-commerce da Alelo. Realizei a publicação do Alelo POD em uma das plataformas internas da empresa. Também pude participar de correção de bugs, adição de features e lançamento do novo produto chamado Link Compartilhado que tem como objetivo impulsionar as vendas da Alelo.
          </p>
          <p>
            Lá utilizavamos Java 11, Java 17, Spring Boot, Azure, OpenShift, Kubernetes, fila MQ, SQS, Spring Batch, jUnit, Hibernate, Docker, Oracle, MongoDB e MVC.
          </p>

          <h3>SimFrete</h3>
          <span className='job-tittle'>Desenvolvedor Java Junior</span>
          <p>Implementei e atuei na manutenção de integrações com sistemas de frete com Java 7, Java 8, Postgres e jUnit.</p>

          <h3>Meridian Club</h3>
          <span className='job-tittle'>Desenvolvedor PHP Junior</span>
          <p>Atuei na manutenção de um sistema ERP com PHP utilizando Laravel, MySQL e AWS.</p>

          <h3>Moovin</h3>
          <span className='job-tittle'>Desenvolvedor PHP Junior</span>
          <p>Atuei na manutenção de uma plataforma de e-commerce utilizando PHP, Javascript, jQuery, CSS, MySQL, Docker e AWS.</p>

          <h2>Escolaridade</h2>
          <h3>Ensino Superior</h3>
          <p>Análise e Desenvolvimento de Sistemas - 2019 - UNISINOS</p>
          <h3>Ensino Técnico</h3>
          <p>Técnico em Informática - 2013 - Concordia</p>
        </div>
      </>
    </Main>
  )
}

export default AboutMe
