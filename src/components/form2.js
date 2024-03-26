const UserInput2 = () => {

    const [data, setDate] = useState({
        firstname: '',
        lastname: '',
        course: '',
    })
    const handleInput=(e)=>{
        const {name, value} = e.target;
        setData((prev)=>{
            return {...prev, [name]: value}
        })
    }
    const handleSubmit=(e)=>{
        //cost handle submit
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>firstname</label><br/>
                <input type="text" name= "firstname"
                 onChange={handleInput}
                 onChnge={handleInput}
                 placeholder="enter your firstname"/><br/>

                <lable>Lastname</lable><br/>
                <input type="text" name="lastborn"></input>                   
                onChange={handle}                                       
                                                                        

        </div>
    )
}