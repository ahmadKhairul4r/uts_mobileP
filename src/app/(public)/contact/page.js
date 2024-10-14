"use client"
import { useState, useEffect } from 'react';
import Card from '../../../components/card';

export default function Contact() {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({
        name:'',
        email:'',
        subject:'',
        messagee:'',
    },
);
async function onLoadData() {
    setLoading(true)
    let res = await fetch('/api/contact')
    let data = await res.json()
    setData(data)
    setLoading(false)
}
useEffect(() => {
            onLoadData()
        }, [])

const ItemCard = ({label, value})=>{
    return (
        <div className='flex gap-4 bg-white  rounded-md m-2 p-2'>
                <div>{ label }</div>
                <div>{ value }</div>
            </div>
        )
        
    }
    
    
    
    const inputHandler= (e) =>{
        setData({...data, [e.target.name]: e.target.value })
    }
    
    async function onSubmitData() {
        try{
            let res = await fetch('/api/messages', {
                method:'POST',
                body: JSON.stringify(data),
            })
            let resData = await res.json()
            if(!resData.data){
                throw Error(resData.message)
            }
            alert("Data berhasil disimpan dengan id \n"+ resData.data.insertedId)
        }catch(err){
            console.error("ERR", err.message)
            alert(err.message)
        }
    }
    

  return (<>
    <h2 className="text-center text-3xl w-full">Get In Touch</h2>
            
            <p className="mb-8 text-center margin-0 mx-auto w-2/3">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
            ipsum lorem ipsum lorem ipsum 
        </p>

        <div className="flex mt-16">
      <Card name="Work Form" className="pb-5">
      <h3 className="text-2xl py-2">Leave a message</h3>
         <div className="flex gap-6">
             <div className="w-full my-2">
                <label>Nama</label> 
                <input 
                  type="text" 
                  name='name'
                  value={data.name}
                  onChange={inputHandler}
                  className="w-full border my-input-text"/>
               </div>

            <div className="w-full my-2">
                <label>Email</label>
                <input  
                  name='email' 
                  onChange={inputHandler}
                  className="w-full border my-input-text">
                </input>
            </div>
           </div>

        <div className="w-full my-2">
            <label>Subject</label>
            <input 
              name='subject' 
              type="text" 
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Message</label>
            <input 
              name='messagee'
              onChange={inputHandler}
              className="w-full border my-input-text">
            </input>
        </div>

        <button 
          onClick={onSubmitData}
          className="mt-4 mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
            <label>Submit Data</label>
        </button>
      </Card>
      <div className="md:w-1/3">
      {
                    !isLoading && Object.keys(data.location).map(key => {
                       return <ItemCard label={key} value={data.location[key]} key={key}/>
                    })
                }

                {
                    !isLoading && Object.keys(data.phone).map(key => {
                       return <ItemCard label={key} value={data.phone[key]} key={key}/>
                    })
                }

                {
                    !isLoading && Object.keys(data.social).map(key => {
                       return <ItemCard label={key} value={data.social[key]} key={key}/>
                    })
                }
      </div>
      </div>
    </>
  );
}
  
