function Calculadora(){
    const [values, setValues] = useState({
        value1: "",
        value2: ""
    });
    const [operacion, setOperacion] = useState("+");
    const [respuesta, setRespuesta] = useState("Respuesta");
    
    const onChangeValue = (id, value) => {
        setValues({...values, [id]: value});
    }
    const onChange = ({target}) => {
        setOperacion(target.value);
    }
    const onClick = () =>{
        var v1 = values.value1;
        var v2 = values.value2;
        if(!isNaN(v1) && !isNaN(v2)){
            v1 = Number(v1);
            v2 = Number(v2);
            switch(operacion){
            case "+": 
                setRespuesta(v1+v2);
                break;
            case "-": 
                setRespuesta(v1-v2);
                break;
            case "*": 
                setRespuesta(v1*v2);
                break;
            case "/": 
                setRespuesta(v1/v2);
                break;
            }
        }
        else{
            setRespuesta("Verifique que el dato ingresado sea un valor numerico")
        }
    }

    return (
        <div>
            <input type="number" 
                value={values.value1}
                onChange={({target}) => onChangeValue("value1",target.value)}/>
            <select onChange={onChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" 
                value={values.value2}
                onChange={({target}) => onChangeValue("value2",target.value)}/>
            <button onClick={onClick}>Resolver</button>
            <p> {respuesta} </p>
        </div>
    );
}

export default Calculadora;