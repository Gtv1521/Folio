import React from 'react'

function Contact() {
  return (
    <div>
      <strong className="title-contact">
        <i> Me puedes contactar a: </i>
      </strong>

      <ul className="contact">
        <li>
          <strong>Github</strong>
          <a className="enlace-contact" href="https://github.com/Gtv1521">
            {' '}
            Gustavo Bernal
          </a>
        </li>
        <li>
          {' '}
          <strong>WhatsApp:</strong>{' '}
          <a className="enlace-contact" href="tel:+57 31008674441">
            {' '}
            3108674441
          </a>
        </li>
        <li>
          <strong>E-mail:</strong>{' '}
          <a className="enlace-contact" href="mailto:gustavober98@gmail.com">
            gustavober98@gmail.com
          </a>{' '}
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            className="enlace-contact"
            href="https://www.linkedin.com/in/gustavo-bernal-1b58621a3"
          >
            Visitar
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
