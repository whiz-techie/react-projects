import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="categories">
<div>
    <h4>POPULAR CATEGORIES</h4><p>Cars</p><p>Flats for rent</p><p>Jobs</p><p>Mobile Phones</p>
</div>
<div>
    <h4>TRENDING SEARCHES</h4><p>Bikes</p><p>Watches</p><p>Books</p><p>Pets</p>
</div>
<div>
    <h4>ABOUT US</h4><p>About OLX Group</p><p>OLX Blog</p><p>Contact Us</p><p>OLX for Businesses</p>
</div>
<div>
    <h4>OLX</h4><p>Help</p><p></p>Sitemap<p></p><p>Legal and Privacy information</p>
</div>
        </div>
        <div className="second-footer">
            <div>
        <h5>
            Other Contries
        </h5>
        </div>
            <div>
        <p>india - South Africa - indonesia</p>
            </div>
            <div className="end">
                <h5>
                Free Classifieds in Pakistan . © 2006-2020 OLX
                </h5>
            </div>
        </div>
        </div>
    )
}

export default Footer
