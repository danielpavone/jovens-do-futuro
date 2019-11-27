import React from 'react';

function AboutUs() {
    return (
        <section className="learning_part">
            <div className="container">
                <div className="row align-items-sm-center align-items-lg-stretch">
                    <div className="col-md-7 col-lg-7">
                        <div className="learning_img">
                            <img src="img/learning_img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <div className="learning_member_text">
                            <h5>Quem somos</h5>
                            <h2>Capacitamos profissionais e os jovens do futuro</h2>
                            <p>E-future é uma plataforma voltada para criar um link entre, o universo 
         de tecnologia com escolas públicas que não tem a oportunidade 
         ou incentivo financeiro suficiente para ter acesso esse tipo de conhecimento.</p>
                            <a href="#" className="btn_1">CADASTRE-SE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;