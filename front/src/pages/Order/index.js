import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import InfoData from '../../components/InfoData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function OrderPage(props) {
    const [workshops, setWorshops] = useState([]);
    const [ order, setOrder ] = useState({
        ...props.location.state,
        quantidade: 1,
        step: 1
    })

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
                {order.step !== 4 &&
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section_tittle text-center">
                                <p>Minha compra</p>
                                <h2>Estamos quase lá</h2>
                            </div>
                        </div>
                    </div>
}
                    <div className="row">


                        {order.step === 1 &&
                        <>
                            <h4 className="fluxo">1. Selecione a quantidade</h4>

                            <div className="col-sm-12 col-lg-12">
                                <div className="single_special_cource">
                                    <div className="special_cource_text">
                                        <a className="btn_4">{order.type}</a>
                                        <h4>R${order.price * order.quantidade}</h4>
                                        <a href="course-details.html"><h3>{order.name}</h3></a>
                                        <p>{order.description}</p>
                                        
                                        <div className="author_info">
                                            <div className="form-group">
                                                <input value={order.quantidade} onChange={(e) => setOrder({...order, quantidade: e.target.value})} className="form-control" name="subject" type="number" placeholder="Quantidade" />
                                            </div>
                                            <a className="btn_1" href="#" onClick={() => setOrder({...order, step: 2})}>CONTINUAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        }

                        {order.step === 2 &&
                        <>
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
                                            <td width="150"><a className="btn_1" href="#" onClick={() => setOrder({...order, workshop, step: 3})}>SELECIONAR</a></td>
                                        </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                        }

                        {order.step === 3 &&
                        <>
                            <h4 className="fluxo">3. Confirmação</h4>

                            <div className="col-sm-12 col-lg-12">
                                <div className="single_special_cource no_shadow">
                                    <div className="special_cource_text">
                                        <a className="btn_4">{order.type}</a>
                                        <h4>R${order.price * order.quantidade}</h4>
                                        <a href="course-details.html"><h3>{order.name}</h3></a>
                                        <p>{order.description}</p>
                                        
                                        <div className="box_checkout">
                                            Quantidade: <span>{order.quantidade} X R${order.price}</span>
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
                                                <td>{order.workshop.school.name}</td>
                                                <td>{order.workshop.name}</td>
                                                <td>{order.workshop.date}</td>
                                            </tbody>
                                        </table>

                                        <div className="box_checkout">
                                            <a className="btn_1"  href="#" onClick={() => setOrder({...order, step: 4})}>FINALIZAR COMPRA</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                        }

                        {order.step === 4 &&
                        <>
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
                        </>
                        }

                    </div>
                </div>
            </section>

            <InfoData />
            <Footer />
        </>
    );
}

export default OrderPage;