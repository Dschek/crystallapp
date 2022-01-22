import React, { useState } from "react";
import './AddImage.css'

export default () => {
  const [ imgSrc, setImgSrc ] = useState()
  return (
    <div className="main">
      <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-7">
              {imgSrc ?
                <img src={imgSrc}/> :
                <div className="welcome-intro">
                  <h1 className="text-white"><span className="fw-3">Добавьте</span> изображение <span className="fw-3">и
                    укажите</span> высоту и ширину <span className="fw-3">требуемого изображения в</span>
                    миллиметрах.</h1>
                  <p className="text-white my-4">Если не уверены, можете вернуться</p>
                  <div className="button-group store-buttons d-flex">
                    <a href="/home" className="btn prolend-primary style-three text-uppercase">К проектам</a>
                  </div>
                </div>

              }
            </div>
            <div className="col-12 col-md-8 col-lg-5">
              <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                <form id="contact-form">
                  <div className="contact-top">
                    <h3 className="contact-title">Добавьте изображение и укажите высоту и ширину</h3>
                    <h5 className="text-secondary fw-3 py-3"></h5>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          <p style={{ backgroundColor: (imgSrc?'#493DE3':'#e83e8c') }} className="btn style-three text-uppercase">{imgSrc?'Изображение добавлено':'Добавить изображение'}</p>
                          <input type='file' style={{ display: 'none' }} required="required" onChange={(e) => { 
                            let reader = new FileReader();
                            reader.onload = function (e) {
                              setImgSrc(e.target.result)
                            };
                            reader.readAsDataURL(e.target.files[0]);
                            }} />
                        </label>
                      </div>
                      <div className="form-group">
                        <input type="number" className="form-control" name="width" placeholder="Ширина" required="required" />
                      </div>
                      <div className="form-group">
                        <input type="number" className="form-control" name="height" placeholder="Высота" required="required" />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-bordered w-100 mt-3 mt-sm-4"
                        type="submit">Загрузить</button>
                    </div>
                  </div>
                </form>
                <p className="form-message"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-bottom">
          <svg preserveAspectRatio="none" viewBox="0 0 1920 170">
            <defs>
              <linearGradient x1="49.253%" y1="85.804%" x2="49.253%" y2="43.074%" id="a">
                <stop stop-color="#FFF" offset="0%" />
                <stop stop-color="#FFF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none">
              <path
                d="M1920 4.719v69.5c-362.63 60.036-692.797 55.536-990.5-13.5C565.833-23.615 256 12.813 0 170L1 4.719h1919z"
                fill="url(#a)" transform="rotate(180 960.5 87.36)" />
              <path
                d="M1 170V99c269.033-70.44 603.533-66.44 1003.5 12C1494 207 1921 4.719 1921 4.719L1920 170H1z"
                fill-opacity=".3" fill="#FFF" />
              <path
                d="M1 170.75V99C373.115 4.216 705.281-4.951 997.5 71.5c365.667 95.667 673.5 73.406 923.5-66.781l-1 166.031H1z"
                fill-opacity=".3" fill="#FFF" />
              <path
                d="M1 170v-67C400.333-1.333 744.167-19 1032.5 50c432.5 103.5 754 19.219 888.5-45.281l-1 166.031L1 170z"
                fill-opacity=".35" fill="#FFF" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  )
}