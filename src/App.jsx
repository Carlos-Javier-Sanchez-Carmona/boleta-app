import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  //realizar una app para calcular promedio de notas de un estudiante, 3 materias con 3 notas cada una, calcular promedio por materia y el promedio general,
  const [calificacion1_1, setCalificacion1_1] = useState(0);
  const [calificacion1_2, setCalificacion1_2] = useState(0);
  const [calificacion1_3, setCalificacion1_3] = useState(0);
  const [calificacion2_1, setCalificacion2_1] = useState(0);
  const [calificacion2_2, setCalificacion2_2] = useState(0);
  const [calificacion2_3, setCalificacion2_3] = useState(0);
  const [calificacion3_1, setCalificacion3_1] = useState(0);
  const [calificacion3_2, setCalificacion3_2] = useState(0);
  const [calificacion3_3, setCalificacion3_3] = useState(0);

  const [promedio1, setPromedio1] = useState(0);
  const [promedio2, setPromedio2] = useState(0);
  const [promedio3, setPromedio3] = useState(0);
  const [promedioGeneral, setPromedioGeneral] = useState(0);

  //funcion para detectar el cambio de valor de cada input
 
  useEffect(() => {
    let suma1 = (Number(calificacion1_1) + Number(calificacion1_2) + Number(calificacion1_3));
    let suma2 = (Number(calificacion2_1) + Number(calificacion2_2) + Number(calificacion2_3));
    let suma3 = (Number(calificacion3_1) + Number(calificacion3_2) + Number(calificacion3_3));
    let promedio1 = (Number(suma1) / 3).toFixed(2);
    let promedio2 = (Number(suma2) / 3).toFixed(2);
    let promedio3 = (Number(suma3) / 3).toFixed(2);
    let promedioGeneral = (Number(promedio1) + Number(promedio2) + Number(promedio3) / 3).toFixed(2);
    setPromedio1(promedio1);
    setPromedio2(promedio2);
    setPromedio3(promedio3);
    setPromedioGeneral(promedioGeneral);

    console.log('calificacion1_1', calificacion1_1);
    console.log('calificacion1_2', calificacion1_2);
    console.log('calificacion1_3', calificacion1_3);
    console.log('suma1', suma1);
    console.log('calificacion2_1', calificacion2_1);
    console.log('calificacion2_2', calificacion2_2);
    console.log('calificacion2_3', calificacion2_3);
    console.log('suma2', suma2);
    console.log('calificacion3_1', calificacion3_1);
    console.log('calificacion3_2', calificacion3_2);
    console.log('calificacion3_3', calificacion3_3);
    console.log('suma3', suma3);
    console.log('promedio1', promedio1);
    console.log('promedio2', promedio2);
    console.log('promedio3', promedio3);
    console.log('promedioGeneral', promedioGeneral);
  });

  const calcularPromedio1 = () => {
    let suma1 = Number(calificacion1_1) + Number(calificacion1_2) + Number(calificacion1_3);
    let promedio1 = suma1 / 3;
    setPromedio1(promedio1);
    console.log(promedio1);  
  };
  const calcularPromedio2 = () => {
    let suma2 = parseFloat(calificacion2_1 + calificacion2_2 + calificacion2_3);
    let promedio2 = suma2 / 3;
    setPromedio2(promedio2);
  };
  const calcularPromedio3 = () => {
    let suma3 = parseFloat(calificacion3_1 + calificacion3_2 + calificacion3_3);
    let promedio3 = suma3 / 3;
    setPromedio3(promedio3);
  };
  const calcularPromedioGeneral = () => {
    let suma = promedio1 + promedio2 + promedio3;
    let promedio4 = suma / 3;
    setPromedioGeneral(promedio4);
  };

return (
  

  <div className='contenedor'>
    <form id="boleta">
      <table>
          <legend className='title'>Boleta de calificaciones</legend>
        <tr>
          <th>Materia</th>
          <th>Calificación 1</th>
          <th>Calificación 2</th>
          <th>Calificación 3</th>
          <th>Promedio</th>
        </tr>
        <tr>
          <th>Materia 1</th>
          <td><input type="number" id="calificacion1_1" min={0} max={10} maxLength={2} value={calificacion1_1} onChange={e => setCalificacion1_1(e.target.value)}/></td>
          <td><input type="number" id="calificacion1_2" min={0} max={10} maxLength={2} value={calificacion1_2} onChange={e => setCalificacion1_2(e.target.value)}/></td>
          <td><input type="number" id="calificacion1_3" min={0} max={10} maxLength={2} value={calificacion1_3} onChange={e => setCalificacion1_3(e.target.value)}/></td>
          {/*<td id="promedio1" value={promedio1} calcularPromedio1={e => setPromedio1(e.target.value)}></td>*/}
          <td id="promedio1" onClick={calcularPromedio1}>{promedio1}</td>

        </tr>
        
        <tr>
          <th>Materia 2</th>
          <td><input type="number" id="calificacion2_1" min={0} max={10} maxLength={2} value={calificacion2_1} onChange={e => setCalificacion2_1(e.target.value)}/></td>
          <td><input type="number" id="calificacion2_2" min={0} max={10} maxLength={2} value={calificacion2_2} onChange={e => setCalificacion2_2(e.target.value)}/></td>
          <td><input type="number" id="calificacion2_3" min={0} max={10} maxLength={2} value={calificacion2_3} onChange={e => setCalificacion2_3(e.target.value)}/></td>
          <td id="promedio2" onClick={calcularPromedio2}>{promedio2}</td>
        </tr>

        <tr>
          <th>Materia 3</th>
          <td><input type="number" id="calificacion3_1" min={0} max={10} maxLength={2} value={calificacion3_1} onChange={e => setCalificacion3_1(e.target.value)}/></td>
          <td><input type="number" id="calificacion3_2" min={0} max={10} maxLength={2} value={calificacion3_2} onChange={e => setCalificacion3_2(e.target.value)}/></td>
          <td><input type="number" id="calificacion3_3" min={0} max={10} maxLength={2} value={calificacion3_3} onChange={e => setCalificacion3_3(e.target.value)}/></td>
          <td id="promedio3" onClick={calcularPromedio3}>{promedio3}</td>
        </tr>
        
        <tr>
          <th>Promedio general</th>
          <td id="promedioGral" onClick={calcularPromedioGeneral}>{promedioGeneral}</td>
      </tr>
      </table>
  </form>
  </div>
)

}

export default App
