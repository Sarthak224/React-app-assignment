import './AppBody.css'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
function AppBody(){
   // var d=[{coverImageUrl:'',summary:'Loading.....'}]
    const [head,setHead]=useState(<h2>loading....</h2>)
    const [para,setPara]=useState(<p>loading....</p>)
    const [image,setImg]=useState(<img src='' width={500} height={400}/>)
    const [data,getData]=useState([{coverImageUrl:'',summary:'Loading.....'},{}])

    const [winstyle,setws]=useState({width:'60%',height:'700px',position:'absolute',left:'20%',top:'50px',display:'none',border:'3px solid grey'})
   
   async function getData2(){
       
    axios.get('https://api.facthunt.in/fostergem/v1/post/list/public').then((res)=>{
            //console.log(res.data.cart);
            getData(res.data.content);
            console.log(res.data.content)
    })
    
 /*
   await fetch('https://api.facthunt.in/fostergem/v1/post/list/public')
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        getData(res.content)
        console.log(data)
      })
      */
}
function parseStr(str){
   // console.log('str='+str)
    if(str===undefined)
    return;
    str=str.substring(3,str.length-3)
    var str2='';
    for(var i=0;i<str.length;++i){
        str2+=str.charAt(i);
        if(i>=105){
        str2+='...';
        break;
    }

}
return str2;}
function parseStr2(str){
    //console.log('str='+str)
    
    str=str.substring(3,str.length-5)
  

    return str;
}

function displayNews(obj){
    //win.current.style.display='block'
    console.log('running......')
    var marg=`${((((obj.i)+1)/2)*4*50)}px`;
    console.log(marg)
    var t=(window.innerHeight+marg)
    setws({width:'60%',height:'700px',position:'absolute',left:'20%',top:`${marg}`,display:'block',backgroundColor:'white',border:'3px solid grey'})
    var fs='20px',w=500,h=350,p='19px';
    if(window.innerWidth<1000){
    fs='11px'
    w=200
    h=90    
    p='7px'
}
    setHead(<h2 style={{fontSize:fs}}>{obj.head}</h2>)
    setImg(<img src={obj.url} width={w} height={h} style={{margin:'auto',display:'block',marginTop:'30px'}}/>)
    setPara(<p style={{fontFamily:'Times New Roman',fontSize:{p}, padding:'40px'}}>{parseStr2(obj.p)}</p>)
}

function close(){
    //win.current.style.display='block'
    console.log('running......')
    setws({width:'60%',height:'700px',position:'absolute',left:'20%',top:'50px',display:'none',backgroundColor:'white'})
    
}

function dis(){
    try{
   var x= data.map((itr,index)=>(
        <div className='data_box' onClick={()=>{
          displayNews({head:itr.title,p:itr.summary,url:itr.coverImageUrl,i:index})
        }}>
        <div className='datapic' style={{backgroundImage:'url('+itr.coverImageUrl+')'}}></div>
        <p style={{padding:'7px'}}>{parseStr(itr.summary)}</p>
        </div>

     
             ))
   }catch(e){}
             return x;

}
    return(
    
        <div className='app_body'>
            <div style={{display:'flex',width:'100%'}}>
            <button class='menu'  style={{marginLeft:'auto',order:'2',color:'white',width:'70px',height:'30px', backgroundColor:'rgba(10, 132, 255, 1)',border:'none',borderRadius:'4px',fontWeight:'370',fontSize:'12px',marginTop:'25px',marginRight:'5%'}} onClick={getData2}>Menu</button>    
         <h2 style={{width:'100%',color:'grey',fontWeight:'lighter',margin:'15px 5%' }}>Discover News</h2>
         <button style={{marginLeft:'auto',order:'2',color:'white',width:'70px',height:'30px', backgroundColor:'rgba(10, 132, 255, 1)',border:'none',borderRadius:'4px',fontWeight:'670',fontSize:'19px',marginTop:'25px',marginRight:'5%'}} onClick={getData2}>+</button>
         </div>
         {
           dis()

             }
         <div style={winstyle} >
         <button style={{display:'block',marginLeft:'auto',order:'2',color:'white',width:'70px',height:'30px', backgroundColor:'rgba(10, 132, 255, 1)',border:'none',borderRadius:'4px',fontWeight:'770',fontSize:'19px',marginTop:'25px',marginRight:'5%'}} onClick={close}>close</button>
        
        <br/>
        <br/>
         {head}
         {image}
         {para}
         </div>
        </div>
    )
}
export default AppBody;
