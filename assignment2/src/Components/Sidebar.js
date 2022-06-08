import './Sidebar.css'
function Sidebar(){
return(
<div className='sidebar_body'>
<div className='row'>
<i className="fa fa-bolt" style={{fontSize:"24px",color:'white', backgroundColor:'#333333',padding:'5px 10px', borderRadius:'2px',marginTop:'7px',marginLeft:'5%'}}></i>
<h4>SmartUp</h4>
<i className="fa fa-bars" style={{fontSize:"24px",color:'#333333',padding:'5px 10px', borderRadius:'2px',marginTop:'12px',marginLeft:'auto',order:'2'}} ></i>
</div>
<div className='row_profile'>
<i className="fa fa-user" style={{fontSize:"30px",color:'grey', backgroundColor:'white',padding:'5px 10px',marginTop:'7px',marginLeft:'5%'}}></i>
<h4 className='profile'>Profile</h4>
<i className='fas fa-bell' style={{fontSize:'24px',padding:'5px 10px',color:'#EA4335', borderRadius:'2px',marginTop:'11px',marginLeft:'auto',order:'2'}}></i>
</div>
<div className='row_profile' style={{ backgroundColor:'hsla(0,0%,100%,.25)'}}>
< input id='search_bar' type='text' placeholder='Discover'/>
</div>
</div>
)
}
export default Sidebar;