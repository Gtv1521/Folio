import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/datos.json';
import Card from '../Components/proyectos/Card';

function Blog() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : 0;
  const [categoria, setCategoria] = useState(1);

  // hace paso del id para una de las categorias
  useEffect(() => {
    if (productId <= 5) {
      setCategoria(1);
    } else if (productId === 6) {
      setCategoria(2);
    } else if (productId >= 7) {
      setCategoria(3);
    }
  }, [productId])

  // Se corre un switch para que pueda diferenciar en donde esta el id que se busca
  function Busca(): any {
    switch (categoria) {
      case 1:
        return data.backend.find((proj: any) => proj.id === productId);
      case 2:
        return data.frontend.find((proj: any) => proj.id === productId);
      case 3:
        return data.Monoliticas.find((proj: any) => proj.id === productId);
      default:
        return null;
    }
  }

  const informacion = Busca(); // se le pasa la consulta a una variable para que pueda ser usada en el DOM

  return (
    <div>
      {informacion ? (
        <div>
          <Card
            id={informacion.id}
            url={informacion.url}
            title={informacion.title}
            image={informacion.image}
            description={informacion.description}
            descriptionUno={informacion.descriptionUno}
            descriptionDos={informacion.descriptionDos}
            descriptionTres={informacion.descriptionTres}
          />
        </div> // Aquí asumo que 'informacion' es un solo objeto
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  )
}

export default Blog