import React, {useState} from 'react'

const UsestateArray = () => {
    //usestae se array use karte hey
    // let UserData =[
    //     {
    //         id:0,
    //         name:"Ankan",
    //         age:20,
    //     },
    //     {
    //         id:1,
    //         name:"Rohan",
    //         age:21,
    //     }
    // ]
    const [UserData,setUserData] = useState(
        [
            {
                id:0,
                name:"Ankan",
                age:20,
            },
            {
                id:1,
                name:"Rohan",
                age:21,
            }
        ]
    )
    console.log(UserData)
    const clear =()=>{
        const updateData =[...UserData]
        updateData[0].name="Binod"
        setUserData(updateData)
        console.log(UserData)
    }
  return (
    <>
    <div id='cl-2'>
      {/* <h1 className='h1style'>Name: Ankan & Age: 20</h1> */}
        {
            UserData.map((curElem)=>{
                return (<h1 className='h1style' key={curElem.id}>Name: {curElem.name} & Age: {curElem.age}</h1>)
            })
        }
        <button onClick={clear}>Clear</button>
        </div>
    </>
  )
}

export default UsestateArray
