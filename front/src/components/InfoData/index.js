import React from 'react';

function InfoData() {
    return (            
        <section className="member_counter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_member_counter">
                            <span className="counter">1024</span>
                            <h4>Profissionais</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_member_counter">
                            <span className="counter">320</span>
                            <h4>Escolas</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_member_counter">
                            <span className="counter">5463</span>
                            <h4>Estudantes</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_member_counter">
                            <span className="counter">15</span>
                            <h4>Estados</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoData;
