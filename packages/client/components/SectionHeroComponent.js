import React from 'react';
import Button from './common/Button';
import CountDown from '../components/common/CountDown';
import { withTranslation } from '../i18n';

const SectionHeroComponent = ({ t }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>{t('index.hero_title')}</h1>
            <div className="countdown">
              <CountDown
                timeTillDate="04 30 2020, 6:00 am"
                timeFormat="MM DD YYYY, h:mm a"
                isSVGCircle={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="hero-content wow fadeIn">
              <h1>{t('index.based_title')}</h1>
              <p>{t('index.based_desc')}</p>
              <Button
                text={t('common:button.pre_register')}
                isScrollButton={true}
                href="/#preregister"
                doOnClick={() => {}}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="client-list wow fadeIn">
              <ul>
                <li>
                  <a
                    href="http://rev-trading.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src="/static/images/logo_revtrading.png"
                      alt="Client"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://revollet.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src="/static/images/logo_revollet.png"
                      alt="Client"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://tradebook.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src="/static/images/logo_tradebook.png"
                      alt="Client"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://revex.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src="/static/images/logo_revex.png"
                      alt="Client"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(['views', 'common'])(SectionHeroComponent);
