import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Brandcrumb from '../components/brandcrumb/index';
import BrandsContent from './../components/brands-content/index';
import Download from './../components/download-banner/index';

const Brands = () => (
  <Layout>
    <Brandcrumb />
    <section className="products-page" style={{marginTop: '100px'}}>
      <div className="container" style={{marginTop: '50px'}}>
        <BrandsContent />
      </div>
      <Download />
    </section>
    <Footer />
  </Layout>
)
  
export default Brands
  