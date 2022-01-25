import React, {useState} from 'react'
var random=[]
function Main()
{
    const [input, setInput] = useState("");

    function generate()
    {
        random=[]
        if(input === "")
        {
            document.getElementsByClassName("box")[0].style.display="none"
        }
        else
        {
            document.getElementsByClassName("box")[0].style.display="flex"
        }

        document.getElementById("result").innerHTML=""
        const number=document.getElementById("id")
        number.innerHTML=""

        for(let i=0; i<parseInt(input);i++)
        {
            random.push(Math.floor(Math.random() * (100 - 1) + 1))
            var p=document.createElement("p")
            p.innerHTML=random.slice(-1)
            number.appendChild(p);
        }
        setInput("")
    }

    function odd()
    {
        console.log(random)
        const oddnumber=document.getElementById("result")
        oddnumber.innerHTML=""
        for(let i=0; i<random.length;i++)
        {
            var num=parseInt(random[i])
            if(num%2 !==0)
            {
                var p=document.createElement("p")
                p.innerHTML=num
                oddnumber.appendChild(p);
            }
        }
    }

    function even()
    {
        console.log(random)
        const evennumber=document.getElementById("result")
        evennumber.innerHTML=""
        for(let i=0; i<random.length;i++)
        {
            var num=parseInt(random[i])
            if(num%2 === 0)
            {
                var p=document.createElement("p")
                p.innerHTML=num
                evennumber.appendChild(p);
            }
        }
    }
    
    return (
        <div className="Number">
            <h1>Number Filter</h1>
            <div>
                <input type="text" placeholder="Enter the number of inputs" value={input} onChange={(e)=>setInput(e.target.value)} /> <br></br>
                <button onClick={generate}>Generate Random Numbers</button>
                <div className="id" id="id">
                </div>
                <div className="box">
                    <button onClick={odd} className="odd" >ODD</button>
                    <button onClick={even} className="even" >EVEN</button>
                </div>
                <br/>
                <div id="result" className='out'>
                </div>
                <br/>
            </div>
        </div>
      );
}

export default Main