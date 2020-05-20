import { connect } from 'react-redux';
import Header from './Header';
import s from './styles/layout.module.scss';
// import { authenticationService } from '../_services';

const Layout = ({ children }) => (
  <div className={s.layout}>
    <div className={s.layout_content}>
      <header>
        <Header />
      </header>
      <main className={s.layout_main_block}>
        {children}
      </main>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // counter: state.counter.value
});

const mapDispatchToProps = {
  // decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
