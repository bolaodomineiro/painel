import React, { useState, useRef, useEffect } from "react";
import { Container_select } from "./SelectStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";



 {/* Controles para selecionar o intervalo de tempo
            <div className='btns'>
            <button onClick={() => setTimeRange('7days')}>Últimos 7 dias</button>
            <button onClick={() => setTimeRange('15days')}>Últimos 15 dias</button>
            <button onClick={() => setTimeRange('currentMonth')}>Mês atual</button>
            <button onClick={() => setTimeRange('yearToDate')}>Ano atual</button>
            <button onClick={() => setTimeRange('currentYear')}>Ano atual</button>
            <button onClick={() => setTimeRange('allTime')}>Todos os anos</button>
            </div> */}

            {/* Componente de gráfico */}

const Select = ({data, setValue}) => {
    const [select_heigth, setselect_heigth] = useState("0px")
    const [option, setOption] = useState(data[0])
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setselect_heigth("0px");
            }
        };

        document.addEventListener("click", handleClickOutside);

        // Limpa o event listener quando o componente é desmontado
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    
    return (
        <Container_select
            ref={selectRef}
            onClick={(e) => {
                e.stopPropagation();
                setselect_heigth(select_heigth === "0px" ? (data.length * 35) + "px" : "0px");
            }}
        >        
            <div className="select_header">
                <h3>{option}</h3>
                <FontAwesomeIcon icon={faChevronDown} 
                    style={{transform: select_heigth === "0px" ? "" : "rotate(180deg)" }}
                    className="icone_select"
                />
            </div>
            <ul     
                className="select_list"
                style={{height: select_heigth}}>
                {data.map((e, id) => {
                    return (
                        <li 
                            key={id}
                            onClick={(e) => {
                                setOption(e.target.innerHTML);
                                setValue(e.target.innerHTML);
                                setselect_heigth("0px");
                            }}
                        >{e}</li>
                    );
                    
                })}
            </ul>
        </Container_select>
    )
}

export default Select;