import React, { useState } from 'react';
import './NewTodoForm.css';
import DwgPad from "DwgPad";

const DwgPadWrapper = () => {
    const ref = useRef(null);
    const [valorDesdePadre, setValorDesdePadre] = useState(generateDataset());
    const [valorDesdeD3js, setValorDesdeD3js] = useState(null);

    const actualizaHijo = (newDatos) => {
      ref.current.actualizaDatos(newDatos);
    };

    const enviaDatosAlPadre = (newDato) => {
      setValorDesdePadre(newDato);
    };

    useEffect(() => {
      const inicia = () => {
        const newDataset = generateDataset();
        setValorParaHijo(newDataset);
        actualizaHijo(newDataset);
        console.log("Valores D3js iniciados!");
      };
      if (valorparahijo.length === 0) {
        inicia();
      } else {
        actualizaHijo(valorparahijo);
      }
    }, [valorparahijo]);

    useEffect(() => {
      console.log("valorDesdeD3js: ", valorDesdeD3js);
    }, [valorDesdeD3js]);

    return (
      <div>
        <DwgPad data={{ valorDesdePadre, enviaDatosAlPadre }} ref={ref} ></DwgPad>
      </div>
    );
};

export default DwgPadWrapper;