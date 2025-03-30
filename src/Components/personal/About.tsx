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
            Soy un desarrollador web con experiencia en .Net(C#), ASP.Net
            framework, aplicaciones Blazor(Razor) y
            aplicaciones MVC, ademas menejo fremeworks como React Y Angular, 
            me adapto a trabajar en equipo y aprendo constantemente.
          </p>
          
          <p>
            Mi objetivo es crecer profesionalmente y desarrollar habilidades en
            el área de tecnología.
          </p>
          <p>
            Me considero una persona autodidacta, empática, creativa y
            adaptable.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
