import { useState } from 'react';
import Save from './Save/Save';


function App() {
  const [param, setParam] = useState({
    open: 0,
    menu: true,
    width: 100,
    height: 100,
    img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
    point: [],
    crystal: 1,
    color: 1
  });
  let ratio = 1;
  const height=100;
  const color = [{name:'CRYSTAL', color:'#fbfdfe'},{name:'CRYSTAL AB', color:'#edd3ed'},{name:'JET', color:'#343434'},{name:'Jet Hematite', color:'#574f50'},{name:'Light Colorado Topaz', color:'#f0cc94'},{name:'Light Siam', color:'#F20056'},{name:'Light Sapphire', color:'#89a5d2'},{name:'Aquamarine', color:'#91b9f7'},{name:'Emerald', color:'#3b8272'},{name:'Amethyst', color:'#817181'},{name:'Rose', color:'#d993b1'},{name:'Light Rose', color:'#f4e0d5'},{name:'Black Diamond', color:'#aeaba3'},{name:'Graphite', color:'#414141'},{name:'Fuchsia', color:'#b7386e'},{name:'Chrysolite', color:'#b0fcd1'},{name:'Citrine', color:'#f7e640'},{name:'Jonquil', color:'#eef293'},{name:'Peridot', color:'#77a611'},{name:'Sapphire', color:'#185887'}];
  const crystal = [{ name: 'ss3', radius: 16 }, { name: 'ss5', radius: 20 }, { name: 'ss6', radius: 22 }, { name: 'ss7', radius: 24 }, { name: 'ss8', radius: 26 }, { name: 'ss9', radius: 28 }, { name: 'ss10', radius: 30 }, { name: 'ss12', radius: 34 }, { name: 'ss16', radius: 42 }, { name: 'ss20', radius: 50 }];

  let modal = {};
  switch (param.open) { 
    case 1: modal = { title: 'Сохранение', body: <Save/> };
      break;
    case 2: modal = { title: 'Стразы', body: crystal.map((elem, index) => (<p onClick={() => { param.crystal = index; setParam({ ...param }) }} style={{ padding: '3px', margin: '3px', width: '5em', border: 'solid', color: (index === param.crystal ? 'red' : '') }}><i className="far fa-gem" />{elem.name}</p>)) };
      break;
    case 3: modal = { title: 'Цвета', body: color.map((elem, index) => (<div onClick={() => { param.color = index; setParam({ ...param }) }} style={{ width: '3em', margin: '3px', height: '3em', border: '0.3em solid', background: elem.color, color: (index === param.color ? 'red' : '') }} />)) };
      break;

  }
  function clickPoint(event) {
    const x = event.pageX;
    const y = event.pageY;
    const heightWindow =event.target.clientHeight;
    ratio = heightWindow/height;
    const pointIndex = param.point.findIndex((point) => {
      const vectorX = x - point.x;
      const vectorY = y - point.y;
      const vectorLength = vectorX * vectorX + vectorY * vectorY;
      return vectorLength <= (crystal[point.type].radius * crystal[point.type].radius)
    })
    if (pointIndex >= 0)
      param.point.splice(pointIndex, 1)
    else
      param.point.push({ type: param.crystal, color: param.color, x: x, y: y })
    setParam({ ...param })

  }

  return (
    <div id="wrapper">
      <nav className={"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" + (param.menu ? ' toggled' : '')} style={{ backgroundImage: 'linear-gradient(180deg, #F956CB 10%, #4e73df 100%)' }}>
        <div className="container-fluid d-flex flex-colÍumn p-0">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" >
            <button id="sidebarToggle" onClick={() => { param.menu = !param.menu; setParam({ ...param }) }} className="btn rounded-circle border-0" type="button" />
            <div className="sidebar-brand-icon rotate-n-15"></div>
            <div className="sidebar-brand-text mx-3"><span></span></div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul id="accordionSidebar" className="navbar-nav text-light">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <i className="fas fa-sign-out-alt"></i>
                <span>Вернуться к проектам</span>
              </a>
              <a className="nav-link" data-toggle="modal" onClick={() => { param.open = 1; setParam({ ...param }) }}>
                <i className="fas fa-save"></i>
                <span>Сохранить</span>
              </a>
              <a className="nav-link" data-toggle="modal" onClick={() => { param.open = 2; setParam({ ...param }) }}>
                <i className="far fa-gem"></i>
                <span>Стразы</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" onClick={() => { param.open = 3; setParam({ ...param }) }}>
                <i className="fas fa-fill-drip"></i>
                <span>Цвет</span>
              </a></li>
          </ul>
          <div className="text-center d-none d-md-inline"></div>
        </div>
      </nav>

      <div className={"modal fade" + (param.open ? ' show' : '')} id="saveModal" style={(param.open ? { display: 'block' } : {})} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{modal.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { param.open = 0; setParam({ ...param }) }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {modal.body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { param.open = 0; setParam({ ...param }) }}>Закрыть</button>
            </div>
          </div>
        </div>
      </div>

      <div id="content-wrapper" className="d-flex flex
      -column" style={{ backgroundColor: 'gainsboro' }} onClick={(event) => {clickPoint(event) }}>
        <div style={{ width: '100%', height: '100%',  }}>
          {param.point.map((elem) => {
            const cryst = crystal[elem.type]; 
            return (
              <div style={{ position: 'absolute', width: cryst.radius * ratio, height: cryst.radius * ratio, left: elem.x, top: elem.y, borderRadius: cryst.radius, background: color[elem.color].color+'66'}} />
            )
          })}
          <img src={param.img} style={{ width: '100%', zIndex: -10 }} />
        </div>
      </div>
    </div>
  );
}

export default App;
