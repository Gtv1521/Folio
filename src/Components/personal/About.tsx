import React from 'react'
import TitleName from '../utils/TitleName'

function About() {
  return (
    <>
      <div className="container-info">
        <div className="">
          <TitleName />
        </div>
        <div className="box-start">
          <h3>
            <strong>Sobre mi</strong>
          </h3>
          <p>
            Soy un desarrollador web y diseñador responsivo, con experiencia
            .Net(C#), ASP.Net framework, aplicaciones Blazor(Razor) y
            aplicaciones MVC. Me gusta trabajar en equipo y aprender
            constantemente.
          </p>
          <p>
            Mi objetivo es crecer profesionalmente y desarrollar habilidades en
            el área de tecnología.
          </p>
          <p>
            Me considero una persona autodidacta, empática, creativa y
            adaptable. Agradezco a mis amigos, familiares y superiores por mi
            apoyo durante mi camino.
          </p>
          <p>
            Actualmente trabajo en una startup enfocada en la creación de
            productos digitales para empresas .
          </p>
        </div>
      </div>
    </>
  )
}

export default About
