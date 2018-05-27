import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// imported pages
import HomePage from './pages/home/Home';
import Team from './pages/team/Team';
import BlogPage from './pages/blog/blogPage';
import BengkelInovasiPage from './pages/bengkelinovasi/bengkelinovasi';
import BisnisInkubasi from './pages/bisnisinkubasi/bisnisinkubasi';
import TenantPage from './pages/tenant/tenantPage';
import GalleryPage from './pages/gallery/galleryPage';
import BlogDetailPage from './pages/blogdetail/blogDetailPage';
import ContactPage from './pages/contact/ContactPage';

class Routes extends Component {

  render() {
    return ( 
      <div className="global-wrapper">
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/team" component={Team}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/bengkel-inovasi" component={BengkelInovasiPage}/>
        <Route path="/inkubasi-bisnis" component={BisnisInkubasi}/>
        <Route path="/tenant/:slug" component={TenantPage}/>
        <Route path="/gallery/:slug" component={GalleryPage}/>
        <Route path="/article/detail/:slug" component={BlogDetailPage}/>
        <Route path="/contact-us" component={ContactPage}/>
        <Footer />
      </div>
    );
  }
}

export default Routes;
