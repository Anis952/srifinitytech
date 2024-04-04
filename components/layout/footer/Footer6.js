import Link from "next/link"

export default function Footer6() {
    return (
        <>
            <div className="footer3-section-area6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer4-all-area footer6 section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="footer-3logo">
                                            <img src="//assets/images/logo/Srifinitynewlogo.png" alt="" />
                                            <p className="font-nunito font-16 lineh-26 color-nuni margin-t margin-b24">Elevate your business with our tailored technology 
                                            solutions. Explore answers to frequently asked questions, discover flexible pricing options, and choose from service packages 
                                            designed to meet your unique needs. For personalized consultations or inquiries, contact our team at admin@srifinity.com or 
                                            +977-9767584593. Your success is our expertise, and we're here to empower your business journey.</p>
                                        </div>
                                        <div className="social3-links-area list5area">
                                            <ul>
                                                <li><Link href="https://www.facebook.com/profile.php?id=61556303953641"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="https://www.google.com/search?q=srifinity+tech&sca_esv=54bdbdfc1cb11477&sxsrf=ACQVn0_ec6uxG7EfI1WBt95uQgjGGGfnjg%3A1709451774802&source=hp&ei=_inkZYa3LtSz4-EP87WRgA8&iflsig=ANes7DEAAAAAZeQ4DvNkHaHe2ZTWnZHXwnSS_zkHYFPI&oq=sri&gs_lp=Egdnd3Mtd2l6IgNzcmkqAggAMgQQIxgnMgQQIxgnMggQLhiABBixAzIFEC4YgAQyBRAuGIAEMgUQABiABDIIEC4YgAQYsQMyBRAAGIAEMgUQLhiABDIFEAAYgARIyg1QAFjZAnAAeACQAQCYAdIBoAHzA6oBBTAuMi4xuAEDyAEA-AEBmAIDoAL-A8ICChAjGIAEGIoFGCfCAggQABiABBixA8ICCxAAGIAEGIoFGLEDmAMAkgcFMC4yLjE&sclient=gws-wiz" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link></li>
                                                <li><Link href="https://www.instagram.com/shree.infinity/" className="ml1"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="https://www.linkedin.com/company/99180974" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">About Link</h1>
                                            <ul>
                                                <li><Link href="/blog2" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t32 d-inline-block">Our
                                                    Blog</Link></li>
                                                <li><Link href="/about" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">About
                                                    Us</Link></li>
                                                {/* <li><Link href="/servicev1" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">
                                                    Practice Areas</Link></li> */}
                                                <li><Link href="/casestudy1" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">Case
                                                    Studies</Link></li>
                                                <li><Link href="/PrivacyPolicy" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block"> Privacy Policy</Link>
                                                </li>
                                                <li><Link href="/contact1" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contcat4-footer">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Get in touch</h1>
                                            <div className="location-icon4 margin-t32">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/email5.png" alt="" />
                                                </div>
                                                <Link href="/mailto:info@taxvice.com" className="font-nunito font-16 lineh-24 weight-600 color-nuni">admin@srifinity.com</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="imgge5">
                                                    <img src="/assets/images/icons/location4.svg" alt="" />
                                                </div>
                                                <Link href="#" className="font-nunito font-16 lineh-24 weight-600 color-nuni"> Kageshwori, Manohara - 09 <br /> Kathmandu<br /> Bagmati 44600, Nepal</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/phone7.svg" alt="" />
                                                </div>
                                                <Link href="/tel:123-456-7890" className="font-nunito font-16 lineh-24 weight-600 color-nuni">+977-9867584593</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-contact6">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Subscribe Our Newsletter
                                            </h1>
                                            <form className="margin-t32">
                                                <div className="cta5-form">
                                                    <input type="text" placeholder="Enter Your email" />
                                                    <div className="buttnocontact1">
                                                        <button type="Submit" className="font-nunito font-1 lineh-16 weight-700 color contactbtn6">Subscribe
                                                            Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border7" />
                            <div className="copyright4 text-center">
                                <p className="font-16 font-nunito color-28 weight-500 ">Copyright {new Date().getFullYear()} © Elevate Your Business with Strategic Technology Solutions | Your Success, Our Expertise - Srifinity Tech Pvt. Ltd.| All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor41.png" alt="" className="elementor-1" />
                <img src="/assets/images/elementor/elementor42.png" alt="" className="elementors8" />
            </div>

        </>
    )
}
