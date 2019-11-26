import React from 'react';

import FeaturedCourses from '../../components/FeaturedCourses';

function MainPage() {
    return (
        <>
            <section class="banner_part">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-xl-6">
                            <div class="banner_text">
                                <div class="banner_text_iner">
                                    <h5>Every child yearns to learn</h5>
                                    <h1>Making Your Childs
                                        World Better</h1>
                                    <p>Replenish seasons may male hath fruit beast were seas saw you arrie said man beast whales
                                        his void unto last session for bite. Set have great you'll male grass yielding yielding
                                        man</p>
                                    <a href="#" class="btn_1">View Course </a>
                                    <a href="#" class="btn_2">Get Started </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedCourses />

            <section class="member_counter">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_member_counter">
                                <span class="counter">1024</span>
                                <h4>Profissionais</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_member_counter">
                                <span class="counter">320</span>
                                <h4>Escolas</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_member_counter">
                                <span class="counter">5463</span>
                                <h4>Estudantes</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_member_counter">
                                <span class="counter">15</span>
                                <h4>Estados</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainPage;