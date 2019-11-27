import React, {useEffect, useState} from 'react';

import InfoData from '../../components/InfoData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

function OrderPage(props) {
    const [workshops, setWorshops] = useState([]);

    useEffect(() => {
        const loadWorkshops = async () => {
          const response = await api.get('workshops');
          setWorshops(response.data);
        };
    
        loadWorkshops();
    }, []);

    console.log(workshops);
    return (
        <>
            <Header />
            
            <section className="special_cource course_padding_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section_tittle text-center">
                                <p>Minha compra</p>
                                <h2>Estamos quase lá</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <h4 className="fluxo">1. Selecione a quantidade</h4>

                        <div className="col-sm-12 col-lg-12">
                            <div className="single_special_cource">
                                <div className="special_cource_text">
                                    <a className="btn_4">Web</a>
                                    <h4>R$130,00</h4>
                                    <a href="course-details.html"><h3>ReactJS</h3></a>
                                    <p>orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV.</p>
                                    
                                    <div className="author_info">
                                        <div class="form-group">
                                            <input class="form-control" name="subject" type="text" placeholder="Quantidade" />
                                        </div>
                                        <a className="btn_1" href="#">CONTINUAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h4 className="fluxo">2. Selecione a escola/workshop a ministrar</h4>

                        <div className="col-sm-12 col-lg-12 single_special_cource">
                            <div className="special_cource_text">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Escola</th>
                                            <th>Workshop</th>
                                            <th>Data</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {workshops.map(workshop => (
                                        <tr>
                                            <td>{workshop.school.name}</td>
                                            <td>{workshop.name}</td>
                                            <td>{workshop.date}</td>
                                            <td width="150"><a className="btn_1" href="#">SELECIONAR</a></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h4 className="fluxo">3. Confirmação</h4>

                        <div className="col-sm-12 col-lg-12">
                            <div className="single_special_cource no_shadow">
                                <div className="special_cource_text">
                                    <a className="btn_4">Web</a>
                                    <h4>R$130,00</h4>
                                    <a href="course-details.html"><h3>ReactJS</h3></a>
                                    <p>orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV.</p>
                                    
                                    <div className="box_checkout">
                                        Quantidade: <span>4 X R$130,00</span>
                                    </div>

                                    <div className="box_checkout">
                                        Forma de pagamento: <span>Boleto</span>
                                    </div>

                                    <div className="box_checkout">
                                        Escola/Workshop selecionado:
                                    </div>

                                    <table className="table table_conf">
                                        <thead>
                                            <tr>
                                                <th>Escola</th>
                                                <th>Workshop</th>
                                                <th>Data</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Escola municipal</td>
                                                <td>Logica de prg</td>
                                                <td>20/12/2019 20:30</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="box_checkout">
                                        <a className="btn_1" href="#">FINALIZAR COMPRA</a>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-lg-12">
                            <div className="single_special_cource no_shadow">
                                <div className="special_cource_text no_shadow">
                                    
                                    <div className="confirmacao_check">

                                        <h1>
                                            <span>#9887766</span>
                                            Sua compra foi finalizada com sucesso!
                                        </h1>

                                        <h2>
                                            Muito obrigado por fazer parte dessa ação que todos ganham. <br />Você receberá todas informações por e-mail
                                        </h2>

                                        <img src="img/checkout_confirm.png" alt="" />

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <InfoData />
            <Footer />
        </>
    );
}

export default OrderPage;