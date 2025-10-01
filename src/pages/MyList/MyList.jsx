import { useState,useEffect } from 'react'
import { getList,removeFromList } from '../../utils/localStorage'
import { Link } from 'react-router-dom'
import '../../styles/buttons.css'
import './MyList.css'
export default function MyList(){const [list,setList]=useState([]); useEffect(()=> setList(getList()), []); const handleRemove=(id)=>{ removeFromList(id); setList(getList()) }; return (<div className="main-container mylist-page"><h2>Minha Lista ({list.length})</h2>{list.length===0? <p className="empty">Sua lista está vazia.</p>: (<div className="grid">{list.map(m=> (<div className="card" key={m.id}><Link to={`/details/${m.id}`}><img src={m.poster} alt={m.title} /><div className="title">{m.title}</div></Link><button className="nf-btn inlist" onClick={()=>handleRemove(m.id)}>Remover</button></div>))}</div>)}</div>)}
