'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    };
import Link from "next/link"

export default function Testimonial6() {
    return (
        <>

            <div className="testimonial6-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4" data-aos="fade-left" data-aos-duration={1200}>
                            <div className="text-testi">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">Testimonials</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b">Lovely feedback from clients
                                </h1>
                                <p className="font-nunito font16 weight-500 color-nuni lineh-26 margin-b30">Discover the impact of our services through 
                                lovely feedback from our clients. Delve into firsthand experiences as our valued clients share their thoughts on how our 
                                technology consulting solutions have transformed their businesses. These testimonials reflect the dedication, expertise, 
                                and positive outcomes that define our commitment to client success.</p>
                                <div className="div" data-aos="fade-left" data-aos-duration={1400}>
                                    <Link href="/testimonials" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block home5btn7 ts">View
                                        More Feedback</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" data-aos="fade-right" data-aos-duration={1400}>
                            <Swiper {...swiperOptions} className="testomonial2-carousel-area1 owl-carousel owl5-carousel">
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“I wanted to express my sincere gratitude 
                                    for the exceptional service we've received from your team. The technology solutions you provided have significantly 
                                    streamlined our operations, and the level of 
                                    expertise demonstrated throughout the process was truly commendable. Thank you for your dedication to our success!”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Ashish Baral</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, The Baral Ltd.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“I am thrilled to share the positive impact your 
                                    technology consulting services have had on our business. The customized solutions and strategic 
                                    guidance not only addressed our immediate needs but propelled us towards achieving significant milestones. 
                                    Your team's commitment to excellence has been instrumental in our success.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Mohan Basnet</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, ACDC Audio Video Center</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“I wanted to express my appreciation for the 
                                    seamless collaboration and outstanding results achieved through your technology consulting services. 
                                    The personalized approach and attention to detail demonstrated by your team have been invaluable. 
                                    We look forward to continuing this successful partnership.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Kumar Basnet</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Priyanka Prajita Enterprises</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“I am writing to express my satisfaction 
                                    with the user-friendly solutions your team implemented for our business. The training sessions were incredibly helpful, 
                                    and our team quickly adapted to the new technologies. Your commitment to our success has not gone unnoticed, 
                                    and we are grateful for the positive changes these solutions have brought.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11"> Amit Tandon</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“I want to extend my appreciation for the 
                                    exceptional customer support we've received from your team. The level of responsiveness, attention to detail, 
                                    and willingness to go above and beyond expectations have truly set your services apart. 
                                    Your commitment to our success is evident, and we are grateful for the ongoing partnership.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11 ">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CFO, Happy Customers Pvt. Ltd.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business Technology
                                        Consultant to redifining use of technology, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult. I am wondered by their effort to make our business successful”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Sampada Karki</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Mitho Momo</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
